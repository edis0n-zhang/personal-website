---
date: 2023-09-28
---
# Chap 1. Vectors, Matrices & Apps.

$\mathbb{R}$ is the set of all real numbers
 
## Definition of a Vector

An ordered pair of numbers in $\mathbb{R}^2$ e.g. $<2, 3>$. 

$$
\\ <x,y> \text{ where } x \in \mathbb{R}, y \in \mathbb{R}
$$

An ordered triple of numbers in $\mathbb{R}^3$ e.g. $<-1.5, \sqrt{2}, \pi>$. 

$$
<x,y,z> \text{ where } x, y, z \in \mathbb{R}
$$
## Notation

in $\mathbb{R}^2$:
$$
\\ \vec{v} = <v_1, v_2> \text{ where } v_1, v_2 \in \mathbb{R}
\\ \vec{v} = \begin{bmatrix}   v_1 \\   v_2  \end{bmatrix} = < v_1, v_2 >^T \text{ where } v_1, v_2 \in \mathbb{R}
$$
in $\mathbb{R}^3$:
$$
\\ \vec{v} = <v_1, v_2, v_3> \text{ where } v_1, v_2, v_3 \in \mathbb{R}
\\ = v_1 \cdot \vec{i} + v_2 \vec{j} + v_2 \vec{k} \text{ where } \vec{i} = <1, 0, 0>, \space \vec{j} = <0, 1, 0>, \space \vec{k} = <0, 0, 1>
\\ i \text{ is the unit vector in the x-direction}, j \text{ in the y-direction}, k \text{ in the z direction}
$$
### Examples

Let A, B, C, D be 4 points in $\mathbb{R}^2$.

$$
A = (3,2), \ B = (-1, 4), \ C = (-4, 2), \ D = (0, 0)
$$
> [!info] Point vs Vector Notation
> Points are written with Parenthesis e.g $(3, 2)$ is a point
> 
> Vectors are written with brackets e.g $<3, 2>$ is a vector

Consider the vector $\overrightarrow{AB}$ the vector that starts from the point A & ends at the point B.

![[Example Vector.png|800]]

$$
\overrightarrow{AB} = \text{Point }A - \text{Point }B = (-1, 4,) - (3, 2) = <-4, -2>
$$

## Length (Magnitude) of a vector

### Def. In 2D
In $\mathbb{R}^2$ the length or magnitude of a vector $\vec{v} = <v_1, v_2>$ is
 $$||\vec{v}|| = |\vec{v}| = \sqrt{v_1^2 + v_2^2}$$

### Def. In 3D
In $\mathbb{R}^3$ the length or magnitude of a vector $\vec{w} = <w_1, w_2, w_3>$ is
$$||\vec{w}|| = |\vec{w}| = \sqrt{w_1^2 + w_2^2, w_3^2}$$

### Def. Unit Vector

We say that a vector $\vec{v}$ in $\mathbb{R}^2$ or $\mathbb{R}^3$ is a unit vector of $||\vec{v}|| = 0$

## Direction of a Vector

In $\mathbb{R}^2$ or $\mathbb{R}^3$ $\vec{v}$ is a vector such that $\vec{v} \neq \vec{0}$. 

We say that a vector $\vec{w}$ is in the direction of $\vec{v}$ if there exists :
$$
\lambda \in \mathbb{R}, \lambda \geq 0 \text{ such that } \vec{w} = \lambda \cdot \vec{v}
$$

We say that a $\vec{w}$ is in the **opposite** direction of $\vec{v}$ if there exists:
$$
\lambda \in \mathbb{R}, \lambda < 0 \text{ such that } \vec{w} = \lambda \cdot \vec{v}
$$
## Vector Addition

$\text{in } \mathbb{R}^2:$
$$
\vec{v} + \vec{w} = <v_1 + w_2, v_2 + w_2>
$$
$\text{in } \mathbb{R}^3:$
$$
\vec{v} + \vec{w} = <v_1 + w_2, v_2 + w_2, v_3 + w_3>
$$
## Vector Multiplication

Given that $\lambda \in \mathbb{R}$:

$\text{in } \mathbb{R}^2:$
$$
\lambda \cdot \vec{v} = <\lambda \cdot v_1, \lambda \cdot v_2>
$$

$\text{in } \mathbb{R}^3:$
$$
\lambda \cdot \vec{v} = <\lambda \cdot v_1, \lambda \cdot v_2, \lambda \cdot v_3>
$$

## Dot Product

$\text{in } \mathbb{R}^2:$
$$
\vec{v} \cdot \vec{w} = v_1 \cdot w_1 + v_2 \cdot w_2
$$

$\text{in } \mathbb{R}^3:$

$$
\vec{v} \cdot \vec{w} = v_1 \cdot w_1 + v_2 \cdot w_2 + v_3 \cdot w_3
$$