---
layout: post
title:  "What is an Algebra?"
date:   2024-11-04 13:22:01 +0000
published: false
categories: concept algebra
tags: concept algebra history Diophantus arabic Hilbert
---

Things to look into:
[Moderne Algebra](https://en.wikipedia.org/wiki/Moderne_Algebra)
[History of algebra](https://en.wikipedia.org/wiki/History_of_algebra)
[Al-Jabr](https://en.wikipedia.org/wiki/Al-Jabr)

Historical aspect: (abstract happens in 1920-1940) (dunno about chinese/indian maths)
- Ahmes papyrus (problem 24: value of heap if heap and 1/7 of heap is 19)
	- Take a guess at the solution (guess 7, so answer is 8 not 19). Then "divide", but they expressed them in terms of egyptian fractions so 19/8 was just identified as 2+1/4+1/8, then need to multiply this by initial guess, i.e. 7.
	- [Egyptian calculations](https://www.exeter.ac.uk/research/groups/education/pmej/pome12/article13.htm#:~:text=Aha%20in%20Egyptian%20means%20%22something,Cf.%2C%20Wilson%2C%20p.)
- Babylonians start factorising and moving like terms around
- Did Euclid use notation or words?
- Diophantus is start of using notation (not equals sign) e.g. Del^gamma is the square and K^gamma is the cube etc. 
	- It's a book that uses algebraic notation but not an algebra book
- Al-kwarizmi (algebraic notation but not like ours, but algebra for its own sake)
- Descartes, La Geometrie is pretty much our algebraic notation [La Geometrie](https://download.tuxfamily.org/openmathdep/geometry_analytic/The_Geometry-Descartes.pdf)
- Look at van der Waarden's modern algebra
- definitely reference Noether and Hilbert and emil Artin
- Hilbert's zahlbericht
- Leonard Dickson defined linear associative algebra
- Wedderburn next level of abstraction
- Noether invents ring theory? and zariski topology?
- Could mention homological algebra comes in the 50s but is beyond our purpose here

A common question I get when I talk about maths is "What do you mean 'an algebra', isn't algebra a method not an object?!".[^1] Yes, it definitely is a method, most of us have been taught to do algebra by rearranging $ x+y $ 's and $ y $'s, factoring and expanding brackets. So what is 'an algebra'? Well, it's like the arena in which we can apply the 'algebra' method. If algebra is like a game, 'an algebra' is like the board on which we can play, and the rules of the game. Let's dive into this a bit more, but first we'll do a quick recap of algebra in the ordinary sense.

# Algebra - The Method

Consider the following sad anecdote:[^2]

> He was a boy for a sixth of his life, and then an extra twelfth. After a further seventh he married and five years after marriage had a son. The son sadly passes away upon reaching only half his father's lifespan, and after four years of grief the father also passes.

How old is the man in the anecdote?
  
From this, we can actually deduce how old the father lives to be. This is very much a classic high-school question, so let's do it. Let $x$ be the father's age when he dies. Then the story tells us that
$$
\frac{1}{6}x+\frac{1}{12}x+\frac{1}{7}x+5+\frac{1}{2}x+4=x.
$$
We follow our training, collect the $x$'s,
$$
9 = \left(1-\frac{1}{6}-\frac{1}{12}-\frac{1}{7}-\frac{1}{2}\right)x = \frac{84-14-7-12-42}{84}x = \frac{9}{84}x,
$$
and so lo and behold $x=84$ after cancelling the $9$'s and multiplying by $84$. 

[^1]: I try not to mention 'an algebra' in discussions, but anyone who has taken a glance at my actual work always brings this up.
[^2]: This is a puzzle purportedly referring to Diophantus of Alexandria - a key figure in the development of algebra that we will come across again later.
