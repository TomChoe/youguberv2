import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography, Box, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Video } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const VideoDetail = () => {
  const { id } = useParams();

  const [videoDetail, setVideoDetail] = useState(null);
  
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then(data => setVideoDetail(data.items[0]))
      .catch(err => console.warn(err))
  }, [id]);
  

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: 'column', md: 'row'}}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px'}}>
          <iframe 
              src={`https://www.youtube.com/watch?v=${id}`}
              className='react-player'
              controls
            ></iframe>
            {/* <ReactPlayer 
              url={`https://www.youtube.com/watch?v=${id}`}
              className='react-player'
              controls
              config={{
                headers: {
                  "Content-Type": "text/html",
                  'Access-Control-Allow-Origin':'*',
                  'Access-Control-Allow-Methods':'GET',
                  'Access-Control-Allow-Headers':'text/html'
                }
              }}
            /> */}
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail