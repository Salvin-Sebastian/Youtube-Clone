import React from 'react'
import { Link } from "react-router-dom"; 
import { Typography, Card, CardContent, CardMedia, Box, Avatar } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle, demoProfilePicture } from "../utils/constants";

const VideoCard = ({ video: { id: { videoId }, snippet }, layout }) => {
  const isHorizontal = layout === "horizontal";

  return (
    <Card sx={{ 
      width: '100%', 
      boxShadow: "none", 
      borderRadius: 0, 
      backgroundColor: "transparent",
      display: isHorizontal ? "flex" : "block",
      flexDirection: isHorizontal ? "row" : "column",
      gap: isHorizontal ? 1.5 : 0
    }}>
      <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKmM` } style={{ flexShrink: 0 }}>
        <Box sx={{ position: 'relative' }}>
          <CardMedia 
            component="img"
            image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} 
            alt={snippet?.title} 
            sx={{ 
              width: isHorizontal ? '168px' : '100%', 
              height: isHorizontal ? '94px' : 'auto', 
              aspectRatio: isHorizontal ? 'unset' : '16/9',
              objectFit: 'cover',
              borderRadius: '12px' 
            }} 
          />
          <Typography sx={{
            position: 'absolute',
            bottom: '8px',
            right: '8px',
            backgroundColor: 'rgba(0,0,0,0.8)',
            color: 'white',
            padding: '2px 4px',
            borderRadius: '4px',
            fontSize: '12px',
            fontWeight: 500
          }}>
            10:00
          </Typography>
        </Box>
      </Link>
      <CardContent sx={{ backgroundColor: "transparent", paddingX: 0, paddingY: isHorizontal ? 0 : 1.5, pb: isHorizontal ? 0 : '12px !important' }}>
        <Box display="flex" flexDirection="row" gap={1.5} alignItems="flex-start">
          {!isHorizontal && (
            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} style={{ textDecoration: 'none', flexShrink: 0 }}>
              <Avatar src={demoProfilePicture} sx={{ width: 36, height: 36 }} />
            </Link>
          )}
          <Box display="flex" flexDirection="column" overflow="hidden">
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } style={{ textDecoration: 'none' }}>
              <Typography variant="subtitle1" fontWeight="500" color="#FFF" lineHeight="1.2" sx={{ 
                display: '-webkit-box', 
                WebkitLineClamp: 2, 
                WebkitBoxOrient: 'vertical', 
                overflow: 'hidden',
                mb: '4px',
                fontSize: isHorizontal ? '14px' : '16px'
              }}>
                {snippet?.title || demoVideoTitle}
              </Typography>
            </Link>
            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} style={{ textDecoration: 'none' }}>
              <Typography variant="subtitle2" color="#aaaaaa" sx={{ display: 'flex', alignItems: 'center', fontSize: isHorizontal ? '12px' : '14px' }}>
                {snippet?.channelTitle || demoChannelTitle}
                <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
              </Typography>
            </Link>
            <Typography variant="caption" color="#aaaaaa" sx={{ fontSize: isHorizontal ? '12px' : '12px' }}>
              100K views • 2 days ago
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
