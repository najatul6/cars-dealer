import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  deleteUser,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "@/firebase/firebase.config";
import useAxiosPublic from "@/hooks/useAxiosPublic";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const axiosPublic = useAxiosPublic();

  // Create User
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   Reset Password
  const resetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  //   Update User Profile
  const updateUserProfile = (name, photoURL) => {
    setLoading(true);
    const updateData = { displayName: name };
    if (photoURL) {
      updateData.photoURL = photoURL;
    }
    return updateProfile(auth.currentUser, updateData);
  };

  // Sign In User
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google Sign In
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Delete User
  const userDelete = () => {
    setLoading(true);
    return deleteUser(auth.currentUser);
  };

  // Check Token Expiry
  const isTokenExpired = (token) => {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const expiryTime = payload.exp * 1000; // Expiry time in milliseconds
      return Date.now() > expiryTime;
    } catch (error) {
      console.log(error);
      return true;
    }
  };

  // Listen for user auth state changes

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const token = localStorage.getItem("access-token");
        if (token && isTokenExpired(token)) {
          logOut();  // Automatically log out if the token is expired
        } else {
          // Handle case where token is valid, e.g., refresh the user session
          axiosPublic.post("/jwt", { email: currentUser.email }).then((res) => {
            if (res.data.token) {
              localStorage.setItem("access-token", res.data?.token);
              setLoading(false);
            }
          });
        }
      } else {
        localStorage.removeItem("access-token");
        setLoading(false);
      }
    });
    return () => {
      return unsubscribe();
    };
  }, [axiosPublic]);

  const authInfo = {
    loading,
    setLoading,
    user,
    createUser,
    signInUser,
    updateUserProfile,
    logOut,
    resetPassword,
    userDelete,
    googleSignIn,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;