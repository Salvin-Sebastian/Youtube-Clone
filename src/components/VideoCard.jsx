import React from 'react'
import { Link } from "react-router-dom"; 
import { Typography, Card, CardContent, CardMedia, Box, Avatar } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle, demoProfilePicture } from "../utils/constants";

const VideoCard = ({ video: { id: { videoId }, snippet } }) => (
  <Card sx={{ width: '100%', maxWidth: '360px', boxShadow: "none", borderRadius: 0, backgroundColor: "transparent" }}>
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKmM` }>
      <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title} 
        sx={{ width: '100%', height: 200, borderRadius: '12px' }} 
      />
    </Link>
    <CardContent sx={{ backgroundColor: "transparent", paddingX: 0, paddingY: 1.5 }}>
      <Box display="flex" flexDirection="row" gap={1.5}>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} style={{ textDecoration: 'none' }}>
          <Avatar src={demoProfilePicture} sx={{ width: 36, height: 36 }} />
        </Link>
        <Box display="flex" flexDirection="column">
          <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } style={{ textDecoration: 'none' }}>
            <Typography variant="subtitle1" fontWeight="500" color="#FFF" lineHeight="1.2" sx={{ 
              display: '-webkit-box', 
              WebkitLineClamp: 2, 
              WebkitBoxOrient: 'vertical', 
              overflow: 'hidden',
              mb: '4px'
            }}>
              {snippet?.title || demoVideoTitle}
            </Typography>
          </Link>
          <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} style={{ textDecoration: 'none' }}>
            <Typography variant="subtitle2" color="#aaaaaa" sx={{ display: 'flex', alignItems: 'center' }}>
              {snippet?.channelTitle || demoChannelTitle}
              <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
            </Typography>
          </Link>
          <Typography variant="caption" color="#aaaaaa">
            100K views • 2 days ago
          </Typography>
        </Box>
      </Box>
    </CardContent>
  </Card>
);

export default VideoCard;
