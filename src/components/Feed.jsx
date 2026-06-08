import React, { useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos, Sidebar, MiniSidebar } from "./";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setVideos(null);
    const searchQuery = selectedCategory === "All" ? "New" : selectedCategory;
    fetchFromAPI(`search?part=snippet&q=${searchQuery}`)
      .then((data) => setVideos(data.items))
      .catch((err) => console.error(err));
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      
      {/* Left side: Mini Sidebar */}
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <MiniSidebar />
      </Box>

      {/* Right side: Categories and Video Grid */}
      <Stack sx={{ flexDirection: "column", flex: 2, overflow: "hidden" }}>
        <Box>
          <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        </Box>

        <Box p={2} sx={{ overflowY: "auto", height: "calc(100vh - 120px)", display: 'flex', justifyContent: 'center' }}>
          <Videos videos={videos} />
        </Box>
      </Stack>
      
    </Stack>
  );
};

export default Feed;
