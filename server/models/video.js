const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
  {
    name: { type : String },
    text: { type: String, required: true },
    replies : [this]
  },
  { timestamps: true }
);

const videoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String, required: true },
    comments: [commentSchema],
  },
  { timestamps: true }
);

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;
