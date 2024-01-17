---
date: 2023-10-12
---
# Gradient Descent

## Optimization in Machine Learning
Many machine learning problems can be cast into a numerical optimization problem in the form of:
$$\underset{w}\min L(w)$$
$L(\cdot)$ is a loss function that measures the model's performance

How do you find the global minimum? Sadly with a first order derivative you cannot always find the global minimum.

### Finding the Best Weights
Think of a ball on a complicated hilly terrain. You can roll the ball down and find a minimum, but how do you find the bottom of the deepest valley?

![[Pasted image 20240116230645.png]]

See this drawing, you may be able to find the deepest valley if you roll from A, but if you roll from B you may not find it. **In machine learning initial conditions are extremely important to achieving the least loss.**

### How to "Roll Down"

Assume the current weight is $w(t)$ and we take a step of size $\eta$ in the direction of $v$.
$$
w(t+1) = w(t) + \eta v
$$
What is the best direction to step? We want to pick $v$ that makes $L(w(t+1))$ as small as possible.

### The negative Gradient Direction is the fastest Way to Roll Down

We want $v$ that maximizes $\Delta L = L(w(t))) - L(w(t+1))$

We can approximate $\Delta L$:
- The Taylor series expansion $L(\cdot)$ at the point $w(t)$, and then evaluate the function at point $w(t + 1)$.
	- Recap for Taylor Series: $f(x) = f(a) + \frac{f'(a)}{1!}(x-a) + \frac{f''(a)}{2!}(x-a)^2...$
- $L(z) = -\eta \nabla L (w(t))^T v - O(\eta^2) \approx \eta \nabla L E(w(t))^T v$
	- $O(\eta ^2)$ can be approximated out because the higher order terms are extremely small.
- v has to be in the opposite direction of a gradient. Think about two vectors, what direction creates the greatest output for a dot product? It's when the vectors are in the same direction. Therefore v must be opposite of the gradient.
### Step Size
Step size cannot be too small or too big. It can be very tricky to set the right step size.

![[Pasted image 20240116231220.png]]

## Gradient Descent Algorithm

1. Initialize $w(0)$ at step $t = 0$
2. for $t = 0,1,2,...,$ do
	1. Compute the negative gradient direction: $v_t = -\nabla L(w) \vert_{w = v(t)}$
	2. Update the parameters: $w(t + 1) = w(t) + \eta v_t$
	3. Iterate until "It is time to stop"
3. end for
4. Return final parameter weights

# Stochastic Gradient Descent

- Instead of using traditional gradient descent, pick a random data point / batch of data points for calculating the gradient.
- When the batch size equals 𝑁, it becomes gradient descent
- This is useful when 𝑁 is large, loading all data in the memory becomes  
infeasible
- All modern deep learning training uses SGD
- Will be more spikey