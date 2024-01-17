---
date: 2024-01-16
---

# CNN
## Number Of Filters
You can apply multiple filters in a convolution. # of filters = # of feature maps in the output matrix. So far, the convolutions have only considered one channel. This is the case when the input is only black and white. However, what if the image is RGB with 3 channels for instance? 

**The number of channels in the input matrix and kernel matrix MUST MATCH.**

## Example Convolution Layers

**Edge Detection:** $$\begin{vmatrix} -1 & -1 & -1 \\ -1 & 8 & -1 \\ -1 & -1 & -1 \end{vmatrix}$$
**Sharpen:** $$\begin{vmatrix} -1 & -1 & -1 \\ -1 & 9 & -1 \\ -1 & -1 & -1 \end{vmatrix}$$
**Gaussian Blur:** Note that the sum is equal to 16 and it is being multiplied by 1/16. This is why it creates a blur, it takes the average over the kernel matrix and weighs the center more heavily.
$$\frac{1}{16} \cdot \begin{vmatrix} 1 & 2 & 1 \\ 2 & 4 & 2 \\ 1 & 2 & 1 \end{vmatrix}$$
## 1x1 Convolution
$1 \times 1$ Kernel is a special kernel choice. It doesn't recognize spatial patterns, but fuse channels.

## Pooling
Pooling layer returns the aggregated value in the sliding window.

### Max Spatial Pooling
Takes the maximum over a sliding window of the channel layer. Imagine a $2 \times 2$ matrix sliding over a layer and taking the maximum in the matrix to create an output matrix.

### Max Channel Pooling
Takes the maximum over a channel of the input matrix. Imagine a $1 \times 1 \times 3$ matrix sliding over the input matrix across all channels taking the maximum across all channels to create an output matrix.

## Average Pooling
Same as the previous methods, instead replace taking the maximum with the average across the window.

# ResNet
## Are Deeper Networks Better?

Intuitively, deeper networks have more trainable parameters so they should be more capable of fitting patterns in a training set. However, in practice that is not the case.

**In a very deep neural network, the training performance degrades, but why?**

Seeing this problem, they sought a solution.

### Diagnosis

**Fact:** Deep models have more representation power (more parameters) than shallower models.

**Hypothesis:** Deeper networks might be harder to optimize

What should deeper models learn to be at least as good as the shallower model?

**Solution:** Copy the learned layers from the shallower model, set the residual connection.

![[Pasted image 20240116232522.png]]

## Case Study: Res-Net 50 [He et al. 2015]

ResNet-50 is a **very** deep neural network using residual connections.

**50 Layers With Learnable Parameters:**
- 1 7x7 Conv Layer
- 4 Categories of blocks, each block has 3 Conv Layers, the blocks are repeated for $[3,4,6,3]$ times $\to$ 48 Conv Layers
- 1 FC Layer

**Key Takeaways:**
- Notice that as the space of the matrix shrinks, the number of channels increases.