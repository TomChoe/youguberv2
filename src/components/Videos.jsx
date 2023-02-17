import { Stack, Box } from '@mui/material';
import { ChannelCard, VideoCard } from './';

const Videos = ({ videos, cat }) => {
  return (
    <Stack direction='row' flexWrap='wrap' justifyContent='start' gap={2} >
      {videos.map((vid, i) => (
        <Box key={i}>
          {vid.id.videoId && <VideoCard video={vid} />}
          {vid.id.channelId && <ChannelCard channelDetail={vid} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos