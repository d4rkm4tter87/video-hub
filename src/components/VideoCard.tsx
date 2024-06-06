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
import { Link } from "react-router-dom";

interface Props {
  video: Video;
  deleteMovie: (id: string) => void;
}

const VideoCard = ({ video, deleteMovie }: Props) => {
  return (
    <Card
      borderRadius={10}
      overflow="hidden"
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .15s ease-in",
      }}
    >
      <CardHeader height="200px" padding={1}>
        <Image src={video.image} />
      </CardHeader>

      <CardBody>
        <Box display="flex" alignItems="baseline">
          <Link to={"/videos/" + video.id}>
            <Heading fontSize="2xl">
              {video.title} ({video.releaseDate})
            </Heading>
          </Link>
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
