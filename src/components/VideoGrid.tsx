import { SimpleGrid } from "@chakra-ui/react";
import useVideos from "../hooks/useVideos";
import VideoCard from "./VideoCard";
import VideoCardSkeleton from "./VideoCardSkeleton";

interface Props {
  selectedGenre: string | null;
  sortOrder: string | null;
}

const VideoGrid = ({ selectedGenre, sortOrder }: Props) => {
  const { videoList, isLoading } = useVideos(selectedGenre, sortOrder);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={6}
      >
        {isLoading && skeletons.map((s) => <VideoCardSkeleton key={s} />)}
        {videoList.map((v) => (
          <VideoCard key={v.id} video={v} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default VideoGrid;
