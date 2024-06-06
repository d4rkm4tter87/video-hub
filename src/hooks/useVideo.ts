import { db } from "../services/firebase.ts";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

const useVideo = (id: string) => {
  const [video, setVideo] = useState<any>();

  const getVideo = async () => {
    try {
      const docRef = doc(db, "movies", id);
      const docSnap = await getDoc(docRef);

      setVideo(docSnap.data());
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getVideo();
  }, []);
  return { video };
};

export default useVideo;
