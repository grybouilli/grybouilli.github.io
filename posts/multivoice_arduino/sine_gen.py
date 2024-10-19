import numpy as np 
import itertools
import math
import matplotlib.pyplot as plt

def period_of_sum(f1, f2):
    # Calculate the greatest common divisor (GCD) of the frequencies
    gcd_f1_f2 = math.gcd(int(f1 * 1e6), int(f2 * 1e6)) / 1e6

    # The period of the sum is the reciprocal of the GCD
    if gcd_f1_f2 == 0:
        return float('inf')  # If the frequencies are not rational multiples, the period is infinite
    else:
        return 1 / gcd_f1_f2
    
f1 = 440
f2 = 659.26
period = period_of_sum(f1,f2)
prec = 1000
t = np.linspace(0, period/5000, 1000)
a3 = np.sin(2*np.pi*f1*t)
c4 = np.sin(2*np.pi*f2*t)

# Create a figure and a set of subplots
fig, axs = plt.subplots(2, 2, figsize=(10, 8))
for i,j in itertools.product(range(axs.shape[0]), range(axs.shape[1])):
    axs[i, j].set_xticklabels([])
    axs[i, j].set_yticklabels([])
    axs[i, j].set_xlabel("Time")
    axs[i, j].set_ylabel("Air pressure")

# Plot on the first subplot
axs[0, 0].plot(t[:prec//2], a3[:prec//2])
axs[0, 0].set_title('A3')

# Plot on the second subplot
axs[0, 1].plot(t[:prec//2], c4[:prec//2])
axs[0, 1].set_title('E4')

# Merge the two columns of the second row into a single subplot
fig.delaxes(axs[1, 1])
ax_big = fig.add_subplot(2, 1, 2)
# Plot on the third subplot (which will be in a new line)
ax_big.plot(t, a3+c4)
ax_big.set_title('A3 and E4 played together')
axs[1, 0].set_xlabel("")
ax_big.set_xlabel("Time")
ax_big.set_xticklabels([])
ax_big.set_yticklabels([])


# Hide the fourth subplot as it's not needed
axs[1, 1].axis('off')

# Adjust the layout
plt.tight_layout()

# Show the plot
plt.show()