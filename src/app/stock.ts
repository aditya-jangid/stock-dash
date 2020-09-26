export interface iStock {
    name: String,
    symbol: String,
    logo: String,
    timeseries: [{date: Date, open: Number, close: Number, predicted: Number}],
    technical: {
      stddev: Number,
      sma: Number
    },
    news: [],
    facts: []
}