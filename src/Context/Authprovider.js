import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

export const Authcontext = createContext();
const auth = getAuth(app);
const Authprovider = ({ children }) => {
  // when we need provider and use context children perametar helps us
  //  Authprovider used in index.js file for whole website

  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);

  //////////////observer when user login or create auto redirect///////////
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setuser(currentuser);
      setloading(false);
    });
    return () => unsubscribe();
  }, []);

  //////////////observer end///////////

  //////////////////////for create user/////////////

  const signup = (email, password) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //////////end create user////////////

  //////////////////////for user logout/////////////
  const logout = () => {
    setloading(true);
    return signOut(auth);
  };
  //////////////////////user logout/////////////

  //////////////////////when user upadat time/////////////

  const updateUser = (updateinfo) => {
    return updateProfile(auth.currentUser, updateinfo);
  };
  //////////////////////when user upadat time/////////////

  //////////////for login part///////////////////////////////////

  const login = (email, password) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //////////////end login part///////////////////////////////

  const authinfo = { signup, login, user, logout, updateUser, loading };

  return (
    <Authcontext.Provider value={authinfo}>{children}</Authcontext.Provider>
  );
};

export default Authprovider;
