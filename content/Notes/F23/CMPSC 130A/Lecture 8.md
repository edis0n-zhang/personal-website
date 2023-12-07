---
date: 2023-10-25
---
# Cut Property

**Definition:**
- For $G=(V,E)$, consider $X \subset E$ where: $X \subset T$ for a MST T 
- Take any subset S of vertices where No edge of X crosses $S \leftrightarrow \overline{S}$ 
- Let $e^*$ be any minimum weight edge of E crossing $S \leftrightarrow \overline{S}$ 
- Then: $X U e^* \subset T'$ for a MST T'. (Thus $XUe^*$ is a partial MST)

### Cut Property Proof
We know that $X \subset T$ for MST T. There are two cases $e^* \in T$ or $e^* \notin T$.

**Case 1:** $e^* \in T$ \
Since $X \subset T$ and $e^* \in T$ \
Then $X \cup e^* \subset T$ and $T$ is a MST

**Case 2:** $e^* \notin T$ \
Say $e^* = (y,z)$, add $e^*$ to T.\
T is a tree so there is exactly 1 path P between y & z
Then, $T\cup U e^*$ has a cycle C = $P \cup e^*$

# Union-Find Data Structure

The Union-Find data structure is a collection of sets where each set has a unique name.

**Operations:**
- Makeset(x): Creates set
- Find(x): Returns root
- Union(x,y): Points root of smaller rank root to larger rank root

**Properties:**
- Each set is a directed tree:
	- Edges point up to the root
	- The name of the set is the root element
- Each node has the following:
	- rank(x) = height of subtree below x
	- $\prod$(x) = parent of x, note that x is the root the parent of x is x
- Rank only increases when merging two trees of same rank
## Union Find Claims
### Claim 1
The max depth of a subtree is $\log_2 n$

**Proof:**\
Let l = # of nodes of rank = k\
Then, $(l)(2^k) \leq n$ so $l \leq \frac{n}{2k}$\
Let $k = \log_2 n + 1$ then $l \leq \frac{1}{2} \leq 1$ so no nodes of rank $\log_2 n  + 1$
### Claim 2
Root of rank $k$ has $\geq$ 2$^k$ nodes in its subtree (including itself)

**Proof:**\
Induct on $k$.\
Base case: $k=0$, since count root then $2^0=1$\
Assume true for trees of rank $k \leq k-1$\
To get node $v$ of rank $k$ we merge two trees of rank $k-1$, thus $v$'s subtree has $\geq 2^{k-1} + 2^{k-1} = 2^k$

