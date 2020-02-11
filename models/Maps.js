const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const MapSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  tileMap: {
    type: Array,
    required: true
  },
  creator: {
    type: String,
    required: true
  },
  editedBy: {
    type: String,
    required: false
  },
  private: {
    type: Boolean,
    required: true
  },
  theme: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Maps = mongoose.model("maps", MapSchema);
