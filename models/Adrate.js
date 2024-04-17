const mongoose = require("mongoose");

const AdRateSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    auto: true,
  },
  stt: {
    type: Number,
    required: false,
  },
  website: {
    type: String,
    required: false,
  },
  position: {
    type: String,
    required: false,
  },
  dimensions: {
    type: String,
    required: false,
  },
  platform: {
    type: String,
    required: false,
  },
  demo: {
    type: String,
    required: false,
  },
  buying_method: {
    type: String,
    required: false,
  },
  homepage: {
    type:  Number,
    required: false,
  },
  csr: {
    type:  mongoose.Mixed,
    required: false,
  },
  ctr: {
    type:  mongoose.Mixed,
    required: false,
  },
  est: {
    type:  mongoose.Mixed,
    required: false,
  },
  price: {
    type:  mongoose.Mixed,
    required: false,
  },
  subject: {
    type:  mongoose.Mixed,
    required: false,
  },
  week: {
    type:  mongoose.Mixed,
    required: false,
  },
  month: {
    type:  mongoose.Mixed,
    required: false,
  },
  quarter_year: {
    type:  mongoose.Mixed,
    required: false,
  },
  detailed_csr: {
    type:  mongoose.Mixed,
    required: false,
  },
  type: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("AdRate", AdRateSchema);
