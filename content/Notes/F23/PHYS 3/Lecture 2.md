---
date: 2023-10-03
---
## Topics

- Define k, $\omega$
- v - wave speed, define what affects it
- Power transferred by waves

## Wave Equation

**Periodic Wave Formula (Positive x-direction):**
$$
y(x, t) = A \cos{[k(x - vt)]}
$$
- The displacement y of a particle is dependent on the position and time.
- Definitions:
$$
\begin{align*}
&v: \text{wave speed} = \lambda f
\\ &k: \text{wave number} = \frac{2\pi}{\lambda}
\\ &\omega : \text{angular frequency} = 2 \pi f = \text{rad} / \text{sec}
\end{align*}
$$
- Using these, you can rewrite the periodic wave formula
$$
y = A\cos{[kx - 2\pi f t]} = A \cos{(kx - \omega t)}
$$
This is the most common form of the wave formula.

**Periodic Wave Formula (Negative x-direction):**
$$
y(x,t) = A \cos{(kx + \omega t)}
$$
## Wave Speed v

![[Phase Velocity Drawing.png]]

**Phase Velocity:**
Phase velocity is the speed and direction at which the phase of a wave propagates through space.

Imagine you are swimming in an ocean, the phase velocity is the speed you would have to swim to stay at the same point of the wave.
$$
\begin{align*}
&\frac{d}{dt} (kx - \omega t) = 0
\\ &kv - \omega = 0
\\ &v = \frac{\omega}{k}
\end{align*}
$$
### Properties That Determine v

- Density: $\mu$, $[\frac{kg}{m}]$
	- Velocity is inversely proportional to the density
	- $v \sim \frac{1}{\mu}$

- Tension: $F$
	- Velocity is proportional to the tension
	- $v \sim F$

Using these properties and dimensional analysis we get:
$$
v = \sqrt{\frac{F}{\mu}} = \sqrt{\frac{m^2}{s^2}} = \frac{m}{s}
$$

## Waves Transport Energy

$$
p = \frac{dE}{dt}= \frac{dF_x}{dt} = F \cdot v
$$
When a point $a$ moves in the $y$-direction, the force $F_y$ does work on this point therefore transfers energy into the part of the string to the right of $a$.
$$
\\ \frac{F_y}{F} = - \frac{\partial y}{\partial x}_x
\\ P(x,t) = F_y(x,t) v_y(x,t)
\\ = FA^2k\omega \sin^2{(kx - \omega t)} \ (\text{instantaneous power})
$$
The average power over one oscillation:
$$
P_{avg} = \frac{1}{2} \sqrt{\mu F} \omega^2 A^2
$$