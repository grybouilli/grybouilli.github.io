import numpy as np 
import matplotlib.pyplot as plt

f = 440
prec = 24
period = 1/f
t = np.linspace(0, period, prec)
s = np.sin(2*np.pi*f*t)

plt.figure()
plt.plot(t[:-1],s[:-1],marker="o",linestyle="None")
plt.xticks([])
plt.yticks([])
plt.xlabel("Time")
plt.ylabel("Tension")
plt.title("Sinewave samples for a LUT")
plt.show()