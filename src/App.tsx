import logo from './logo.svg';
import './App.css';
import React, { SyntheticEvent, useEffect, useRef, useState } from 'react';
import { GoogleLogin, googleLogout, useGoogleLogin } from '@react-oauth/google'
import ApiCalendar from "react-google-calendar-api";
import { sign } from 'crypto';
import axios from 'axios';
import { config } from 'yargs';

function App() {
  const [user, setUser] = useState<any>([]);
  const [profile, setProfile] = useState<any>(null);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log('Login Failed:', error)
  });
  useEffect(
    () => {
      if (user) {
        axios.get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: 'application/json'
          }
        }).then((res: any) => { 
          console.log(res)
          setProfile(res.data) })
          .catch((e: any) => console.log(e))
          
      }
    }, [user]
  );
  const logOut = () => {
    googleLogout();
    setProfile(null);
};


  const responseMessage = (response: any) => {

    console.log("YYYEEEEEYYYY")
  };

  const clie = {
    "web":
    {
      "client_id": "852666352240-jd39nb9m8fts8r8bkl4r4238l357o4bq.apps.googleusercontent.com",
      "project_id": "test-calendar-api-383609",
      "auth_uri": "https://accounts.google.com/o/oauth2/auth",
      "token_uri": "https://oauth2.googleapis.com/token",
      "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
      "client_secret": "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",
      "redirect_uris": ["http://localhost:3000/"],
      "javascript_origins": ["http://localhost",
        "http://localhost:3000"]
    }
  }
/*
  (
        <div>
            <h2>React Google Login</h2>
            <br />
            <br />
            {profile ? (
                <div>
                    <img src={profile.picture} alt="user image" />
                    <h3>User Logged in</h3>
                    <p>Name: {profile.name}</p>
                    <p>Email Address: {profile.email}</p>
                    <br />
                    <br />
                    <button onClick={logOut}>Log out</button>
                </div>
            ) : (
                <button onClick={() => login()}>Sign in with Google 🚀 </button>
            )}
        </div>
    );


*/





  return (
    <>
      <h1>React Google Login</h1>
      <br />
      <br />
     {/*  <GoogleLogin onSuccess={responseMessage} /> */}
     {profile ? (
                <div>
                    <img src={profile.picture} alt="user image" />
                    <h3>User Logged in</h3>
                    <p>Name: {profile.name}</p>
                    <p>Email Address: {profile.email}</p>
                    <br />
                    <br />
                    <button onClick={logOut}>Log out</button>
                </div>
            ) : (
                <button onClick={() => login()}>Sign in with Google 🚀 </button>
            )}

      
    </>
  );
}

export default App;
