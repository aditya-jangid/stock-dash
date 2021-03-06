export interface iStock {
  name: String,
  symbol: String,
  logo: String,
  timeseries: [{ date: Date, open: Number, close: Number, predicted: Number }],
  technical: {
    stddev: Number,
    sma: Number,
    pavg: Number,
    ret: Number,
  },
  news: [{ headline: String, content: String }],
  facts: []
}

export interface iReview {
  review: String,
  title: String
}