Title: VAE Synth for Ossia Score
Date: 2023-08-31
Category: Projects

## A Pytorch based Variational Auto-Encoder for Ossia Score.
### Context
This work was conducted during my 2023 Summer Internship at Chalmers University, under the supervision of Kivanç Tatar. The goal was to generate sound using ML Pytorch models in a DAW or intermedia sequencer such as Ossia Score. Initially, I figured I´d try to run some python code inside PureData which would in turn be embedded inside Ossia Score. Stepping forward, I ended up developping an addon-on for Ossiam Score to use Pytorch VAEs to produce sound in real-time.

### Conducted work

I developed an object which allows running Python code in two steps: the loading part and the running part. The heavy and loading work should be done in the loading part and the sound synthesis should be put in the running part. This solution isn't Pytorch specific, it rather allows the user to use Python code to generate sound.

To make it more accessible, I created a Docker image: you can find guidelines on how to use it [here](https://github.com/grybouilli/docker-for-ossia/tree/master)

![](/images/vae_synth_demo.gif)

The repo to the ossia-score addon can be found [here](https://github.com/grybouilli/VAE_Synth/)