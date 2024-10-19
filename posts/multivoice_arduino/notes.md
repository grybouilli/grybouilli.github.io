# Generating multi-voices sound on Arduino

## Foreword
### Motivations
### Pre-requisites
### The equipment

-> [The atmega328p boards](https://learn.sparkfun.com/tutorials/arduino-comparison-guide/atmega328-boards)
## Summary

* [Digital audio synthesis part 1: The oscillator](https://www.norwegiancreations.com/2022/03/digital-audio-synthesis-part-1-the-oscillator/)
  
## To note
### Definition of phase accumulator

"The **PA** (*phase accumulator*) is made by incrementing a counter at a given frequency with something called a “Frequency Control Word”.

It’s always incremented at the same time-internal (period), but it is the “Frequency Control Word” that decides the output-frequency.

So a bigger word => faster incrementation of the phase accumulator => Higher frequency.

And when the phase accumulator reaches its top value, it wraps down to 0."

### The tuning word

As said previously, the idea behind the phase accumulator is to decrease down to zero, by using a constant decrement : the **tuning word**.

The phase accumulator starts to its maximum value. It often is $2^N$ where $N$ is the number of bits used for the PA.


Say we want to generate a note $note$ of period $t_{out}$ using a timer of period $t_{cpu}$. There is an integer $n$ such as :

$$t_{out} \approx n t_{cpu} \quad\quad (1)$$

So, the timer iterates $n$ times before reaching the $note$'s period. Hence, the PA is decremented $n$ times before reaching zero. So we get the following equation for the tuning word size $\Delta f$:

$$\Delta f \approx \dfrac{max\_pa}{n} \approx \dfrac{2^N}{n}\quad (2)$$

By inversing the relationship (1) to switch to the frequency domain, we get:

$$f_{out} \approx \dfrac{1}{n} f_{cpu}\quad\quad (3)$$


Now, let's get $f_{cpu}$ on the left side of this equation and let's multiply the equation by $max\_pa$ :

$$max\_pa\dfrac{f_{out}}{f_{cpu}} \approx \dfrac{max\_pa}{n} \quad\quad (4)$$

Injecting (2) in (4), we finally get :
$$ \Delta f \approx max\_pa\dfrac{f_{out}}{f_{cpu}} \approx 2^N\dfrac{f_{out}}{f_{cpu}} \quad\quad (5)$$

Now that is a very useful equation that's given a bit of everywhere out there, but that I had never had an explanation for. Now we've got it.

## The working example
* [A working example](https://stackoverflow.com/questions/28976608/arduino-how-to-create-two-or-more-tones-simultaneously-on-a-piezo-buzzer)


## Compile your article

[LaTeX to HTML](https://gavinmcwhinnie.github.io/pandoc-math/installation/)

## Some nice addition to go further

[Enveloppe generation](https://www.norwegiancreations.com/2022/08/digital-audio-synthesis-part-3-envelope-generation/)
