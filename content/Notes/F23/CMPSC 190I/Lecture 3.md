---
date: 2023-10-05
---
## The Regression
Suppose we observe a real valued input x and we wish to use the observation to predict the value of a real-valued target variable y 

**Applications:**
- Financial domain: house price, stock market, etc
- Healthcare domain: vital measurements are in real value

### House Buying Example Problem
Problem: You want to predict how much a house is worth.
Target: Actual price for house as denoted as y
Input Features:
- $x_1:$ number of bedrooms
- $x_2:$ number of bathrooms
- $x_3:$ living sqft
- etc. etc.

## Predictive Model
- Input: $x = [x_1, x_2, ... , x_d] \in \mathbb{R}^d$
- Output: $y\in R$
- Functional Form:
	- $f : \mathbb{R} \to \mathbb{R}$ infinitely many
	- $f(x) = w^Tx + b, w \in \mathbb{R}, b \in \mathbb{R}$

**Note:** Another form this function can take is $f(x) = Wx$. 

To convert between $f(x) = w^T x + b$ to $f(x) = Wx$:
$$
\begin{align*}
x' = \begin{bmatrix} x \\ 1 \end{bmatrix}
\\ W = \begin{bmatrix}w \\ b \end{bmatrix}
\end{align*}
$$

### How to Find a Good Model?
Criteria: Compare the true value vs the estimated value via a squared loss
$$
\begin{align*}
X&: \text{Input vector}
\\ B&: \text{Bias}
\end{align*}
$$
$$
\underset{\theta}\min \sum^N_{i=1} ||f(x_i; \theta) - y_i||^2_2
$$
Linear Regression:
$$
\underset{w, b}\min \sum^N_{i=1} ||w^Tx_i + b - y_i||^2_2 \qquad w \in \mathbb{R}^d, b \in \mathbb{R}
$$
Matrix Form:
$$
\underset{w, b}\min||Xw + b - y||^2_2 \qquad w \in \mathbb{R}^d, X \in \mathbb{R}^{n \times d}, y \in \mathbb{R}
$$
Note that $b$ may be excluded, it can be counted as a part of $w$. 

#### Re-Parametrization
Tilde implies a re-parametrization, that the bias term is being included in the w and x term.
$$
\begin{align*}
f(x) &= w^Tx + b, w \in \mathbb{R}^d, b \in \mathbb{R}
\\ f(\tilde{x}) &= \tilde{w}^T \tilde{x}, \tilde{w} \in \mathbb{R}^{d+1}, \tilde{x} = [x+1] \in \mathbb{R}^{d+1}
\end{align*}
$$

## Matrix Derivative
### Gradient of a function
In many machine learning problems, the objective involves a function  
that takes a vector of variables as input, e.g., $f(w) = w^Tx = w_1x_1 + w_2x_2$

Suppose the first partial derivatives of 𝑓 exist, the gradient of 𝑓 (denoted  
by ∇𝑓 ) is the vector field whose ith component is the ith partial derivative. (Jacobian)

### Solving Least Squares Problem
Given:
$$
\underset{\tilde{w}}\min L(\tilde{w}) = ||\tilde{X} \tilde{w} - y||_2^2, \tilde{w} \in \mathbb{R}^{d+1}, \tilde{X} \in \mathbb{R}^{n \times d + 1}, y \in \mathbb{R}^n
$$
Use these equations to solve for $\tilde{w}*$:
$$
\begin{align*}
&1. ||a||^2_2 = a^T a, a \in \mathbb{R}^n
\\ &2. (AB)^T = B^T A^T
\\ & 3. \nabla_w (w^T Aw) = (A + A^T)w
\end{align*}
$$
Solution:
$$
\begin{align*}
L(\tilde{w}) &= (\tilde{X} \tilde{w} - y)^T(\tilde{X}\tilde{w} - y) &(\text{Eq. 1})
\\ &= (\tilde{X}\tilde{w})^T \tilde{X}\tilde{w} - (\tilde{X}\tilde{w})^T y - y^T \tilde{X}\tilde{w} + y^T y &(\text{distributed transpose})
\\ &= \tilde{w}^T\tilde{X}^T\tilde{X}\tilde{w} - 2y^T\tilde{X}\tilde{w} + y^Ty &(\text{Eq. 2})
\\ \nabla_w L &= (\tilde{X}^T\tilde{x} + (\tilde{X}^T\tilde{x})^T)\tilde{w} - 2(y^T \tilde{x})^T &(\text{Eq. 3})
\\ &= 2\tilde{X}^T\tilde{X}\tilde{w} - 2\tilde{X}^T\tilde{y} &(\text{Eq. 2})
\end{align*}
$$
set the gradient equal to zero to find the minimum:
$$
\begin{align*}
\\ \nabla_w L &= 2\tilde{X}^T\tilde{X}\tilde{w} - 2\tilde{X}^T\tilde{y} = 0
\\ &\tilde{X}^T\tilde{X}\tilde{w} - \tilde{X}^T\tilde{y} = 0
\\ \tilde{w} &= (\tilde{X}^T\tilde{X})^{-1}(\tilde{X}^T\tilde{y})
\end{align*}
$$
**Note:** Rank deficiency problem. When $\tilde{X}^T \tilde{X}$ is close to singular, we would have numerical problems. The solution is to add regularization (Ridge Regression).
$$
\underset{\tilde{w}}\min L(\tilde{w}) = ||\tilde{X} \tilde{w} - y||_2^2 + \lambda||\tilde{w}||^2_2
$$
## Ridge Regression
Ridge Regression has the formula
$$\underset{\tilde{w}}\min L(\tilde{w}) = ||\tilde{X} \tilde{w} - y||_2^2 + \lambda||\tilde{w}||^2_2$$
where $\lambda > 0$

Solving for the analytical solution:
$$
\begin{align*}
\underset{\tilde{w}}\min L(\tilde{w}) &= ||\tilde{X} \tilde{w} - y||_2^2 + \lambda||\tilde{w}||^2_2
\\ &= \tilde{w}^T\tilde{X}^T\tilde{X}\tilde{w} - 2y^T\tilde{X}\tilde{w} + y^Ty + \lambda||\tilde{w}||^2_2 &(\text{From linear regression})
\\ &= \tilde{w}^T\tilde{X}^T\tilde{X}\tilde{w} - 2y^T\tilde{X}\tilde{w} + y^Ty + \lambda \tilde{w}^T \tilde{w} &(\text{Eq. 1})
\\ \nabla_{\tilde w} L(\tilde{w})&= (\tilde{X}^T\tilde{X} + (\tilde{X}^T\tilde{X})^T)\tilde{w} -2y^T\tilde{X} + 2\lambda \tilde{w}
\\ &= 2\tilde{X}^T \tilde{X} \tilde{w} - 2y^T \tilde{X} + 2 \lambda \tilde{w}
\end{align*}
$$
set the gradient equal to zero to find the minimum:
$$
\begin{align*}
0 &= 2\tilde{X}^T \tilde{X} \tilde{w} - 2y^T \tilde{X} + 2 \lambda \tilde{w}
\\ y^T\tilde{X} &= \tilde{X}^T\tilde{X} \tilde{w} + \lambda \tilde{w}
\\ y^T\tilde{X} &= (\tilde{X}^T\tilde{X} + \lambda I)\tilde{w}
\\ \tilde{w}&= y^T\tilde{X}(\tilde{X}^T\tilde{X} + \lambda I)^{-1}
\end{align*}
$$

The gradient also has the formula $\nabla_{\tilde{w}} L(\tilde{w}) = \frac{-2}{N} X^T (y - X\tilde{w}) + 2\lambda \tilde{w}$

