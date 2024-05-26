import { useEffect, useState } from "react";
import { createContext } from "react";
import { auth } from "../src/Firebase/firebase.config.js";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [routeState, setRouteState] = useState("/");
  const [componentRender, setComponentRender] = useState(false);

  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (name, imgUrl) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: imgUrl,
    })
      .then(() => {
        let temp = componentRender;
        setComponentRender(!temp);
        toast.success("User Profile updated successfully", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage, {
          position: "bottom-right",
        });
      });
  };

  const logInUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        axios.post("https://bikolpo.vercel.app/jwt", userCredential, {
          withCredentials: true,
        });
        const user = userCredential.user;
        let temp = componentRender;
        setComponentRender(!temp);
        toast.success("Successfully logged in!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
        });
      })
      .catch((error) => {
        const errorCode = error.code;

        const errorMessage = error.message;
        toast.error(errorMessage, {
          position: "bottom-right",
        });
      });
  };

  const googleProvider = new GoogleAuthProvider();
  const GoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        axios.post("https://bikolpo.vercel.app/jwt", result, {
          withCredentials: true,
        });
        let temp = componentRender;
        setComponentRender(!temp);
        const loginUser = result.user;
        setUser(loginUser);
        toast.success("Successfully logged in!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage, {
          position: "bottom-right",
        });
      });
  };

  const githubProvider = new GithubAuthProvider();
  const githubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        axios.post("https://bikolpo.vercel.app/jwt", result, {
          withCredentials: true,
        });
        let temp = componentRender;
        setComponentRender(!temp);
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const githubuser = result.user;
        setUser(githubuser);
        toast.success("Successfully logged in!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GithubAuthProvider.credentialFromError(error);
        toast.error(errorMessage, {
          position: "bottom-right",
        });
      });
  };

  const logOut = () => {
    setLoading(false);
    let temp = componentRender;
    setComponentRender(!temp);
    toast.success("Successfully logged out from this device!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
    });
    axios.post(
      "https://bikolpo.vercel.app/logout",
      {},
      {
        withCredentials: true,
      }
    );
    // document.cookie =
    //   "token" + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    return signOut(auth);
  };

  const authInfo = {
    registerUser,
    logInUser,
    loading,
    logOut,
    user,
    setUser,
    GoogleSignIn,
    githubSignIn,
    routeState,
    setRouteState,
    updateUserProfile,
    setComponentRender,
    componentRender,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      } else {
        setLoading(false);
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [componentRender]);

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
