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
            {item.id.videoId && <VideoCard video={item} layout="horizontal" /> }
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
      gap={{ xs: 2, sm: 2, md: 3 }} 
      columnGap={{ xs: 2, sm: 2, md: 3 }}
      rowGap={{ xs: 4, sm: 4, md: 5 }}
      width="100%"
      maxWidth="1800px"
      mx="auto"
    >
      {videos.map((item, idx) => (
        <React.Fragment key={idx}>
          {item.id.videoId && <VideoCard video={item} /> }
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </React.Fragment>
      ))}
    </Box>
  );
}

export default Videos;
