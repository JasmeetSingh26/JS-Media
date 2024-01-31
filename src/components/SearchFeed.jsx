import { useState, useEffect } from "react";
import { Typography, Box, Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import { Sidebar } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos } from "./";

const SearchFeed = ({ selectedCategory, setSelectedCategory }) => {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2, ml: '2px' }}>
        <Typography variant="h4" fontWeight={900} color="white" mb={3} >
          Search Results for <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
        </Typography>
        <Box display="flex" flexWrap="wrap">
          {videos && videos.map((video, index) => (
            <Box key={index} width="20%" p={1}>
              <Videos videos={[video]} />
            </Box>
          ))}
        </Box>
      </Box>
    </Stack>
  );
}

export default SearchFeed;
