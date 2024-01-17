---
date: 2023-10-19
---
# Multi-Class Classification

## The Probabilistic Interpretation
- $f(x) = \text{Sigmoid}(w^T x)$ models the probability $\mathbb{P}(y=+1|x)$
$$
\mathbb{P}(y|x) = 
\begin{cases}
&\text{Sigmoid}(w^T x), &\text{for } y = +1
\\&1 - \text{Sigmoid}(w^T x), &\text{for } y = -1
\end{cases}
$$
- And thus
$$
\mathbb{P}(y|x) = 
\begin{cases}
&\text{Sigmoid}(w^T x), &\text{for } y = +1
\\&\text{Sigmoid}(-w^T x), &\text{for } y = -1
\end{cases}
$$
- ...or, more copactly
$$
\mathbb{P} (y | x) = \text{Sigmoid}(y \cdot w^t x)
$$

## Maximizing the Data Likelihood
- How to measure the likelihood of the observed data?
- Assume: $D = (x_1,y),...,(x_N, y_N)$ are independently generated
- The probability of getting $(x_1,y),...,(x_N, y_N)$:
	- $\mathbb{P}((x_1, y_1),...,(x_N, y_N)) = \mathbb{P}(x_1,y_1)...\mathbb{P}(x_N, y_N)$ (Derived from definition of conditional probability)
- Note that $P(x_1)...P(x_N)$ are constants determined by the data distribution (so, we do not need to model it)

## Maximizing the Data Likelihood
- Maximum likelihood:
$$
\begin{align*}
\underset{w} \max L (D; w) &= \mathbb{P}(y_1 | x_1)\mathbb{P}(x_1) ... \mathbb{P}(y_N | x_N) \mathbb{P}
\\ &\propto \mathbb{P}(y_1 | x_1)\cdot\mathbb{P}(y_2|x_2)...\mathbb{P}(y_N|x_N)&(\text{Proportional To})
\\ &=\Pi^{N}_{i=1} \mathbb{P}(y_i | x_i)
\end{align*}
$$
- How can we tailor this objective function for logistic regression?
### Tailoring
$$
\begin{align*}
&\max \prod^N_{i=1} \mathbb{P} (y_i | x_i)
\\ &\iff \max ln \prod_{i=1}^N \mathbb{P}(y_i | x_i) = \max \sum^N_{i=1} \ln \mathbb{P}(y_i|x_i)
\\ &\iff \min -\frac{1}{N} \sum^N_{i=1} \ln \mathbb{P}(y_i | x_i) = \min \frac{1}{N} \sum^N_{i=1}\ln \frac{1}{\mathbb{P}(y_i | x_i)}
\\ &\iff \min \frac{1}{N} \sum^{N}_{i=1} \ln \frac{1}{\text{Sigmoid}(y_{i} \cdot w^T x_i)}
\end{align*}
$$

## Softmax Function
Given output logits $z$, the softmax function will return output probabilities (in a matrix).
$$
\begin{align*}
&z = Wx, W \in R^{C\times d}, z \in R^C, x \in R^d
\\ &\text{softmax}(z_1,...,z_c) = \bigg(\frac{exp(z_1)}{exp(z_j)},...,\frac{exp(z_c)}{\sum_j exp(z_j)}\bigg)
\end{align*}
$$
### Softmax vs. Sigmoid
The softmax function is equivalent to the Sigmoid function in the binary case.

## Training Objective for Multi-Class Classification
- Maximum likelihood:
$$
\underset{W}\min -\sum_{i=1}^{N} \log \mathbb{P}(y_i | x_i, W)
$$
- This is equivalent to cross entropy (often used in pytorch)
- Cross entropy between distributions P and Q:
$$
H(P,Q) = -\sum_{x \in X} p(x) \log q(x)
$$
- Given an estimated distribution (returned from Softmax function) and empirical distribution, we can use the cross entropy of the two distributions to determine the loss ( it will return $-\log\mathbb{P}(y_i | x_i; W)$ ). The cross entropy of the two should equal the maximum likelihood.

## SGD with Cross Entropy Loss
Loss Function:
$$
\begin{align*}
l(W, x_i, y_i) &= -\log\mathbb{P}(y_i | x_i; W) 
\\&=-w^T_{y_i} x_i + \log (\sum_j exp(w_j^T x))
\end{align*}
$$
Gradient w.r.t $w_{y_i}$: $(\mathbb{P}(y_i | x_i ; W) - 1)x_i$
Gradient w.r.t $w_{x_i}$: $(\mathbb{P}(c | x_i ; W))x_i$

Pseudocode Initialization:
![[Pasted image 20240116231405.png]]