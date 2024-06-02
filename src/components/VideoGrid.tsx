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

interface Video {
  id: string;
  title?: string;
  file?: string;
  genre?: string;
  image?: string;
  realeaseDate?: number;
}

const VideoGrid = () => {
  const [videoList, setVideoList] = useState<Video[]>([]);
  const videosCollectionRef = collection(db, "movies");
  const getVideoList = async () => {
    try {
      const data = await getDocs(videosCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setVideoList(filteredData);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getVideoList();
    console.log(videoList);
    console.log(videoList.length);
  }, []);
  return (
    <ul>
      {videoList.map((v) => (
        <li key={v.id}>{v.title}</li>
      ))}
    </ul>
  );
};

export default VideoGrid;
