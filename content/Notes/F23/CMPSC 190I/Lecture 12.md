---
date: 2023-11-14
---
## Backpropagation
- Worked through a computational graph example (Sigmoid).
- **Key Idea:** To find the downstream gradient, multiply the upstream gradient and the local gradient.

### Gates

**Add Gate:** Also known as a gradient distributor. The downstream gradients will equal the upstream gradient when there is an add gate.

**Mul Gate:** Also known as the swap multiplier. The downstream gradients will equal $x \cdot \text{upstream gradient}$ where x is the input.

**Max Gate:** Also known as the gradient router. The downstream gradients will equal the following, the greater input value's gradient will equal the upstream gradient whereas the lower input value's gradient will equal to zero.

## Recap: Vector Derivatives

### Scalar to Scalar
$$
x \in \mathbb{R}^{1 \times 1}, y \in \mathbb{R}^{1 \times 1}
$$
Regular Derivative
$$
\frac{\partial y}{\partial x} \in \mathbb{R}^{1 \times 1}
$$
### Vector to Scalar
$$
x \in \mathbb{R}^{N \times 1}, y \in \mathbb{R}^{1 \times 1}
$$
The gradient:
$$
\frac{\partial y}{\partial x} \in \mathbb{R}^{N \times 1}
$$
### Vector to Vector
$$
x \in \mathbb{R}^{N \times 1}, y \in \mathbb{R}^{M \times 1}
$$
The Jacobian:
$$
\frac{\partial y}{\partial x} \in \mathbb{R}^{M \times N}
$$
i-th row, j-th col:
$$
\bigg(\frac{\partial y}{\partial x}\bigg)_{i,j} = \frac{\partial y_i}{\partial x_i}
$$
