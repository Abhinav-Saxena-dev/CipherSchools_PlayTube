const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Routes
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Connect to MongoDB database
mongoose.connect("mongodb+srv://root:root@videostream.cejxerj.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB database');
}).catch(err => {
  console.error('Error connecting to MongoDB database:', err.message);
});


const videosRouter = require('./api/video');

// Use API routes
app.use('/api', videosRouter);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
