import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Header from './components/Header';
import VideosList from './components/VideosList';
import Video from './components/video';
import Comments from './components/Comments';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const { data } = await axios.get('http://localhost:5000/api/videos');
      setVideos(data);
    };

    fetchVideos();
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
        <Route  path="/" element = {<VideosList videos={videos} />}/>
        <Route  path="/video/:id" element = {<Video />}/>
        <Route  path="/video/:id/comments" element = {<Comments />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
