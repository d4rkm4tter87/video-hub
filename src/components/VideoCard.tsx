import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Image,
} from "@chakra-ui/react";
import { Video } from "../hooks/useVideos";

interface Props {
  video: Video;
  deleteMovie: (id: string) => void;
}

const VideoCard = ({ video, deleteMovie }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <CardHeader height="200px" padding={1}>
        <Image src={video.image} />
      </CardHeader>

      <CardBody>
        <Box display="flex" alignItems="baseline">
          <Heading fontSize="2xl">
            {video.title} ({video.releaseDate})
          </Heading>
        </Box>
        <Heading fontSize="1xl">
          Genre: {video.genre}{" "}
          <Button onClick={() => deleteMovie(video.id)} variant="link">
            x
          </Button>
        </Heading>
      </CardBody>
    </Card>
  );
};

export default VideoCard;
