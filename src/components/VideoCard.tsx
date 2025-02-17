import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Image,
} from "@chakra-ui/react";
import { Video } from "../hooks/useVideos";
import { Link } from "react-router-dom";
import { useState } from "react";

interface Props {
  video: Video;
}

const VideoCard = ({ video }: Props) => {
  const [showImg, setShowImg] = useState(true);
  const [showVideo, setShowVideo] = useState(false);
  const hoverImgIn = () => {
    setShowImg(false);
    setShowVideo(true);
  };
  const hoverImgOut = () => {
    setShowImg(true);
    setShowVideo(false);
  };
  return (
    <Card
      borderRadius={10}
      overflow="hidden"
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .15s ease-in",
      }}
    >
      <CardHeader
        height="200px"
        padding={1}
        onMouseOver={hoverImgIn}
        onMouseLeave={hoverImgOut}
      >
        <Link to={"/videos/" + video.id}>
          {showImg && <Image src={video.image || ""} />}
          {showVideo && (
            <video src={video.file || ""} autoPlay={true} muted={true} />
          )}
        </Link>
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
          {/* <Button onClick={() => deleteMovie(video.id)} variant="link">
            x
          </Button> */}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default VideoCard;
