import { db } from "../services/firebase.ts";
import { getDocs, collection, query, orderBy, limit } from "firebase/firestore";
import { useEffect, useState } from "react";

export interface Video {
  id: string;
  title?: string;
  file?: string;
  genre?: string;
  image?: string;
  releaseDate?: number;
}

const useVideos = (updated: number) => {
  console.log(updated);
  const [videoList, setVideoList] = useState<Video[]>([]);
  const [isLoading, setLoading] = useState(false);
  const videosCollectionRef = collection(db, "movies");
  const getVideoList = async () => {
    try {
      //const q = query(videosCollectionRef, orderBy("releaseDate"));
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
  }, [updated]);
  return { videoList, isLoading };
};

export default useVideos;
