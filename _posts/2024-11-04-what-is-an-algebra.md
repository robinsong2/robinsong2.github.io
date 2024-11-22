---
layout: post
title:  "What is an Algebra?"
date:   2024-11-04 13:22:01 +0000
categories: maths
published: true
hidden: true
tags: concept algebra history Diophantus arabic Hilbert
---

A note on all my posts: these posts are intended to be readable without having to delve into actual mathematics you are uncomfortable with. If you don't understand an equation, that's ok just read the text and hopefully you will get an idea of the mathematical motivation for it anyway. If you are trying to engage on a more technical level, there are a number of drop-down sections that contain proofs/harder material - otherwise, just ignore these, they are not consequential to the flow of the post. Enjoy!

- TOC
{:toc}

One of the most common questions I get when people read a snippet of maths that I'm doing/looking at is a general confusion that we often seem to use verbs like nouns:

> "What do you mean by *an algebra*? Isn't algebra something you do?" 

Reflecting on this got me thinking about perspectives that mathematicians have that may be quite different to a lay-person's perspective on mathematics, and I hope to communicate a little bit of that here. This post is the first of a 3 part series:
1. Here, we will discuss what algebra is, and how that relates to the notion of 'an algebra'. 
2. In the second post, we will discuss the historical development of algebra, and some of the problems it was used for.
3. Finally, we will discuss the usage of algebra in modern mathematics, and see how wide ranging it really is as a subject.

But first, let's start at the beginning:

# Algebra I - The Method

Consider the following sad, but very old[^1], poem:

>'Here lies Diophantus,' the wonder behold.  
> Through art algebraic, the stone tells how old:   
> 'God gave him his boyhood one-sixth of his life,  
> One twelfth more as youth while whiskers grew rife;  
> And then yet one-seventh ere marriage begun;  
> In five years there came a bouncing new son.  
> Alas, the dear child of master and sage,  
> Attained only half of his father's full age.  
> When chill fate took him - an event full of tears -  
> Heartbroken, his father lived just four more years.'  

How long did Diophantus live?

> <details>
> <summary> Spoiler! </summary>
> This is very much a classic high-school question, so let's do it. Let $x$ be the father's age when he dies. Then the story tells us that
> 
> $$
> \frac{1}{6}x+\frac{1}{12}x+\frac{1}{7}x+5+\frac{1}{2}x+4=x.
> $$
> 
> We follow our training, collect the $x$'s,
> 
> $$
> 9 = \left(1-\frac{1}{6}-\frac{1}{12}-\frac{1}{7}-\frac{1}{2}\right)x = \frac{84-14-7-12-42}{84}x = \frac{9}{84}x,
> $$
> 
> and so lo and behold $ x=84 $ after cancelling the $9$'s and multiplying by $84$. 
> </details>

This type of reasoning is perhaps how we first come across algebra in our textbooks. These first problems might be given to us initially in this 'wordy' format:

> <summary> Problem: </summary>
> I have some apples. After eating 3 apples, then giving half of the remaining apples to my friend, I have one third of the original amount. How many did I start with?

However they are soon replaced by the more intimidating-looking 'Find $x$' questions:

> <summary> Problem: (Same as previous!) </summary>
> 
> $$
> \frac{x-3}{2} = \frac{x}{3}
> $$
> 
> Find $x$.

This step into abstraction follows the historical development of algebra that we'll discuss later. We condense this historical and dramatic perspective shift into perhaps two lessons aged 13. No wonder so many people find it so contrived! From that point onwards algebra is often known as "the stuff with the $x$'s and $y$'s". We learn more and more 'rules', like how to factor:

$$
xy+xz = x(y+x),
$$

or multiply out brackets:

$$

(x+2)(x+3) = x^2 + 2x+3x+6 = x^2+5x+6
$$

and so on. Eventually we hit the dreaded quadratic formula, algebraic fractions, polynomial division maybe... Rules upon rules (at this point it is unlikely we have had the quadratic formula proven to us, but more likely been told to memorise it - I did too!).

This is all noticeable to us as we repeat question after question 'drilling' us on algebraic manipulation. Some things however are less noticeable to us. Did anyone point out explicitly to you that addition works either way round?

$$
x+y = y+x,
$$

or that if you are adding three things together it doesn't matter which pair you add up first?

$$
(x+y)+z = x+(y+z).
$$

I would guess probably not - that is to say, there are many rules to algebra which we might not necessarily have realised are there! So what, right? It all worked (True!), and they are obvious (umm, probably true) and once a rule is there why worry about it (definitely not true!). Let's see what more we can say about some of these rules.

# Algebra II - Breaking the Rules

Almost all of the time when we do algebra, we are thinking "$x$ is just a number" loudly in our heads and moving it around like we would any other number. This mostly works fine, but sometimes we can get easily hoodwinked. Consider another pretty normal rule that we probably didn't think twice about at school:

$$
\text{If } 3x=3y, \text{ then } x=y.
$$

Pretty unsurprising! But this goes pretty wrong when we start talking about algebra in slightly different settings. (Some people may have learned at some point that you can't divide by zero, but division by 3 has never been controversial).

## Modular Arithmetic

Also called "clock arithmetic", this is the setting where we do maths only worrying about the remainder of our calculation after dividing by some modulus. This is less scary than it sounds, just imagine talking about minutes on a clock face: if you wait 100 minutes from half past an hour, you end up at 10 minutes past an hour. We don't care which hour, just that after 60 minutes the second hand of the clockface will return to where it was before. Alternatively, you could imagine degree of rotation. If I tell you to turn around $360^{\circ}$, it looks like you haven't moved at all, and if I tell you to turn around $1000^{\circ}$ then that is 2 full rotations (making $2 \times 360 = 720$) plus an additional $280^{\circ}$, so it simply looks like a $280^{\circ}$ rotation.

We can do arithmetic like this. For example, if I listen to an album the lasts 43 minutes three times in a row, the second hand will be exactly $9$ minutes further round when I finish (because $43\times 3 = 129 = 60 + 60 + 9$). We write this as

$$
43 \times 3 \equiv 9 \qquad (\text{modulo }60).
$$

(Again, this simply means that once we remove multiples of 60, $43\times 3$ leaves a remainder of $9$). But here's the catch: if I listened to a single 3 minute long song three times in a row, the second hand will again be exactly 9 minutes further round when I finish. So what do we know?

$$
43 \times 3 \equiv 9 \equiv 3 \times 3 \qquad (\text{modulo }60).
$$

Hmm... So $ 43 \times 3 \equiv 3 \times 3 $ in this weird modulo $60$ world. What's happened? Have I broken our obvious "I can divide by $3$" rule? 

You might complain: this is cheating because we're doing things on a clock face and ignoring the multiples of 60 so we aren't really doing arithmetic in the *same place* as we were before with normal numbers.

If so, congratulations! You've just discovered the notion (or rather the motivation) of *an algebra*! An algebra is simply a setting in which we can do algebraic things like collecting like terms, adding, multiplying, etc.

Here's an analogy: many people refer to mathematics as a game, where you make a collection of rules and then try to see what could happen when playing according to that rule set. If *doing algebra* is like playing a board a game, then *an algebra* is the board and pieces you play with, and the rule-set you choose. Sometimes you can use the same board and pieces but play with entirely different (or frustratingly subtly different) rules. 

# Algebras - Laying Out the Rules

So, if an algebra is like the board, pieces and rules, how do we get a handle on one in real life? Well, you need a collection of "numbers" that you are allowed to add and multiply together, and you need a collection of rules that tell you how to manipulate these numbers. We will get to the definition in a moment, but first I want to clarify the modular (clock) arithmetic setting.

What are the possible positions of the minute hand? Well, 

$$
0,1,2,...,58,59
$$

are all the possibilities. So in this setting, our algebra has only sixty "numbers" in it. 

> <summary> New Perspective: </summary>
> Now, the idea is that once we've chosen an algebra, the numbers in that algebra are all we have available - that's the whole universe. It's like entering your favourite TV/film series - once you've entered that world, you know the characters and all the interactions are between those characters. 
> 
> Frodo isn't about to pop up in the Marvel Universe, they are completely separate structures. You should think of the numbers in an algebra as being characters in their own universe. (Similarly it wouldn't mean much to place a chess queen on the third square of Snakes & Ladders - wrong game!)
> 
> This might seem very easy at first, but things can start getting confusing, especially since we only have so many symbols to describe things with. After 1000 more Marvel movies they are going to run out of names and it's possible a "Frodo" will appear, but we will have to be aware that despite having the same name, they are not the same entity!

So it's important to separate these algebras/universes/games in our mind. To do this, we're going to make a small (but hopefully clarifying) change of notation. Now, when we talk about minutes on a clock, I will write the number in square bracket, e.g. $[30]$. I could equally have chosen the symbol 💧 instead of $[30]$. Now we get equations like

$$
[30]+[30]+[30] = [30]
$$

or 

$$
💧 + 💧 + 💧 = 💧
$$

The point being, that whatever quantity this is, we now think of it as being completely separate from the usual number $30$ (for which $30+30+30=90$). So, the modular arithmetic algebra takes place in the universe consisting of "numbers"

$$
[0],[1],...,[59]
$$

with rules for how to "add" and "multiply" these numbers, such as

$$
[4] \times [27] = [48], [27] + [35] = [2], ...
$$

Now we want to get a bit more mathematical. I can't just take a collection of "numbers" and call that my algebra and be done with it (what is queen + bishop??), I need to say how those numbers add and multiply with each other. This is something I have to *specify* - to some extend the names of the numbers are completely irrelevant until I say how to add and multiply them.

> <summary> New Perspective: </summary>
> Consider the fact that "numbers" do not have qualities or properties inherent to themselves, really $7$ is just a placeholder. The thing that gives numbers any sort of meaning is the relationships between them. 

In our continued analogy, chess pieces have no meaning to someone until you tell them how the move and interact with each other, and what the rules are. Only then can you play the game. What we will do now is write down a **definition** of an algebra. By this, I mean a mathematical framework that says "ok, you've given me a bunch of numbers and told me rules for adding and multiplying, let me just consult my framework... yes! you've given me an algebra (or no! this is not an algebra)". This is not the definition of a specific algebra, this is the definition of the phrase "an algebra". If you like, I've defining "board game", not "chess".

> <summary> Definition: (of "an algebra")</summary>
> An **algebra**[^2] consists of a collection, $S$, of elements, and two "operations", addition and multiplication ($+$ and $\times$), which each can take any pair of elements and return a third element. That is, given any two elements of $S$, call them $x$ and $y$, I can add them and multiply them to get elements $x+y$ and $x \times y$ in $S$. Furthermore, the following things must happen (these are called the **axioms**):
> <ol>
> <li value="1"> There must be elements in $S$ called $0$ and $1$ which satisfies $0+x=x$ and $0 \times x = 0 = x\times 0$ and $1 \times x = x = x\times 1$ for any element $x$ in $S$. </li>
> <li value="2"> For every element $x$ in $S$, there must be some other element $y$ such that $x+y=0$. </li>
> <li value="3"> The order in which I add is irrelevant, so $x+y=y+x$ for any pair of elements $x,y$ in $S$, and $(x+y)+z=x+(y+z)$ for any three elements $x,y,z$ in $S$. </li>
> <li value="4"> You can expand brackets (on both sides), so   
> 
> $$  
> (x+y) \times z = x\times z + y\times z
> $$
> 
> and,
> 
> $$  
> z\times (x+y) = z\times x + z\times y.  
> $$
> </li>
> <li value="5"> The bracket order of multiplication is irrelevant, so  
>
> $$  
> x \times (y \times z) = (x \times y) \times z. 
> $$
> </li>
> </ol>


## Examples of Algebras

Ok ok, I said "how do we get a handle on one in real life", and then splurted out a whole lot of axioms. Whoops. Let's take a step back and look at some examples. 

### Normal Numbers!

Yay back to normal numbers. Let's consider whole numbers (both positive and negative), with the addition and multiplication we were taught as children (remember that to specify an algebra I need to tell you lots of things - what the numbers are, and how to add them, and how to multiply them). Do these form an algebra? I have:

- a collection of elements (all the whole numbers)
- addition and multiplication operations (the ones we learnt as children)
- an element $0$ which satisfies $0+x=x$, and all the other rules it needed to satisfy
- an element 1 which satisfies $1\times x=x$, and all the other rules it needed to satisfy
- for every whole number $x$ we have the number $-x$ and we know that $x + (-x) = 0 $
- order and bracketing of addition is irrelevant
- brackets expand (you can check this empirically, it may take a bit more thought to prove it)

Great, we've checked that the whole numbers with normal addition and multiplication form an algebra!

### Modular Arithmetic

I've already told you that this is an algebra, but let's check it. So, there are sixty "numbers" in our algebra, i.e. the set $S$ in our definition of an algebra in this case is

$$
S = \{ [0],[1],...,[58],[59] \}.
$$

We also need a way of adding and multiplying, but we already know these. We add and multiply as we would with normal whole numbers but only take the remainder after removing multiples of 60. So, in our modular arithmetic algebra,

$$
[3]\times [43] = [9], \qquad [37]+[54] = [31], \qquad [23] \times [15] = [45],...
$$

Great! So now all we need to do is check that all of the axioms. 
1. The first one is fairly easy, we have things called $[0]$ and $[1]$ and they do exactly the things we need.
2. This one is a bit less obvious. If I pick $x=[23]$ for example, then which element $y$ satisfies $x+y=0$? Well, it's actually $y=[37]$, because in our normal world of arithmetic $23+37=60+0$ so after removing multiples of $60$ we get that, $[23]+[37]=[0]$.
3. This one is again clear since it works in the normal world of adding.
4. Ditto with multiplication!
5. Ditto!!

So actually, given we know these things work with addition and multiplication of normal whole numbers, there's very little extra stuff to check[^3]! In general, it could be a real pain to check all these things. This is especially true when the algebra is not obviously related to a collection of this we see in the world and add/multiply together.

### A Small Algebra

For example, suppose I take the numbers to be $S=\{0,1,...,7,8\}$ (remember these are nothing to do with $0,1,..,7,8$ in the normal whole numbers - I just only have so many symbols and don't want to go crazy with Greek letters or anything). I also have to specify the addition and multiplication, but I completely throw out normal addition and multiplication and instead define them using the following tables

| $x+y$ |   | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | $x\times y$ |   | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|       | 0 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |             | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
|       | 1 | 1 | 0 | 4 | 7 | 2 | 6 | 5 | 3 |             | 1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|       | 2 | 2 | 4 | 0 | 5 | 1 | 3 | 7 | 6 |             | 2 | 0 | 2 | 2 | 3 | 0 | 5 | 3 | 5 |
|       | 3 | 3 | 7 | 5 | 0 | 6 | 2 | 4 | 1 |             | 3 | 0 | 3 | 0 | 0 | 3 | 0 | 3 | 3 |
|       | 4 | 4 | 2 | 1 | 6 | 0 | 7 | 3 | 5 |             | 4 | 0 | 4 | 0 | 0 | 4 | 0 | 4 | 4 |
|       | 5 | 5 | 6 | 3 | 2 | 7 | 0 | 1 | 4 |             | 5 | 0 | 5 | 2 | 3 | 3 | 5 | 0 | 2 |
|       | 6 | 6 | 5 | 7 | 4 | 3 | 1 | 0 | 2 |             | 6 | 0 | 6 | 0 | 0 | 6 | 0 | 6 | 6 |
|       | 7 | 7 | 3 | 6 | 1 | 5 | 4 | 2 | 0 |             | 7 | 0 | 7 | 2 | 3 | 6 | 5 | 4 | 1 |

Phew, that's a lot of numbers. To determine $1+3$ for example, use the left table, go to the $1$ row and the $3$ column, and the answer is the element in that cell, $7$. So in this specific universe (algebra),

$$
\begin{align}
1+3 &= 7 \\
5+1 &= 6 \\
6+1 &= 5 \\
2\times 4 &= 0 \\
5\times 4 &= 3 
\end{align}
$$

and so on. I promise it does really form an algebra[^4]! To confirm that, you would need to go back to the definition of "an algebra" and make sure that all of the axioms hold. Some of the axioms are not too bad to check. For example, axiom (1) tells us that there should be two elements, $0$ and $1$ such that $0+x=x=x+0$, $0\times x = 0 = x\times 0$ and $1\times x = x = x\times 1$ for any other element $x$ in the algebra. How do we check this? Well, you can see that the first row and first column of each table tell you exactly this (e.g. in the $0$ row of the addition table every answer is the same as the number above, which tells us that $0+x=x$ always)! 

For the second axiom, looking at the first table actually tells us that $x+x=0$ for any $x$ we choose, since the entire diagonal of the table consists of $0$'s.

This first part of the third axiom follows because the table for addition has mirror symmetry in the diagonal, so $x+y$ gives the same answer as $y+x$ for any $x,y$ in the algebra. The rest of the third axiom, and the fourth and fifth axioms, would however take a very long time to check. For example just to check

$$
(x+y)+z = x+(y+z)
$$

you'd have to do $8\times 8\times 8 \times 2 = 1024 $ (in normal arithmetic!) calculations... Not for me. I generated this algebra in an interesting way that allows me to be sure it is actually an algebra without having to do all those computations, but that's a story for another day[^4].

These were just three examples of algebras but there are many more examples that you might come across (even in physics, computing, etc).

## Saving the Broken Rules

Let's recap:
1. We talked about doing algebra, the process most of us learned at school.
2. We looked at the example of modular arithmetic to realise that addition and multiplication (and normal algebraic rules that we are use to) don't always hold in the way we might have come to believe
3. We realised that to separate which "context" we are working in, it makes sense to have a formal definition of an algebra, which provides a setting in which we can do algebra.

Now, we will talk about how carefully describing which context (algebra) we are in helps us understand more about the rules we broke earlier. Before we got to the notion of an algebra, we talked about how the rule

$$
\text{If }3x = 3y,\text{ then } x=y,
$$

can be broken in some algebras, like the minutes on a clock setting. This means that we can't necessarily "cancel from both sides" when it comes to multiplication. This never fails with addition:

> <summary> Proposition: </summary>
> In any algebra, we can additively cancel from both sides. More precisely, if $x,y,z$ are elements of the same algebra, and the equation
> 
> $$
> x+z=y+z
> $$
> 
> holds (where the addition is whatever addition the algebra comes with), then
> 
> $$
> x=y.
> $$

The proof is not too important - what is important is that just from the axioms we can deduce this fact about every algebra. Let me demonstrate with the specific algebra I wrote down with tables. What would it look like on that table for $x+z = y+z$? Well, it would mean that the entry in the $x$-row $z$-column position would be the same as the entry in the $y$-row $z$-column position. But looking at the table on the left you can hopefully verify that each column contains the numbers $0,1,...,7$ each exactly once. So the only way the $x$-row $z$-column and $y$-row $z$-column entries can be the same is if $x$ and $y$ were the same in the first place!

> <details> <summary> Proof: </summary>
> Suppose that $x+z=y+z$. We know from the second axiom that there is some $w$ such that $z+w=0$. Then we add this $w$ to $x+z$,
> 
> $$
> (x+z) + w = x + (z+w) = x + 0 =x
> $$
> 
> using axiom 3 then the fact about $x+w=0$ and finally axiom 1. Also, we can add it to $y+z$, and similarly
> 
> $$
> (y+z) + w = y + (z+w) = y+0 = y
> $$
> 
> so
> 
> $$
> x = (x+z) + w = (y + z) + w = y
> $$
> 
> where the outer equalities are the things we just proved, and the inside equality is the fact we assumed (that $x+z = y+z$) with $w$ added to both sides.
> </details>

Ok, so whatever algebra you hand me, I can be safe in the knowledge that I can additively cancel from both sides. Let's turn our minds to multiplication: first let's think about our examples,

- We know from experience that we can cancel any multiplicative factor in normal numbers, except for $0$ (because we can't cancel $0$ from both sides of $0\times 1 = 0\times 2$ to get $1=2$).
- We saw earlier that $[3]\times [43] = [3]\times [3]$ in the clock arithmetic world, so we can't cancel multiplicative factors here (although it's possible we might be able to cancel factors of other numbers - try and find examples for $[4],[5],[6],[7]$).
- In the algebra I wrote down with the tables, we can also find example that go badly, like $5\times 1 = 5 = 5\times 2$. So we can't always cancel here.

At this point, we might think that this rule is broken and can't be recovered, but never fear! A mathematician's job is not just to find phenomena like this, it is to categorize and classify them, e.g. can we find a simpler way of knowing when this rule will succeed and when it will fail without having to check lots of possibilities. So, here we go:

> <summary> Proposition: </summary>
> In any algebra, consider two rules
> 
> $$
> \begin{align}
> \text{Rule 1: If }& zx=zy \text{, then } x=y. \\
> \text{Rule 2: If }& zx=0 \text{, then } x=0. 
> \end{align}
> $$
> 
> In fact, Rule 1 is true for an element $z$ exactly when Rule 2 is also true for $z$ (so if Rule 1 holds, so does Rule 2, and vice versa).

Again, there is a proof, which I'll include below, but let's think about this in the examples:
- In normal numbers, we know that we can cancel non-zero multiplicative factors, i.e. Rule 1 holds for any $z$ except $0$. Therefore, says our Proposition, Rule 2 holds for any $z$ except $0$. This means that if I multiply two whole numbers $z$ and $x$ and get the result $0$, then knowing $z$ is not zero means $x$ must be zero (and if $z$ were $0$, $x$ could be anything so Rule 2 fails exactly when Rule 1 fails).
- In modular arithmetic, we know Rule 1 fails for $z=[3]$, and so Rule 2 must also fail for $z=[3]$. This is indeed the case, since $[3]\times[20]=[0]$ which goes against Rule 2. Let's think about Rule 2 a bit more: if $zx=0$ and $z=[a], x = [b]$ for "normal numbers" $a$ and $b$ (each of which are one of $0,1,...,59$), then the statement $zx=0$ says that $60$ divides $a\times b$. As an additional exercise, try to use this idea to determine exactly which numbers we can multiplicatively cancel in the modular arithmetic case.
- Finally, in the algebra defined by tables, Rule 1 (analogously to the addition cancellation rule) says that no two squares in the $z$-column have the same entry. This is clearly only true in the $1$ and $7$ columns, but not in the others. Rule 2 says that the only $0$ in the $z$-column is the one in the $0$-row. Again, this is clearly only true in the $1$ and $7$ columns.

> <details>
> <summary> Proof: </summary>
> There are two "directions". One direction is that we need to prove that when Rule 1 holds, Rule 2 also holds (or equivalently if Rule 2 fails, Rule 1 fails). The other direction is to prove that when Rule 2 holds, Rule 1 also holds. 
> 
> For the first direction, suppose that Rule 2 fails. That is, there is an element $x$ which is not zero but satisfies $zx=0$. Then we get $zx=0=z\times 0$ but $x \neq 0$ which means Rule 1 fails (consider Rule 1 with $y=0$).
> 
> For the other direction, suppose that no non-zero element $x$ exists with $zx=0$ (i.e. Rule 2 holds). Suppose also that $zx=zy$ for some choice of $x,y$. We know that there is an element $w$ such that $y+w=0$, so
> 
> $$
> z(x+w) = zx+zw = zy+zw = z(y+w) = z \times 0 = 0.
> $$
> 
> This must mean that $x+w=0$ since $z(x+w)=0$ (by Rule 1). But then adding $y$ to both sides we get
> 
> $$
> x = x+0 = x+ (y+w) = x+(w+y) = (x+w)+y = 0+y=y
> $$
> 
> so $x=y$ proving our rule.
> </details> 

We proved this proposition using just the rules (axioms) in the definition of an algebra, so as soon as we verify that some complicated thing is an algebra, this proposition immediately applies. For example, we checked that the only $z$ that Rule 1 (and 2) applies to in the algebra defined using the tables above are $z=1$ and $z=7$. So, if we were doing some algebra in that domain, we would be able to "cancel" multiples of $1$ and multiples of $7$, but not other multiples. 

As I previously said, as mathematicians we aim to classify phenomena rather than just observe it. This leads us to make a definition:

> <summary> Definition: </summary>
> An algebra $A$ is called **integral** if Rule 1 (equivalently Rule 2) from the previous proposition holds for every $z$ except $0$.

The algebra of normal numbers is integral, because we can always cancel (except by zero), so

$$
2x = 2y \text{ means } x=y.
$$
But the algebra for the 60 minute clock face isn't integral because we saw that $3 \times 43 = 3 \times 3 $. The algebra I wrote down with tables is also not integral since for example $3 \times 1 = 3 \times 4$ in that algebra.

# Conclusion - So What?

Let's sum up what we've done: 
- we've reflected on some type of calculation we have been doing for a long time (algebra), and identified similarities and differences between different versions of this same process (cancellation of additive/multiplicative terms)
- to record and categorise these observations, we defined formally a "version", by giving a mathematical formulation of "an algebra" as some place where we can do these calculations
- we formalised the observation that sometimes holds (Rule 1), and proved an equivalent statement that is easier to verify (Rule 2)
- we defined a new category of "integral algebras", where Rule 2 always holds.

In mathematics, it is very common for us to find collections of objects that can be added and multiplied. Even before university, I can think of:

1. Numbers.
2. Polynomials.
3. Functions (we can add or multiply $\sin(x)$ with $x^2$ to get new functions).
4. Matrices (matrix addition and matrix multiplication are introduced in Further Maths and some regular A-Level Mathematics courses).
5. Modular arithmetic (clock arithmetic, while not on the core curriculum is quite easy to come across in maths books/videos)

As part of a Ring Theory or Abstract/Commutative Algebra course at university, you start to learn ways to produce/recognise more algebras and analyse their properties. There is a common expression (with many variations) that "A good mathematician never does the same proof twice". The idea of an algebra is there to allow us to get slightly closer to this ideal. For example, we may be able to prove some property X about **integral** algebras, using just the axioms and the integrality property, and then whenever we come across a new integral algebra (it may be that we need to use our simpler Rule 2 to verify integrality), we immediately know that property X holds without having to prove it all over again!  

This is a pretty good template for how much of mathematics is done. We start by getting our hands dirty with some calculations, like doing actually high school algebra, balancing equations, factorising, etc. Then, we start to ask "what is it about the setting of these calculations that allows me to do them?" and "are there other places where I've been able to do similar calculations", and slowly try to turn these analogies into a real abstract definition in order to extend the applicability of our calculations. So, next time you are doing some maths, be it algebra, geometry, combinatorics, or something else, have a think - what properties do you really need in order to do what you are doing? Can you go to that extra level of abstraction and identify the real underlying calculation that could apply elsewhere. This step (at least for me) was one of the biggest differences between A Level and university maths.

So that's it! An algebra is simply the field of play, the equipment and rules for the game. Next time you do some maths, think about which rules you are really using. In fact, next time you have any problem, think about the underlying structure, explore that further level of abstraction, be lazy, be an algebraist, and you might just find something that could save you time in the future, or help you understand the world a little better!

<h3>Footnotes</h3>

[^1]: This is a puzzle appears in the work of 5th century Greek writer Metrodorus. Diophantus was a key figure in the development of algebra that we will come across again later.
[^2]: Technically, what I am describing here is an associative, unital $\mathbb{Z}$-algebra, also known as a ring.
[^3]: If you already know what algebras are and are here just for fun, recall that the reason there is so little to check if because we have done a quotient operation of the algebra $\mathbb{Z}$ by the ideal $(60)$, and so the quotient $\mathbb{Z}/(60)$ automatically inherits a $\mathbb{Z}$-algebra structure, whose properties are often easily reflected in properties of the ideal $(60)$.
[^4]: I know this because it's isomorphic to the triangular sub-algebra of $M_2(\mathbb{F}_2)$.
