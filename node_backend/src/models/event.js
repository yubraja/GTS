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
  cId:{
    type:String,
    required:true
  },
  start: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
    required: true,
  },
  allday:{
    type:Boolean,
    default:false
  }
});

const Event = mongoose.model("event", eventSchema);

module.exports = Event;
