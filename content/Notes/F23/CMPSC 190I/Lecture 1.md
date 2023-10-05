---
date: 2023-09-28
---
## Why this Class?

- Deep learning is the holy grail for almost all modern AI tasks
- Breakthroughs with deep leanring
	- LLMs (Large Language Models) - ChatGPT, Llama-2, PaLM-2
	- Diffusion model - Stable Diffusion, Midjourney
	- Multimodal: DALL-E 3
	- Automatic speech recognition

## Large Language Model (LLM)

- Probabilistic model that can generate probabilities of a series of words, based on text corpora it was trained on
- Built by a series of Transformers
	- GPT-3 (175B)
	- LLama-2 (7B, 13B, 70B)
	- PaLM-2 (rumor: ~340B (L))
	- GPT-4 (rumor: > 1,000B)
- It can perform
	- Reasoning
	- Multilingual translation
	- Coding

![[Attention is All You Need Graphic.png|800]]
<center>Transformer Image from Attention is All you Need</center>

## Diffusion Model

- An image generative model
	- Allows you to sample from an image distribution
	- Unconditional / conditional
	- Stable Diffusion, Midjourney are all text-to-image models

## Flaws / Dangers of AI

Although Deep Learning Models have made huge strides in recent years, they still contain many flaws, we are still far from an AGI.

**Hallucinations:** LLMs will sometimes generate information from nowhere, providing misleading information. i.e generating a fake city name.

**Vulnerability To Input Perturbations:** AI's can output incorrect responses if inputs are designed to perturb it. i.e adversarial pattern causing Panda to be classified as a Gibbon. More dangerously adversarial patterns on street signs or jailbreaking LLMs.

## DALL-E 3

DALL-E 3 combines ChatGPT with image generative model for better understanding and faithful generations, [link to video](https://www.youtube.com/watch?v=sqQrN0iZBs0).