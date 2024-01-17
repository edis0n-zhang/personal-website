---
date: 2023-12-07
---
## Self-Attention Layer

**Inputs:**
- Input Vectors: $X \in \mathbb{R}^{L \times D}$ 
- Query Matrix: $W_Q \in \mathbb{R}^{D \times D_Q}$ 
- Key Matrix: $W_K \in \mathbb{R}^{D \times D_Q}$ 
- Value Matrix: $W_V \in \mathbb{R}^{D \times D_V}$

**Computation:**
- Query Vectors: $Q = XW_Q \in R^{L \times D_Q}$
- Key Vectors: $K = XW_K \in R^{L \times D_Q}$
- Similarities: $E = \frac{QK^T}{\sqrt{D_Q}} \in R^{L \times L}$
- Attention Weights: $A = \text{softmax} (E, dim = 1)$
- Value Vectors: $V = XW_V \in R^{L \times D_V}$


![[self-attention.png]]



### Permuting
If you permute your input vectors, the queries will have different positions. Same for the rest of the layer.

For instance if the input vectors are in order $X_3, X_2, X_1$ the query vectors will be in order $Q_3, Q_2, Q_1$, same for the output vectors.

### Positional Encoding
Self-attention layer doesn't know the order of the vectors being processed.

In order to make it position-aware, concatenate the input with positional encodings. $P(\cdot)$ can be a learnable lookup table or a fixed function.

### Masked Self-Attention Layer

**Problem:** For language modeling, you should only predict the next word using the previous words.

**Solution:** Set the future words to negative infinity, this will mask the output vectors.

## Transformer Block
The transformer block is effectively the following:
$$MLP = W_2 \ ReLU (W_1X + b_1) + b_2$$
**Properties:**
- Self-attention is the only interaction between vectors
- Highly scalable, highly parallelizable

A transformer is a sequence of transformer blocks. In "Attention Is All You Need" they use 12 blocks, D = 512.


![[transformer.png]]


### Multi-Head Attention

In real world applications, you don't perform Self-Attention once. You perform Attention for multiple versions of $V, K, Q$ (with different values) and perform the operations multiple times. This is called Multi-Head Attention.

The goal of this is to handle various input sequences in various ways.