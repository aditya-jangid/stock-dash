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

// export interface iMulti {
//   name: String,
//   series: [{name: String, value: Number}]
// }


// fetch('https://stock-dash-backend.herokuapp.com/api/chartDataby/ADBE')
// .then(res => res.json())
// .then((out) => {
//   console.log('Output: ', out);
// }).catch(err => console.error(err));

// export var arrADBE = resADBE;

export var arrADBE = [
  {
    "name": "Predicted",
    "series": [
      {
        "name": "2020-09-21",
        "value": 465.21
      },
      {
        "name": "2020-09-22",
        "value": 480
      },
      {
        "name": "2020-09-23",
        "value": 482.76
      },
      {
        "name": "2020-09-24",
        "value": 465.2
      },
      {
        "name": "2020-09-25",
        "value": 472
      }
    ]
  },
  {
    "name": "Actual",
    "series": [
      {
        "name": "2020-09-21",
        "value": 475.64
      },
      {
        "name": "2020-09-22",
        "value": 486.78
      },
      {
        "name": "2020-09-23",
        "value": 470.39
      },
      {
        "name": "2020-09-24",
        "value": 467.67
      },
      {
        "name": "2020-09-25",
        "value": 479.78
      }
    ]
  }
];

export var arrMA = [
  {
    "name": "predicted",
    "series": [
      {
        "name": "2020-08-23",
        "value": 123.5
      }
    ]
  },
  {
    "name": "actual",
    "series": [
      {
        "name": "2020-08-23",
        "value": 123.4
      }
    ]
  }
];
