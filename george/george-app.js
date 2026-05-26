// Shared app logic for George section.
// Each page sets window.GAPP = { key: '...', seed: [...] } before loading this script.

var KEY  = window.GAPP.key;
var SEED = window.GAPP.seed;

function load() {
  try { return JSON.parse(localStorage.getItem(KEY) || '[]'); }
  catch { return []; }
}

function save(links) { localStorage.setItem(KEY, JSON.stringify(links)); }

function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2); }

function parseTags(str) {
  return [...new Set(str.split(',').map(function(t) { return t.trim().toLowerCase(); }).filter(Boolean))];
}

function allTags(links) {
  var s = new Set();
  links.forEach(function(l) { l.tags.forEach(function(t) { s.add(t); }); });
  return [...s].sort();
}

function seedLinks() {
  var links    = load();
  var existing = new Set(links.map(function(l) { return l.url; }));
  var added    = false;
  SEED.forEach(function(s) {
    if (!existing.has(s.url)) {
      links.push({ id: uid(), url: s.url, title: s.title, tags: s.tags, addedAt: Date.now() });
      added = true;
    }
  });
  if (added) save(links);
}

var sel = new Set();

// ── Tabs ──
function switchTab(name) {
  document.querySelectorAll('.tab-pane').forEach(function(p) { p.classList.remove('active'); });
  document.querySelectorAll('.tab-btn').forEach(function(b) { b.classList.remove('active'); });
  document.getElementById('pane-' + name).classList.add('active');
  document.querySelector('[data-tab="' + name + '"]').classList.add('active');
  if (name === 'discover') renderDiscover();
  if (name === 'browse')   renderBrowse();
}

// ── Discover ──
function renderDiscover() {
  renderTagBar('discoverTags', renderDiscover);
}

function openRandom() {
  var links = load();
  if (!links.length) { showResult('No links saved yet.', true); return; }
  var pool = sel.size ? links.filter(function(l) { return l.tags.some(function(t) { return sel.has(t); }); }) : links;
  if (!pool.length) { showResult('No links match the selected tags.', true); return; }
  var pick = pool[Math.floor(Math.random() * pool.length)];
  window.open(pick.url, '_blank', 'noopener,noreferrer');
  showResult('Opening: ' + pick.title, false);
}

function showResult(msg, isErr) {
  var el = document.getElementById('openResult');
  el.textContent = msg;
  el.className = 'open-result' + (isErr ? ' err' : '');
  clearTimeout(el._t);
  el._t = setTimeout(function() { el.textContent = ''; }, 4000);
}

// ── Browse ──
function renderBrowse() {
  renderTagBar('browseTags', renderBrowse);

  var links = load();
  var query = (document.getElementById('browseSearch').value || '').trim().toLowerCase();
  var grid  = document.getElementById('tilesGrid');
  var count = document.getElementById('browseCount');

  var items = [...links].reverse();
  if (sel.size) items = items.filter(function(l) { return l.tags.some(function(t) { return sel.has(t); }); });
  if (query)    items = items.filter(function(l) {
    return l.title.toLowerCase().includes(query) ||
           l.url.toLowerCase().includes(query)   ||
           l.tags.some(function(t) { return t.includes(query); });
  });

  count.textContent = items.length + ' link' + (items.length !== 1 ? 's' : '');
  grid.innerHTML = '';

  if (!items.length) {
    var msg = document.createElement('div');
    msg.className = 'empty-browse';
    msg.textContent = links.length ? 'No links match.' : 'No links yet.';
    grid.appendChild(msg);
    return;
  }

  items.forEach(function(link) {
    var tile = document.createElement('div');
    tile.className = 'tile';

    var rem = document.createElement('button');
    rem.className = 'tile-remove';
    rem.title = 'Remove';
    rem.textContent = '×';
    rem.onclick = function(e) {
      e.preventDefault();
      save(load().filter(function(l) { return l.id !== link.id; }));
      var remaining = load();
      sel.forEach(function(t) { if (!allTags(remaining).includes(t)) sel.delete(t); });
      renderBrowse();
      renderDiscover();
    };

    var a = document.createElement('a');
    a.className = 'tile-title';
    a.href = link.url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.textContent = link.title;

    var domain = '';
    try { domain = new URL(link.url).hostname.replace(/^www\./, ''); } catch(e) {}
    var urlSpan = document.createElement('div');
    urlSpan.className = 'tile-url';
    urlSpan.textContent = domain || link.url;

    var tagsDiv = document.createElement('div');
    tagsDiv.className = 'tile-tags';
    link.tags.forEach(function(tag) {
      var chip = document.createElement('span');
      chip.className = 'tag-pill';
      chip.textContent = tag;
      tagsDiv.appendChild(chip);
    });

    tile.appendChild(rem);
    tile.appendChild(a);
    tile.appendChild(urlSpan);
    if (link.tags.length) tile.appendChild(tagsDiv);
    grid.appendChild(tile);
  });
}

// ── Tag bar ──
function renderTagBar(containerId, onToggle) {
  var tags = allTags(load());
  var box  = document.getElementById(containerId);
  box.innerHTML = '';

  if (!tags.length) {
    var note = document.createElement('span');
    note.className = 'no-tags-note';
    note.textContent = 'No tags yet.';
    box.appendChild(note);
    return;
  }

  tags.forEach(function(tag) {
    var btn = document.createElement('button');
    btn.className = 'tag-toggle' + (sel.has(tag) ? ' on' : '');
    btn.textContent = tag;
    btn.onclick = function() { sel.has(tag) ? sel.delete(tag) : sel.add(tag); onToggle(); };
    box.appendChild(btn);
  });
}

// ── Add ──
function addLink() {
  var url   = document.getElementById('fUrl').value.trim();
  var title = document.getElementById('fTitle').value.trim();
  var tags  = parseTags(document.getElementById('fTags').value);

  if (!url) { flash('Please enter a URL.', true); return; }
  try { new URL(url); } catch(e) { flash('Please enter a valid URL (include https://).', true); return; }

  var links = load();
  links.push({ id: uid(), url: url, title: title || url, tags: tags, addedAt: Date.now() });
  save(links);

  document.getElementById('fUrl').value   = '';
  document.getElementById('fTitle').value = '';
  document.getElementById('fTags').value  = '';
  document.getElementById('fUrl').focus();
  flash('Saved!', false);
}

function flash(msg, isErr) {
  var el = document.getElementById('addFeedback');
  el.textContent = msg;
  el.className = 'add-feedback' + (isErr ? ' err' : '');
  clearTimeout(el._t);
  el._t = setTimeout(function() { el.textContent = ''; }, 2500);
}

document.addEventListener('DOMContentLoaded', function() {
  seedLinks();

  var ids = ['fUrl', 'fTitle', 'fTags'];
  ids.forEach(function(id, i) {
    var el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('keydown', function(e) {
      if (e.key !== 'Enter') return;
      if (i < ids.length - 1) document.getElementById(ids[i + 1]).focus();
      else addLink();
    });
  });

  renderDiscover();
});
