---
date: 2023-10-17
---
## Regression vs. Classification

**Regression:** Observe a real-valued input x and predict real-valued target y.

**Classification:** observe a real-valued input x and predict categorical/discrete target y
### Examples of Classification Problems
Text Classification
- Classify the sentiment of a an online movie review (positive, neutral, negative)

### Classification Example

MNIST Dataset (10 classes total): Classify 10 digits

To begin, let's try a simple binary case: Differentiate 1 and 5.
- First, represent images to a real-valued input x (**feature extraction**)
- Possible Features:
	- Raw number of pixels
	- Strokes
	- Symmetry
- After extracting features, you can draw a line to separate.

$$
f(x=1 \lor 5) \underset{\text{Sigmoid}(w^T x)}\implies \begin{cases}s_1 \text{ score is 1, +1 class}\\ s_{-1} \text{ score is -1, -1 class}\end{cases}
$$
**Note:** $s_1$ represents $P(y = +1|x)$ and $s_2$ represents $P(y=-1|x)$ and $s_2 = 1-s_1$.

## Sigmoid Function
Sigmoid is defined as:
$$
\text{Sigmoid}(z) = \frac{e^z}{1+e^z} = \frac{1}{1+e^{-z}} \in [0,1]
$$
![[Pasted image 20240116231306.png]]
Note how Sigmoid(-z) relates
$$
\text{Sigmoid}(-z) = \frac{e^{-z}}{1+e^{-z}} = \frac{1}{1+e^{z}} \in [0,1]
$$
### What makes Sigmoid Function Good?

1. Our data is binary $\pm 1$
$$
D = \{(x_1,y_1),...,(x_N,y_n)\}
$$
2. Our model is good if $f(x_i)=\text{Sigmoid}(w^Tx_i)=1$ when $y_i = 1$ and $f(x_i)=\text{Sigmoid}(w^Tx_i)=0$ when $y_i=-1$

## The Logistic Loss Function

The logistic loss function is the objective function:

$$
\underset{w}\min L(w) = \frac{1}{N} \sum_{i=1}^{N}\ln(1+e^{-y_i(w^Tx)})
$$
It looks complicated but it is based on an intuitive probability interpretation and is easy to calculate.

The function will encourage the correct outputs from the Sigmoid function.

### The Decision Boundary
In 2-d space, $f(x) = w^T x$ defines a line that separates the space. The loss function helps find the optimal w*.

### Example: Find the Optimal w*

There is no analytical solution to this problem:

$$
\underset{w}\min L(w) = \frac{1}{N} \sum_{i=1}^{N}\ln(1+e^{-y_i(w^Tx)})
$$
We must use gradient descent:
$$
\begin{align*}
\frac{\partial(\cdot)}{\partial w} &= \frac{1}{1 + e^{-y_i(w^Tx)}} \cdot e^{{-y_i(w^Tx)}}(-y_ix_i)
\\ &= \frac{-y_i}{1 + e^{-y_i(w^Tx)}} x_i
\end{align*}
$$
## SGD for Logistic Regression
```psuedocode
Initialize w(0) at step w = 0
for t = 0,1,2...:
	Sample a batch of K data points
	Let gradient = 0
	for each sampled data (x, y)
		gradient += -y x (sigmoid(w transpose * x))
	w(t+1) = w(t) - step size * gradient
	iterate until it is time to stop
end for loop
return the final parameters
```
