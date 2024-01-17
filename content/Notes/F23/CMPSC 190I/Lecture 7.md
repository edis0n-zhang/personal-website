---
date: 2023-10-24
---
**Midterm Question:**
Why optimize for the g class, need to update other class's corresponding parameters as well

# Linear Classifier

The linear classifier is a hyperplane separates the space to $\pm 1$.

**But it has a limit:** In cases where the data in nonlinear the linear classifier doesn't work. Imagine the XOR problem.

# Multi-Layer Neural Networks

The "deep" approach: stack multiple layers of linear transformations interspersed with nonlinearities.

![[Pasted image 20240116231539.png]]

**Before:**
$$
f(x)=W_1x+b_1
$$
Where $W_1 \in \mathbb{R}^{\# \text{of classes} \times \text{input dim}}$ and $b_1 \in \mathbb{R}^{\# \text{of classes} \times 1}$

**Now:**
$$
f(x) = W_2g(W_1x+b_1) + b_2
$$