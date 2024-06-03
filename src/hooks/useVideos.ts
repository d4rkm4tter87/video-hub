import { db } from "../services/firebase.ts";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { useEffect, useState } from "react";

export interface Video {
  id: string;
  title?: string;
  file?: string;
  genre?: string;
  image?: string;
  realeaseDate?: number;
}

const useVideos = (selectedGenre: string | null) => {
  console.log(selectedGenre);
  const [videoList, setVideoList] = useState<Video[]>([]);
  const [isLoading, setLoading] = useState(false);
  const videosCollectionRef = collection(db, "movies");
  const getVideoList = async () => {
    try {
      const data = await getDocs(videosCollectionRef);
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
    console.log(videoList);
    console.log(videoList.length);
  }, []);
  return { videoList, isLoading };
};

export default useVideos;
