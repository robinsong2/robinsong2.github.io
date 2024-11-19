---
layout: post
title:  "What is an Algebra?"
date:   2024-11-04 13:22:01 +0000
published: true
categories: maths
tags: concept algebra history Diophantus arabic Hilbert
---

This post is the first of a 3 part series:
1. Here, we will discuss what algebra is, and how that relates to the notion of 'an algebra'. 
2. In the [second post]({% post_url 2024-11-11-history-of-algebra %}), we will discuss the historical development of algebra, and some of the problems it was used for.
3. [Finally]({% post_url 2024-11-18-modern-algebra %}), we will discuss the usage of algebra in modern mathematics, and see how wide ranging it really is as a subject.

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

> <summary> Problem </summary>
> I have some apples. After eating 3 apples, then giving half of the remaining apples to my friend, I have one third of the original amount. How many did I start with?

However they are soon replaced by the more intimidating-looking 'Find $x$' questions:

> <summary> Problem (Same as previous!) </summary>
> 
> $$
> \frac{x-3}{2} = \frac{x}{3}
> $$
> 
> Find $x$.

This step into abstraction follows the historical development of algebra that we'll discuss later. We condense this historical and dramatic perspective shift into perhaps two lessons aged 13. No wonder so many people find it so contrived! From that point onwards algebra is known as "the stuff with the $x$'s and $y$'s". We learn more and more 'rules', like how to factor:

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

So, if an algebra is like the board, pieces and rules, how do we get a handle on one in real life? Well, you need a collection of "numbers" that you are allowed to add and multiply together, and you need a collection of rules that tell you how to manipulate these numbers. Let's get mathematical:

> <summary> Definition: </summary>
> An **algebra**[^2] consists of a set, $S$, with two operations, addition and multiplication. That is, given any two elements of $S$, call them $x$ and $y$, I can add them and multiply them to get elements $x+y$ and $x \times y$ in $S$. Furthermore, the following things must happen (these are called the **axioms**):
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

Ok ok, I said "how do we get a handle on one in real life", and then splurted out a whole lot of axioms. Whoops. Let's take a step back and look at our example of the minutes of an hour. I've already told you that we are in an algebra, so let's call that algebra $A$. What are the possible positions of the minute hand? Well, 

$$
0,1,2,...,58,59
$$

are all the possibilities. So, there are sixty "numbers" in our algebra, i.e. the set $S$ in our definition of an algebra in this case is

$$
S = \{ 0,1,...,58,59 \}.
$$

We also need a way of adding and multiplying, but we already know these. We add and multiply as we would with normal whole numbers but only take the remainder after removing multiples of 60. So, in our algebra $A$,

$$
3\times 43 = 9, \qquad 37+54 = 31, \qquad 23 \times 15 = 45,...
$$

Great! So now all we need to do is check that all of the axioms. 
1. The first one is fairly easy, we already have things called $0$ and $1$ and they do exactly the things I need.
2. This one is a bit less obvious. If I pick $x=23$ for example, then which element $y$ satisfies $x+y=0$? Well, it's actually $y=37$, because in our normal world of arithmetic $23+37=60+0$ so after removing multiples of $60$ we get that in $A$, $23+37=0$.
3. This one is again clear since it works in the normal world of adding.
4. Ditto with multiplication!
5. Ditto!!

So actually, given we know these things work with addition and multiplication of normal whole numbers, there's very little extra stuff to check[^3]! In general, it could be a real pain to check all these things. For example, suppose I take the numbers to be $S=\{0,1,...,7,8\}$ but I completely throw out normal addition and multiplication but instead define them using the following table

| $x+y$ |   | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | $x\times y$ |   | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|       | 0 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |             | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
|       | 1 | 1 | 0 | 4 | 7 | 2 | 6 | 5 | 3 |             | 1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|       | 2 | 2 | 4 | 0 | 5 | 1 | 3 | 7 | 6 |             | 2 | 0 | 2 | 2 | 3 | 0 | 5 | 3 | 5 |
|       | 3 | 3 | 7 | 5 | 0 | 6 | 2 | 4 | 1 |             | 3 | 0 | 3 | 0 | 0 | 3 | 0 | 3 | 3 |
|       | 4 | 4 | 2 | 1 | 6 | 0 | 7 | 3 | 5 |             | 4 | 0 | 4 | 0 | 0 | 4 | 0 | 4 | 4 |
|       | 5 | 5 | 6 | 3 | 2 | 7 | 0 | 1 | 4 |             | 5 | 0 | 5 | 2 | 3 | 3 | 5 | 0 | 2 |
|       | 6 | 6 | 5 | 7 | 4 | 3 | 1 | 0 | 2 |             | 6 | 0 | 6 | 0 | 0 | 6 | 0 | 6 | 6 |
|       | 7 | 7 | 3 | 6 | 1 | 5 | 4 | 2 | 0 |             | 7 | 0 | 7 | 2 | 3 | 6 | 5 | 4 | 1 |

Phew, that's a lot of numbers. But I promise it does really form an algebra[^4]! Some of the axioms are not too bad to check. For example, axiom (1) tells us that there should be two elements, $0$ and $1$ such that $0+x=x=x+0$, $0\times x = 0 = x\times 0$ and $1\times x = x = x\times 1$ for any other element $x$ in the algebra. How do we check this? Well, you can see that the first row and first column of each table tell you exactly this! 

For the second axiom, looking at the first table actually tells us that $x+x=0$ for any $x$ we choose, since the entire diagonal of the table consists of $0$'s.

This first part of the third axiom follows because the table for addition has mirror symmetry in the diagonal, so $x+y$ gives the same answer as $y+x$ for any $x,y$ in the algebra. The rest of the third axiom, and the fourth and fifth axioms, would however take a very long time to check. For example just to check

$$
(x+y)+z = x+(y+z)
$$

you'd have to do $8\times 8\times 8 \times 2 = 1024 $ (in normal arithmetic!) calculations... Not for me. 

## Saving the Broken Rules
Before we got to the notion of an algebra, we talked about how the rule

$$
\text{If }3x = 3y,\text{ then } x=y,
$$

can be broken in some algebras, like the minutes on a clock setting. Now that we have a full notion of an algebra, we can start to systematically study issues like this.

> <summary> Proposition: </summary>
> In an algebra $A$, the rule
> 
> $$
> \text{If } zx=zy \text{, then } x=y,
> $$
> 
> holds for a particular element $z$ precisely if the only element $t$ such that $zt=0$ is $t=0$.

> <details>
> <summary> Proof: </summary>
> One direction is easy. If there is an element $t$ which is not zero but satisfies $zt=0$, then we get $zt=0=z\times 0$ but $t \neq 0$ which contradicts the rule.
> 
> For the other direction, suppose that no non-zero element $t$ exists with $zt=0$. We know that there is an element $w$ such that $y+w=0$, so
> 
> $$
> z(x+w) = zx+zw = zy+zw = z(y+w) = z \times 0 = 0.
> $$
> 
> This must mean that $x+w=0$ since $z(x+w)=0$ (consider setting $t=x+w$). But then adding $y$ to both sides we get
> 
> $$
> x = x+0 = x+ (y+w) = x+(w+y) = (x+w)+y = 0+y=y
> $$
> 
> so $x=y$ proving our rule.
> </details> 

We proved this proposition using just the rules (axioms) in the definition of an algebra, so as soon as we verify that some complicated thing is an algebra, this proposition immediately applies. For example, you should check that the only $z$ that this proposition applies to in the algebra defined using the tables above are $z=1$ and $z=7$. So, if we were doing some algebra in that domain, we would be able to "cancel" multiples of $1$ and multiples of $7$.

This leads us to make a definition:

> <summary> Definition: </summary>
> An algebra $A$ is called **integral** if the rule from the previous proposition holds for every $z$ except $0$.

The algebra of normal numbers is integral, because we can always cancel (except by zero), so

$$
2x = 2y \text{ means } x=y.
$$
But the algebra for the 60 minute clock face isn't integral because we saw that $3 \times 43 = 3 \times 3 $. The algebra I wrote down with tables is also not integral since for example $3 \times 1 = 3 \times 4$ in that algebra.

# Conclusion - So What?

In mathematics, it is very common for us to find collections of objects that can be added and multiplied. Even before university, I can think of:

1. Numbers.
2. Polynomials.
3. Functions (we can add or multiply $\sin(x)$ with $x^2$ to get new functions).
4. Matrices (matrix addition and matrix multiplication are introduced in Further Maths and some regular A-Level Mathematics courses).
5. Modular arithmetic (clock arithmetic, while not on the core curriculum is quite easy to come across in maths books/videos)

As part of a Ring Theory or Abstract/Commutative Algebra course at university, you start to learn ways to produce/recognise more algebras and analyse their properties. There is a common expression (with many variations) that "A good mathematician never does the same proof twice". The idea of an algebra is there to allow us to get slightly closer to this ideal. For example, we may be able to prove some property X about **integral** algebras, using just the axioms and the integrality property, and then whenever we come across a new integral algebra, we immediately know that property X holds without having to prove it all over again!  

This is a pretty good template for how much of mathematics is done. We start by getting our hands dirty with some calculations, like doing actually high school algebra, balancing equations, factorising, etc. Then, we start to ask "what is it about the setting of these calculations that allows me to do them?" and "are there other places where I've been able to do similar calculations", and slowly try to turn these analogies into a real abstract definition in order to extend the applicability of our calculations. So, next time you are doing some maths, be it algebra, geometry, combinatorics, or something else, have a think - what properties do you really need in order to do what you are doing? Can you go that extra level of abstraction and identify the real underlying calculation that could apply elsewhere. This step (at least for me) was one of the biggest differences between A Level and university maths.

So that's it! An algebra is simply the field of play, the equipment and rules for the game. Next time you do some maths, think about which rules you are really using. In fact, next time you have any problem, think about the underlying structure, go that one level of abstraction, be lazy, be an algebraist, and you might just find something that could save you time in the future!

### Footnotes

[^1]: This is a puzzle appears in the work of 5th century Greek writer Metrodorus. Diophantus was a key figure in the development of algebra that we will come across again later.
[^2]: Technically, what I am describing here is an associative, unital $\mathbb{Z}$-algebra, also known as a ring.
[^3]: If you already know what algebras are and are here just for fun, recall that the reason there is so little to check if because we have done a quotient operation of the algebra $\mathbb{Z}$ by the ideal $(60)$, and so the quotient $\mathbb{Z}/(60)$ automatically inherits a $\mathbb{Z}$-algebra structure, whose properties are often easily reflected in properties of the ideal $(60)$.
[^4]: I know this because it's isomorphic to the triangular sub-algebra of $M_2(\mathbb{F}_2)$.
