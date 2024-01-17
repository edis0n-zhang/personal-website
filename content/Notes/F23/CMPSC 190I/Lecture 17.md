---
date: 2023-12-05
---
## Language Modeling
During training, given the $t$ ground-truth words, predict word $t+1$.
$$
\max p(w_1, w_2, ..., w_T) = \prod_{t=1}^T p (w_t | w_1,..., w_{t-1})
$$

**Example:** Harry went back and saw Hermione

![[Pasted image 20240116232556.png]]


During **inference**, generate a new word each time and feed it back to the model.

### Improved RNN Architecture

Recall the vanilla RNN recurrence formula.

$$
h_t = \tanh (W_{hh} h_{t-1} + W_{xh} x_t + b_h)
$$
**Problems:**
1. vanishing / exploding gradients
2. cannot model long-range dependencies
3. difficulty with parallelization

There are architectures to alleviate these issues:
- Long short-term memory (LSTM)
- Gated recurrent unit (GRU)

They are still not enough to solve these problems:
- LSTM is still short term!
- Can't model long sequences

> [!info] Attention is All You Need
> A revolutionary paper introducing the transformer architecture.
> **100,000 Citations in 7 years!**
> Funnily used as a naming template for papers. (x is all you need)


## Sequence to Sequence Generation

Seq2Seq generation has a wide variety of applications.

It can be used for machine translation, i.e English to Spanish, or even code generation, i.e English to Python.

### Encoder-Decoder Paradigm

The encoder decoder paradigm takes in some input, encodes it, and then decodes it.

**Step by Step Process:**
1. The encoder takes in some input, and outputs some context vector. This context vector could be $h_4$ or mean$(h_1,h_2,h_3,h_4)$ . It is flexible.
2. The decoder is similar to language modeling, it takes $c$ as an input and outputs the result.

**Problem:** The context vector causes an information bottleneck because of the fixed-size vector.

> [!note]
> This paradigm is already outdated, newer language models are decoder only.

### Seq2Seq with RNN and Attention

Generation at position $t$:
1. Compute Scalar importance score
2. Normalize importance score to get attention weights
3. Compute context vector as a linear combination of hidden states
4. Compute context vector at each generation step

## Transformer
---
### Scaled Dot-Product Attention

Transformers use a different attention mechanism. 
- The $[START]$ token attends to "we", "are", "eating", and "bread"

**Example:** \
Query: $[START]$
- Keys: "we", "are", "eating", and "bread"
- Values: "we", "are", "eating", and "bread"
Each word is represented by a vector: $X = (x_1, ..., x_4) \in \mathbb{R}^{4 \times d}$. $[START]$ will attend to four vectors, $h \in \mathbb{R}^d$.

Instead of directly computing the similarity score between $h_1$ and $x_1,..., x_4$ the transformer incorporates a projection operation first.

Given that $W_q, W_k, W_v \in \mathbb{R}^{d \times d}$
1. Project to query/key/value space
   - Query: $q_1 = W_q h_1$ 
   - Key: $K = X W_K$
   - Value: V = $XW_V$
2. Computer the similarity score using the query and keys
$$
\begin{align*}
&1. \ e_j = \frac{q_1 \cdot K_j}{\sqrt{d}}
\\ &2. \ e = q_1 \cdot K \in \mathbb{R}^4
\\ &3. \ \text{softmax}(e)
\end{align*}
$$
> Difference to RNN: Similarity score is calculated after projection

3. Output the "context vector"
$$
c = \sum_i a_i v_i
$$
> Difference to RNN: Context vector is also computed after projection