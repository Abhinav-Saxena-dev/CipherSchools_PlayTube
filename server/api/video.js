const express = require('express');
const router = express.Router();
const Video = require("./../models/video");

router.get('/videos', async (req, res) => {
  try {
    const videos = await Video.find().sort({ createdAt: -1 });
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/videos', async (req, res) => {
  const video = new Video({

    title: req.body.title,
    description: req.body.description,
    url: req.body.url,
    comments: []
  });

  try {
    const newVideo = await video.save();
    res.status(201).json(newVideo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
  
router.get('/:id', async (req, res) => {
    try {
      const video = await Video.findById(req.params.id);
      res.json(video);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  router.post('/video/:id/comments', async (req, res) => {
    try {
      const video = await Video.findById(req.params.id);
      const newComment = { text: req.body.text, name : req.body.name };
      video.comments.push(newComment);
      await video.save();
      res.json(video);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
//get
async function getVideo(req, res, next) {
  let video;
  try {
    video = await Video.findById(req.params.id);
    if (video == null) {
      return res.status(404).json({ message: 'Cannot find video' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.video = video;
  next();
}

module.exports = router;
