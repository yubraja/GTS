const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  driver: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  start: {
    type:String,
    required: true,
  },
});

const Event = mongoose.model("event", eventSchema);

module.exports = Event;