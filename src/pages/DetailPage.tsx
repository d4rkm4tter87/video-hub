import { useParams } from "react-router-dom";
import useVideo from "../hooks/useVideo";
import { Heading, Text } from "@chakra-ui/react";

const DetailPage = () => {
  const { id } = useParams();
  const v = useVideo(id!);

  return (
    <>
      {v.video && (
        <>
          <Heading>
            {v.video.title} ({v.video.releaseDate})
          </Heading>
          <Text>Genre: {v.video.genre}</Text>
          <video
            src={v.video.file}
            style={{
              width: "100%",
            }}
            controls
          />
        </>
      )}
    </>
  );
};

export default DetailPage;
