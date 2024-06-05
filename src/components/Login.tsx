import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Image,
} from "@chakra-ui/react";
import { useRef, useState, useEffect } from "react";
import { BsSearch, BsPersonPlusFill } from "react-icons/bs";
import { auth, googleProvider } from "../services/firebase";
import gSignIn from "../assets/signInWithGoogle.png";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signedIn, setSignedIn] = useState(false);
  // console.log(auth?.currentUser?.email);
  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSignedIn(true);
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      // localStorage.setItem('authToken', auth);
      setSignedIn(true);
    } catch (err) {
      console.error(err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setSignedIn(false);
    } catch (err) {
      console.error(err);
    }
  };
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      setSignedIn(true);
    } else {
      setSignedIn(false);
    }
  });

  return (
    <>
      {!signedIn && (
        <>
          <Input
            width="small"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            width="small"
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={signIn}>Sign In</Button>
          <Button onClick={signInWithGoogle}>
            <Image src={gSignIn} boxSize={7} />
          </Button>
        </>
      )}
      {signedIn && (
        <>
          Signed in as {auth?.currentUser?.email}
          <Button onClick={logout}>Logout</Button>
        </>
      )}
    </>
  );
};

export default Login;
