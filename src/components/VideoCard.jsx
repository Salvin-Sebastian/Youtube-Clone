import React from 'react'
import { Link } from "react-router-dom"; 
import { Typography, Card, CardContent, CardMedia, Box, Avatar } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import MoreVertIcon from '@mui/icons-material/MoreVert';

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
      gap: isHorizontal ? 1.5 : 0,
      cursor: "pointer",
      transition: 'transform 0.2s ease-out',
      '&:hover': {
        transform: 'translateY(-2px)'
      },
      '&:hover .video-thumbnail': {
        transform: 'scale(1.05)'
      },
      '&:hover .more-icon': {
        opacity: 1
      }
    }}>
      <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKmM` } style={{ flexShrink: 0 }}>
        <Box sx={{ position: 'relative', overflow: 'hidden', borderRadius: '12px', mb: isHorizontal ? 0 : 1.5 }}>
          <CardMedia 
            className="video-thumbnail"
            component="img"
            image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} 
            alt={snippet?.title} 
            sx={{ 
              width: isHorizontal ? '168px' : '100%', 
              height: isHorizontal ? '94px' : 'auto', 
              aspectRatio: isHorizontal ? 'unset' : '16/9',
              objectFit: 'cover',
              transition: 'transform 0.3s ease-out'
            }} 
          />
          <Typography sx={{
            position: 'absolute',
            bottom: '8px',
            right: '8px',
            backgroundColor: 'rgba(0,0,0,0.8)',
            color: 'white',
            padding: '2px 6px',
            borderRadius: '4px',
            fontSize: '12px',
            fontWeight: 700
          }}>
            12:45
          </Typography>
        </Box>
      </Link>
      <CardContent sx={{ backgroundColor: "transparent", paddingX: 0, paddingY: 0, pb: '0 !important' }}>
        <Box display="flex" flexDirection="row" gap={1.5} alignItems="flex-start">
          {!isHorizontal && (
            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} style={{ textDecoration: 'none', flexShrink: 0 }}>
              <Avatar src={demoProfilePicture} sx={{ width: 40, height: 40 }} />
            </Link>
          )}
          <Box display="flex" flexDirection="column" overflow="hidden" flex={1}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } style={{ textDecoration: 'none' }}>
              <Typography fontWeight="500" color="#FFF" lineHeight="1.3" sx={{ 
                display: '-webkit-box', 
                WebkitLineClamp: 2, 
                WebkitBoxOrient: 'vertical', 
                overflow: 'hidden',
                fontSize: '14px'
              }}>
                {snippet?.title || demoVideoTitle}
              </Typography>
            </Link>
            <Box sx={{ mt: '4px' }}>
              <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} style={{ textDecoration: 'none' }}>
                <Typography color="#aaaaaa" sx={{ display: 'flex', alignItems: 'center', fontSize: '12px' }}>
                  {snippet?.channelTitle || demoChannelTitle}
                  <CheckCircleIcon sx={{ fontSize: "14px", color: "#aaaaaa", ml: "4px" }} />
                </Typography>
              </Link>
              <Typography color="#aaaaaa" sx={{ fontSize: '12px' }}>
                45K views • 2 days ago
              </Typography>
            </Box>
          </Box>
          {/* More Vert Icon */}
          <Box className="more-icon" sx={{ opacity: 0, transition: 'opacity 0.2s ease-out', mt: '-4px' }}>
            <MoreVertIcon sx={{ color: '#aaaaaa', cursor: 'pointer', fontSize: '20px' }} />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
