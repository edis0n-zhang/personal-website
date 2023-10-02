---
date: 2023-10-02
---
## Big O Notation

Given T(n) is the upper bound on a runtime of algorithm on the worst-case input of size n.
$$
\begin{align}
T(n) &= 5(n - 2) (n + 1) + 10 \sqrt{n} \notag
\\ T(100) &= 5 * 98 * 101 + 10^2 = 49,590 \notag
\\ T(n) &= O(n^2) \notag
\end{align}
$$
$f(n)$ is $O(g(n))$ if $\exists c > 0, n_0 > 0$ such that $\forall n > n_0, f(n) \leq c(g(n))$.

![[Big O Drawing.png|400]]

### Example Problems

1. 
$$
\begin{align}
f(n) &= 50n^2 - 100n \notag
\\ f(n) &= O(n^2) \notag
\\ g(n) &= 100 n \log{n}  + 500 \sqrt{n} \notag
\\ \therefore g(n) &= O(n\log{n}) \notag
\end{align}
$$

2. 
$$
\begin{align*}
f(n) &= (50\log{n})^{100}
\\ g(n) &= n^{\frac{1}{2}}
\end{align*}
$$
$$
\\ (\log{n})^{1000} < n^{.0001}
\\ \therefore f(n) = O(g(n))
$$
3. 
$$
\begin{align*}
f(n) &= 50 \log_{10}(n^{100})
\\ g(n) &= 2\log_2{n}
\end{align*}
$$
$$
\\ 3 \log_8{n} = \log{8}(n^3) = \log_{2}{n} \implies log_{2}{n} = 3 \log_{8}{n}
\\ \text{therefore } \log_{10}{n} = O(\log_2{n}) \ \& \ \log_2{n} = O(\log_10{n})
$$
$$
\therefore f(g(n)) \ \& \ g(f(n))
$$
4. 
$$
\begin{align*}
\\ f(n) &= n^2
\\ g(n) &= 3^{\log_2{n}}
\end{align*}
$$
$$
\\ g(n) = 3^{\log_2{n}} = (2^{\log_2{3}})^{\log_2{n}} = 2^{\log_2{3} \times {\log_2{n}}} = (2^{\log_2{n}})^{\log_2{3}} = n^{\log_2{3}}
\\ \therefore n^{\log_2{3}} < n^2
$$
Takeaway: To solve problems comparing $n$ and some number to the power of $\log{n}$ convert the base number to $n$ using log rules and compare.

5. 
$$
\begin{align*}
\\ f(n) &= 2^{\sqrt{n}}
\\ g(n) &= n^{\log_2{n}}
\end{align*}
$$
$$
\\ g(n) = n^{\log_2{n}} = (2^{\log_2{n}})^{\log_2{n}} = 2^{(\log_2{n})^2}
\\ \sqrt{n} > (\log_2(n))^2
\\ \therefore g(n) = O(f(n))
$$
## Alg. Analysis

**Model of Computation:**
Basic arithmetic operations in O(1) time
Infinite memory & O(1) time to access unit of memory
All analysis in Big O
Big O will be for a specific algorithm, NOT for the problem.
### Max Substring Sum

Input: Array $A = [a_1 ... a_n]$ of $n$ integers
Output: max sum from a substring of A, i.e, max $a_i + a_{i + n} + ... a_j$ where $i \leq j$

Possible Solution 1, Brute Force
Run time: $O(n) \times O(n) \times O(n) \times O(1) = O(n^3)$ times

```pseudocode
max = 0
For i = 1 to n
	For j = i to n
		temp = 0
		for k = i to j
			temp = temp + a[k]
		if temp > max then max = temp
return max
```

Faster Solution, Sliding WIndow
Run time: $O(n^2)$

```pseudocode
max = 0
For i = 1 to n
	temp = 0
	for j = i to n
		temp = temp + a[j]
		if temp > max then max = temp
return max
```

There exists an $O(n)$ solution using DP