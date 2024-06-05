import { db } from "../services/firebase.ts";
import { getDocs, collection, query, orderBy, where } from "firebase/firestore";
import { useEffect, useState } from "react";

export interface Video {
  id: string;
  title?: string;
  file?: string;
  genre?: string;
  image?: string;
  releaseDate?: number;
}

const useVideos = (
  selectedGenre: string | null,
  sortOrder: string | null,
  updated: number
) => {
  const [videoList, setVideoList] = useState<Video[]>([]);
  const [isLoading, setLoading] = useState(false);
  const videosCollectionRef = collection(db, "movies");
  const getVideoList = async () => {
    try {
      const q = query(
        videosCollectionRef,
        where("genre", genreOperator(selectedGenre), getGenre(selectedGenre)),
        orderBy(getSortType(sortOrder), getSortDirection(sortOrder))
      );

      const data = await getDocs(q);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setVideoList(filteredData);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
  useEffect(() => {
    setLoading(true);
    getVideoList();
  }, [selectedGenre, sortOrder, updated]);

  const genreOperator = (selectedGenre: string | null) => {
    if (selectedGenre === null || selectedGenre === "All") return "!=";
    else return "==";
  };
  const getGenre = (selectedGenre: string | null) => {
    if (selectedGenre === null || selectedGenre === "All") return "null";
    else return selectedGenre;
  };
  const getSortType = (sortOrder: string | null) => {
    switch (sortOrder) {
      case "Name (asc.)":
        return "title";
      case "Name (desc.)":
        return "title";
      case "Date (asc.)":
        return "releaseDate";
      case "Date (desc.)":
        return "releaseDate";
      case "Genre (asc.)":
        return "genre";
      case "Genre (desc.)":
        return "genre";
      default:
        return "releaseDate";
    }
  };
  const getSortDirection = (sortOrder: string | null) => {
    switch (sortOrder) {
      case "Name (asc.)":
        return "asc";
      case "Name (desc.)":
        return "desc";
      case "Date (asc.)":
        return "asc";
      case "Date (desc.)":
        return "desc";
      case "Genre (asc.)":
        return "asc";
      case "Genre (desc.)":
        return "desc";
      default:
        return "desc";
    }
  };

  return { videoList, isLoading };
};

export default useVideos;
