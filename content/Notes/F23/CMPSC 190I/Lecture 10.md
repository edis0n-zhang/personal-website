---
date: 2023-10-02
---
# Training Neural Networks
![[Pasted image 20240116231908.png]]
Given a network like this, think about the $w$ matrices.

Where $w_1$ is the layer between the input layer and the first hidden layer, $w_2$ is the layer between the hidden layers, and $w_3$ is the layer between the last hidden layer and the output layer:
$$
\begin{align*}
w_1 \in \mathbb{R}^{4 \times 3}
\\w_2 \in \mathbb{R}^{4 \times 4}
\\ w_3 \in \mathbb{R}^{1 \times 4}
\end{align*}
$$
## How to find the best Hyperparameters

The goal of machine learning is to perform well on unseen data

**How to?** use a holdout validation set.

For instance, MINIST train 60,000, MNIST Test: 10,000

Try different settings i.e
Setting 1 : 6 layers, 6 hidden dimensions
Setting 2 : 8 layers, 16 hidden dimensions

$\vdots$

Setting N:

Choose the one with the highest accuracy on the test set.

**Note:** You should not tune your model on the test set. This is because you will overfit on the test set, the test set should be a representation of a real world use case.

### Loss

For training, typically there are two losses you should monitor.
- Loss on the training data - how well the model learns
- Loss on the validation data - how well the model generalizes


![[Pasted image 20240116231941.png]]


At some tipping point the training data's boundary will become so sophisticated it cannot be generalized. To find this tipping point take a general average and find when the validation loss starts increasing.