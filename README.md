### Neural network currency prediction model 2007 - 2017 ###

I was trying to put my hand on neuronetwork with synaptic.js
I created a Perceptron with 3 layers(5,15,1) and parsed historical data from 2007 to 2017 for 6 currencies.

- Australian
- Belorusian
- Euro
- Japan
- Swiss
- USD

*I got currency historical data from Central Bank of Russia -> [CBR](http://www.cbr.ru/currency_base/dynamics.aspx "CBR historical data")*

I used first 5 as inputs to the NET, and USD as a output for training. Supposedly the NET should predict current currancy rate USD/RUB
As a result, a got:

```
Training started with 2481 sets for training
First training input: { input: [ 21, 35, 11, 21, 21 ],
                        output: [ 0.30120481927710846 ] }
Training ended
Current USD value supposed to be 59.24262096102017 RUB per 1 USD

```
At this moment current Rate RUB/USD is 59.171 :)