import { SimpleGrid } from "@chakra-ui/react";
import useVideos from "../hooks/useVideos";
import VideoCard from "./VideoCard";
import VideoCardSkeleton from "./VideoCardSkeleton";
import genres from "../data/genres";
import dates from "../data/dates";
import { db } from "../services/firebase.ts";
import { HStack, Button, Input, Select } from "@chakra-ui/react";
import { collection, addDoc, deleteDoc, doc } from "firebase/firestore";
import { useState } from "react";

interface Props {
  selectedGenre: string | null;
  sortOrder: string | null;
}

const VideoGrid = ({ selectedGenre, sortOrder }: Props) => {
  const [u, setU] = useState<number>(0);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const { videoList, isLoading } = useVideos(selectedGenre, sortOrder, u);

  const [newMovieTitle, setNewMovieTitle] = useState("");
  const [newMovieFile, setNewMovieFile] = useState("");
  const [newMovieImage, setNewMovieImage] = useState("");
  const [newReleaseDate, setNewReleaseDate] = useState(0);
  const [newGenre, setNewGenre] = useState("");

  const moviesCollectionRef = collection(db, "movies");

  const onSubmitMovie = async () => {
    console.log(newMovieTitle);
    try {
      await addDoc(moviesCollectionRef, {
        title: newMovieTitle,
        file: newMovieFile,
        image: newMovieImage,
        releaseDate: newReleaseDate,
        genre: newGenre,
      });
      setU(u + 1);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteMovie = async (id: string) => {
    const movieDoc = doc(db, "movies", id);
    await deleteDoc(movieDoc);
    setU(u + 1);
  };

  return (
    <>
      <HStack marginLeft={3}>
        <Input
          width="small"
          placeholder="Title"
          onChange={(e) => setNewMovieTitle(e.target.value)}
        />
        <Input
          width="small"
          placeholder="Video"
          onChange={(e) => setNewMovieFile(e.target.value)}
        />
        <Input
          width="small"
          placeholder="Image"
          onChange={(e) => setNewMovieImage(e.target.value)}
        />
        <Select
          width="small"
          onChange={(e) => setNewReleaseDate(Number(e.target.value))}
          placeholder="Release Date"
        >
          {dates.map((date) => (
            <option key={date.year} value={date.year}>
              {date.year}
            </option>
          ))}
        </Select>
        <Select
          width="small"
          onChange={(e) => setNewGenre(e.target.value)}
          placeholder="Genre"
        >
          {genres.map((genre) => (
            <option key={genre.name} value={genre.name}>
              {genre.name}
            </option>
          ))}
        </Select>
        <Button marginBottom="5px" onClick={onSubmitMovie}>
          Add Movie
        </Button>
      </HStack>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={6}
      >
        {isLoading && skeletons.map((s) => <VideoCardSkeleton key={s} />)}
        {videoList !== null &&
          videoList.map((v) => (
            <VideoCard
              key={v.id}
              video={v}
              deleteMovie={(id) => deleteMovie(id)}
            />
          ))}
      </SimpleGrid>
    </>
  );
};

export default VideoGrid;
