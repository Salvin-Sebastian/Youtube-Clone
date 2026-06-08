import React, { useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos, Sidebar } from "./";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setVideos(null);
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
      .catch((err) => console.error(err));
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: "column" }}>
      <Box>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2, display: 'flex', justifyContent: 'center' }}>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
