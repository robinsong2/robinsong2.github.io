---
layout: post
title:  "ARC Outlook"
date:   2024-11-20 13:34:01 +0000
published: true
hidden: true
category: alignment
---

- This will become a TOC
{:toc}

This is a personal overview of where ARC is at, and what we are aiming for. In particular, some items to discuss are:

1. What is ARC's alignment agenda?
	- What is the **explicit version** of alignment that we would be happy to have solved?
	- What **form** does our proposed solution take, and do we have a **proof** that this solves our version of the alignment problem? 
	- What are our **indicators** of partial success?
	- Do we have a list of properties that should hold of an aligned model?
2. What have we learned so far?
	- Can we summarise what we know from our **downstream tasks**?
	- How have previous papers contributed to our progress specifically on our **alignment solution**?
	- **Negative results** - there have been a number of abandoned approaches (e.g. I remember there being fairly comprehensive reasons to abandon the $M$-forwards, $C$-backwards proposal). Can we isolate the reasons we abandoned these?
3. How are we going to get to the solutions?
	- What are **downstream tasks/empirical work** doing for us?
	- What are the **cruxes** that we are obstructed by?
	- How should we **operate** as a company to clear these obstructions?

To-do:
- Empirical regularities (specifically, which ones are problematic and how do we discern that?)
	- Particular question: how do we concretely describe an empirical regularity?
	- Jacob take: empirical regularities must be discovered in tandem with the training of the model (different model, different empirical regularities), they are facts about the input distribution that have been found by the model by simply observing it enough times (and tuning to get the right value).
- Watching training vs. analysing final model
- My frame of mind: three pronged approach, empirical regularities = understanding of input distribution (bottom left), catastrophe detector = understanding of output distribution (bottom right), mechanistic explanation = understanding of model internals (top centre) all lead to alignment in centre.

# ARC's Agenda

## Trying to Give Concrete Statements of Alignment

Let's start with a very *non-concrete* statement of alignment (from [Paul's post](https://ai-alignment.com/clarifying-ai-alignment-cec47cd69dd6), specifically this is **intent-alignment**):

> <summary> Definition: (Paul) </summary>
> An AI $A$ being trained by an operator $H$ is **aligned** with $H$ if "$A$ is trying to do what $H$ wants it to do". More precisely, it is trying to do *what it thinks* $H$ wants it to do.

Here are my thoughts on this definition:
- Obviously, "try" and "want" are pretty slippery words.
- I think this actually rules out a lot of behaviours that others might call misalignment. For example, it gets rid of reward hacking (where the model is trying to do what it thinks we want it to do, but what it thinks we want it to do is not the same as what we want it to do in some obvious way (i.e. we think that behaviour is a reward hack, it just thinks it is getting more reward). 
- This relies on quite a high level of sophistication.

> <summary> Conjecture: </summary>
> According to this definition of alignment, a model may only be aligned/mis-aligned when it has an internal model of its external environment containing at least its operator $H$ and a representation of $H$'s desires for $A$'s behaviour.
> <details> <summary> Discussion of Consequence: </summary>
> This feels true at first, but I'm not entirely convinced. I want to say that knowledge of training vs. deployment separation and consequent deceptive action should be a counter-example, but actually I think this falls under the Consequence, since this deceptive alignment story relies on the model "knowing how to behave" in training.
> </details>

- Can we define "trying" with the statement: a model $A$ is trying to achieve action $p$ if after infinite additional training from the same distribution, $A$ would act according to $p^*$, which is the projection(?) of $p$ onto the possible actions space of $A$.
- It seems to me almost that alignment is kind of to do with behaviour under compute limits of both the model **and the human**! For example, we definitely wouldn't say that AlphaGo is deceptively aligned. However, when playing Go it is pretty plausible that AlphaGo will not play the way I *want* it to play (because I want it to do what I think is the best move, and I'm flawed). It will probably know what we would want it to do - but will not do it, because it knows that eventually this move does achieve a result that we want. In that sense, the aligned model should be able to correctly deduce which of my goals are primary and which are secondary, and quite possible should act against our secondary goals in order to achieve our primary goals. 

Let's attempt to make this (a tiny bit) more mathematical:

> <summary> Definition: (George) </summary>
> A model $A$ is aligned if the model is "trying" to implement a strategy  
> 
> $$
> \pi : \text{States} \rightarrow \text{Actions}
> $$  
>
> such that it would predict, with its current knowledge, that the operator, *with the model's knowledge and infinite compute time*, would implement a strategy
> 
> $$
> \pi^* : \text{States} \rightarrow \text{Actions}
> $$
> 
> with $\pi \approx \pi^*$.

This definition attempts to explicate the following ideals:
- a model's alignment should depend on its imperfect current knowledge, not the idealised version of that model;
- a model's alignment should depend on the operator's desires, but not the operator's level of knowledge or compute limitations.
- the intention we have is that the model should identify our terminal goals (the ones we truly care about), and act in its optimal way to achieve these without necessarily adhering to our instrumental goals (the intermediate goals we have in order to achieve our terminal goals. 
	
### Examples of (Mis-)Alignment

Misalignment is obvious when you see it. We need a collection of examples to see what behaviours we want and don't want.

- As already mentioned, AlphaGo was not misaligned when it played move 37, "a move that no human would've ever made". If we were to construct too much of a fine-grained value framework for the handler in this setting, we would claim this to be misaligned. Here, the only value is winning Go, which is (almost) perfectly reflected in its training, so there is no possible argument for misalignment.
	- In fact, I think this argument convinces me that no model can be misaligned when evaluated on the same task/valuation as it is trained on. I believe this for the following reason: if the model acts according to how it thinks it can get low loss in training (by definition of the model/training process), and if the chosen task/valuation is exactly the training task/valuation then it is acting how it thinks it can succeed at the chosen task/valuation, hence is aligned. (One minor annoyance: slightly brushing over "acts according to", which is some kind of intentionality statement, which we haven't really discussed yet.)
- Suppose a model is given task A (e.g. addition) 99.9% of the time and task B (e.g. subtraction) 0.1% of the time, and incorporating B into its structure causes too much loss on task A so it just ignores task B and always does A. This is also **not** misalignment according to our definition, since the task/valuation pair given to it is a mixed (99.9A+0.1B) task for which it truly is doing what it thinks we want, i.e. do well on the mixed task given. *However*, if we were to then evaluate the task purely on the task B/valuation B pair, we then **would** have a misaligned model, because the model knows what we want to happen on here, but doesn't have the capacity to compute it so decides to do something else which is not at all liked by valuation B. This is distribution shift though.
	- This shows that there is a crucial aspect of alignment which is about the task we are evaluating the misalignment on! For example in the 2nd argmax problem, if we are going to 'general purpose' train the model on 2nd argmax of arbitrary tuples and then going to 'evaluate' the model specifically on all negative tuples, there *could* be misalignment. However, note that it is not simply a case of whether the model does badly at all negatives, it is whether the model has identified that we are still looking for the 2nd argmax but decided to do something else in order to produce a concise algorithm. Even this feels a bit tenuous though!

## Properties of Aligned Models

This is analogous to the *downstream tasks* strategy, but not quite the same. We could ask

> <summary> Question: (George) </summary>
> What properties should hold of any aligned model? Is it possible to verify these properties hold without verifying full alignment?

- Interesting Paul [quote](https://ai-alignment.com/clarifying-ai-alignment-cec47cd69dd6). "Improving their knowledge or ability will make them a better assistant, but not make them more aligned". I think this is interesting because - is it a unique property of aligned agents that improving their knowledge or ability will never make them strictly worse assistants? 


## The Strategy

- I'm not actually sure in what sense our strategy only solves intent alignment and not the full alignment problem. Actually now I think about it carefully, it feels like our strategy is extremely ambitious!

I believe our strategy to be the following:

1. Construct a framework which can watch a model during pre-training, and build a **mechanistic explanation** of how that model works
2. For a specific task to which we wish to apply this model, build a **catastrophe detector** which will identify when the model acts catastrophically against our wishes on this task. (Possibly also fine-tune the mechanistic explanation?)
3. Combine the catastrophe detector with the mechanistic explanation to understand two things:
	1. Whether a specific input will cause the model to act catastrophically on this task.
	2. What the probability of catastrophe is on a specific input distribution.

> <summary> Alignment for Our Framework: </summary>
> Suppose we achieve the Framework as written above. How do we then deal with alignment?
> 1. Take a model, which we assume we are allowed to watch during pre-training.
> 2. Construct the corresponding mechanistic explanation. This tells us roughly which mechanisms are available to the model. (There might need to be some capacity allocation at this step simply because surely we can't expect to explain the whole thing?).
> 3. Take a task/loss that is not the pre-training task/loss and either fine-tune the model according to this, or deploy it on this task.
> 4. Construct the catastrophe detector associated to the post-training/deployment task.
> 5. Produce a (plausibly computationally slow) estimate for the probability of catastrophe (i.e. model action differing from our terminal values) on a described input distribution.
> 6. For any specific input, provide a (hopefully ~model speed) flag/probability that that specific input causes catastrophe (i.e. differs from our terminal values).

Our alignment strategy factors through Eliciting Latent Knowledge (ELK).

## Indications of Success

Our alignment strategy is not required to:
- Determine what a model "intends" to do (although most likely will);
- Determine whether a model has been successful or not in achieving the goals we desire (although plausibly will);
- Determine what a model "should" do (definitely won't).

Our alignment strategy should:

# Our Work So Far

# Our Future
