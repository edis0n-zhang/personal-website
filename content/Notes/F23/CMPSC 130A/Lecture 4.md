---
date: 2023-10-11
---
## General Directed Graphs

Vertices a & b are strongly connected if path $a \to b$ and $b \to a$.

**SCC:** Strongly Connected Component = maximal set of strongly connected vertices.

**Metagraph on SCC's:** Vertex for each SCC. Edge $S \to S'$ if some $a \in S$ & $b \in S'$ has edge $\vec{ab}$.

**Example:**

![[Pasted image 20231207015313.png]]

Within Red boxes are SCC's.

Metagraph on SCC's:
![[Pasted image 20231207015332.png]]
This metagraph is a DAG.

Key: Every directed graph is a DAG on its SCC's. Why? What if there is a cycle in SCC graph?

**FALSE** Conjecture: In a general directed graph vertex with lowest post # is in a sink SCC

**Lemma:** In a directed graph, the vertex with the highest post # lies in a source SCC.

Source $SCC^S$ is opposite of sink $SCC^{S'}$.  \
The reverse of $\vec{G} = (V, \vec{E})$: $\vec{G}^R = (V, \vec{E}^R)$ (FLIP EVERY EDGE) \
Note that the SCC's in $\vec{G}$ will be the same as the SCC's in $\vec{G}^R$ \
However, the DAG on SCC's is flipped. \
Source $SCC^S$ in $\vec{G}$ = equal to sink $SCC^S$ in $\vec{G}^R$ \
Sink $SCC^{S'}$ in $\vec{G}$ = Source $SCC^{S'}$ in $\vec{G}^R$

### Final SCC Algorithm
1. Given $\vec{G} = (V, \vec{E})$, construct $\vec{G}^R = (V, \vec{E}^R)$
2. Run DFS on $\vec{G}$
3. Sort V by decreasing postorder number from step 2
4. Take unvisited vertex $v*$ with highest postorder number
5. Run Explore($v*$) and label as a new SCC
6. Repeat until all vertices are visited

```pseudocode
For input G = (V, E)

Construct the Reversed Graph GR
Run DFS on GR and keep pre and post order number
Order V by decreasing post order number
run undirected connected components algorithm on G to find SCC's in G

DFS-cc(G):
	For all vertices in V, set visited(v) = False
	cc = 0
	For all v in Vertices(Ordered by decreasing post order number)
		If not visited(v)
			then cc++
			Explore(v)

Explore(z):
	visited(z) = T
	sccnum(z) = scc
	for all edges in e:
		if not visited(w) then explore(w)
```

### Lemma Proof

**Lemma:** In a directed graph, the vertex with the highest post # lies in a source SCC.
**Proof:**
**Claim:** If S & S' are SCC's & there is edge $a \in S$, $b \in S'$, there is an edge $\vec{ab} \in \vec{E}$

![[Pasted image 20231207015348.png]]

The max post # in S > than the max post # in S'

Only the claim has to be proved to prove the Lemma. If the claim is true then the SCC with the vertex with the greatest post order number then is MUST be true that it is the source SCC as no other SCC's could point to it.

Proof of claim: Run DFS, take 1st vertex in $S \cup S'$ that's visited, call it Z.
