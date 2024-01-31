import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
import { useState } from "react";

import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed } from './components';

const App = () => {
  // Define your state outside JSX
  const [selectedCategory, setSelectedCategory] = useState("New");

  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#000' }}>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Feed selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />} />
          <Route path='/video/:id' element={<VideoDetail />} />
          <Route path='/channel/:id' element={<ChannelDetail />} />
          <Route path='/search/:searchTerm' element={<SearchFeed selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
