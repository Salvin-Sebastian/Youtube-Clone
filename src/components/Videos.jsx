import React from "react";
import { Box } from "@mui/material";

import { ChannelCard, VideoCard } from "./";

const Videos = ({ videos, direction }) => {
  if(!videos?.length) return 'Loading...';
  
  if (direction === "column") {
    return (
      <Box display="flex" flexDirection="column" gap={2}>
        {videos.map((item, idx) => (
          <Box key={idx}>
            {item.id.videoId && <VideoCard video={item} /> }
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        ))}
      </Box>
    );
  }

  return (
    <Box 
      display="grid" 
      gridTemplateColumns={{
        xs: "1fr",
        sm: "repeat(2, 1fr)",
        md: "repeat(3, 1fr)"
      }}
      gap={2} 
      width="100%"
      maxWidth="1800px" /* To keep it constrained on ultra-wide monitors */
    >
      {videos.map((item, idx) => (
        <Box key={idx} display="flex" justifyContent="center">
          {item.id.videoId && <VideoCard video={item} /> }
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Box>
  );
}

export default Videos;
