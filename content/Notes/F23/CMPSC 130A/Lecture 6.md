---
date: 2023-10-18
---
# Min-Heap

#### Operations:
- Insert(H, v, key(v)): add element v with key(v)
	- Add to leftmost open spot on bottom layer
	- Bubble up: Compare key to parent key and swap if it is less
- DecreaseKey(H, v, key(v)): for v in H, decrease its key to key(v)
	- Change value of key and then bubble up
- DeleteMin(H): return the element in H which has the smallest key and delete it from H
	- Take element from bottom right of tree and put at root then delete bottom right element
	- Sift down: Compare current node with its children. If the parent is less than both, done, no change. Otherwise, swap parent with child with smaller key between the two.

If $\leq$ n elements in H, then O(log(n)) time per operation.

How to implement min-heaps?
Use complete binary tree:
- this is a tree (with $\leq$ 2 children per node)
- every level is fully except possibly the bottom level & the bottom level is filled left to right

**Example:**
![[Drawing 2023-11-04 16.08.02.excalidraw]]

**Properties:**
- You can use an array A $[1\dots 7]$ to store the tree
- Store the keys in A and use an additional array to store the names
- Positions, for a node of position i in A:
	- The parent is in position $\lfloor{\frac{i}{2}}\rfloor$
	- The left child of i is at 2i
	- The right child of i is at 2i + 1
- Since it is a complete binary tree then the max depth is $\leq \lceil \log_(n+1) \rceil$
- Key of parent will always be less than or equal to key of child

## D-Ary Tree
What if we implemented a min heap with a D-Ary tree instead of a Binary Tree

> [!info] D-Ary Tree
> A D-Ary Tree is a tree that uses d children for integer d $\geq$ 2
>
> Height $\leq \log_d n = \frac{\log n}{\log d}$
> 
> Inserts / Decrease take $O(\log_d n$) time, so it is faster by $O(\log d)$
> 
> But deletes take $O(d\log_d n)$ time ($O(d)$ for each node on root-leaf path) so it is slower by a $O(d)$ factor.

# Bellman-Ford

Dijkstra's algorithm is very fast however it has the flaw that it only works on a graph with negative weight edges.

```pseudocode
Update(e):
	for edge e = (y,z):
	# Set the distance of z to the minimum between the current distance and the length of the edge + the distance at y
	dist(z) = min(dist(z), dist(y), + l(y,z))

Bellman-Ford(G,l,s)
	For all z in V:
		dist(z) = infinity
		prev(z) = NULL
	dist(s) = 0 # set distance of starting node to 0
	Repeat |v| - 1 times:
		For all e in E:
			Update(e)
```

**Running Time:** O(nm)

### Negative Cycle
Suppose there's a negative weight cycle in the graph, the distance will therefore not be well defined. How do we detect this case with the BF Algorithm?

**Solution:** Run the BF algorithm for one more round. If the distance of any vertex decreased, there is a negative weight cycle.

This works because if there is no cycle then the shortest path will always be from running the algorithm $|v|-1$ times, another run (given no cycle) will not change the distances.