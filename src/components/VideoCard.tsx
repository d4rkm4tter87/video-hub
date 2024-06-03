import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Image,
} from "@chakra-ui/react";
import { Video } from "../hooks/useVideos";

interface Props {
  video: Video;
}

const VideoCard = ({ video }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <CardHeader height="200px" padding={1}>
        <Image src={video.image} />
      </CardHeader>

      <CardBody>
        <Box display="flex" alignItems="baseline">
          <Heading fontSize="2xl">{video.title}</Heading>
        </Box>
      </CardBody>
    </Card>
  );
};

export default VideoCard;
