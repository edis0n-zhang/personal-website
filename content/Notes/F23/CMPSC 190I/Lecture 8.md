---
date: 2023-10-26
---
# 10-Class Classification

- You are given many instances
	- Ex: You are given many pairs, images of animals and their names
	- An example could be a picture of a dog and the label "dog"
	- $x^1$ will be the image of the dog, $y^1$ will be the key "dog"
	- If there are 10 classes (10 animals), you can represent them in a 10 dimensional vector

![[Pasted image 20240116231705.png]]

**Equation:**
$$
\begin{align*}
f(\cdot) = W x^{i}
\end{align*}
$$


![[Pasted image 20240116231745.png]]


**Goal:**
Let's say you input $x_i$, you want $y_i$'s probability to be the highest

After the Softmax function, the $j$th element after the Softmax:
$$
\frac{exp[w_j^Tx^{(i)}]}{\sum_t exp[w_j^Tx^{(i)}]}
$$
Given $j = y^{(i)}$, we want to maximize the value above. This is to maximize the probability as the Softmax function returns the probability:
$$
\max\frac{exp[w_{y^{(i)}}^Tx^{(i)}]}{\sum_t exp[w_{y^{(i)}}^Tx^{(i)}]}
$$
This is equivalent to:
$$
\min -\frac{exp[w_{y^{(i)}}^Tx^{(i)}]}{\sum_t exp[w_{y^{(i)}}^Tx^{(i)}]}
$$
**What is your input?** It's your entire weight matrix, you want to minimize the incorrect rows while maximizing the correct row.

Therefore we have to find how:
$$
\begin{align*}
&W_1^T &\text{update?} \\
&W_2^T &\text{update?} \\
. \\
. \\ 
. \\
&W_{y^{(i)}} &\text{update?} \\
&W_{10} &\text{update?}
\end{align*}
$$
**Claim:** You can only update $W_{y^{(i)}}$ specially, this is because the rest all appear in the denominator. Only $W_{y^{(i)}}$ appears specially in the numerator and denominator and must be updated specially.
**Proof:**
$$
\begin{align*}
&\min -\frac{exp[w_{y^{(i)}}^Tx^{(i)}]}{\sum_t exp[w_{y^{(i)}}^Tx^{(i)}]} \equiv \min -\log\frac{exp[w_{y^{(i)}}^Tx^{(i)}]}{\sum_t exp[w_{y^{(i)}}^Tx^{(i)}]} \\
&\min -\log[{exp[w_{y^{(i)}}^Tx^{(i)}]}] + \log[{\sum_t exp[w_{y^{(i)}}^Tx^{(i)}]}] \\
&= \min -w_{y^{(i)}}^Tx^{(i)} + \log[{\sum_t exp[w_{y^{(i)}}^Tx^{(i)}]}]
\end{align*}
$$
Now if we were to take the gradient with respect to some $W_1^T$ where $W_1^T$ does not correspond to $y^{(i)}$:
$$
\frac{\partial}{\partial W_1^T} (\cdot) = \frac{1}{\sum_t exp[w_{y^{(i)}}^Tx^{(i)}]} \cdot  exp[W_1^Tx^{(i)}] \cdot x^{(i)}
$$
**Note:** Remember chain rule. Notice that this gradient would be the same for each and every $W_j^T$ where $j \neq y^{(i)}$. This is why you can have a piecewise function where you only need to take two unique gradients, $W_j^T$ where $j \neq y^{(i)}$ and where $j = y^{(i)}$.

**What about SGD with multiple examples?**

Place gradients as rows in $V$
