import React, { useState } from "react";
import { getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../Firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
const Login = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const googleprovider = new GoogleAuthProvider();
  const githubprovider = new GithubAuthProvider();
  const googlehandlesignIn = () => {
    signInWithPopup(auth, googleprovider)
      .then((result) => {
        const loogedInUser = result.user;
        console.log(loogedInUser);
        setUser(loogedInUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const handleSignout = () => {
    signOut(auth)
      .then((result) => {
        console.log(result);
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGithubSignin =() => {
    signInWithPopup(auth, githubprovider)
    .then((result) => {
      const loogedInUser = result.user;
      console.log(loogedInUser);
      setUser(loogedInUser);
    })
    .catch((error) => {
      console.log("error", error.message);
    });
  }

  return (
    <div>
      {/* user ? logout : sign in   */}
      {user ? (
        <button onClick={handleSignout}>Sign Out</button>
      ) : (
        <div>
          <button onClick={googlehandlesignIn}>Google Login</button>
          <button onClick={handleGithubSignin}>Github</button>
        </div>
      )}
     { user &&
     <div>
        <h2>User Name: {user?.displayName}</h2>
        <p>{user?.email}</p>
        <img className="items-center" src={user?.photoURL} alt="" />
      </div>}
    </div>
  );
};

export default Login;
