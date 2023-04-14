import logo from './logo.svg';
import './App.css';
import React, { SyntheticEvent, useRef, useState } from 'react';
import { GoogleLogin } from '@react-oauth/google'
import ApiCalendar from "react-google-calendar-api";
import { sign } from 'crypto';



function App() {
  const [clID, setClID] = useState('');



  const responseMessage = (response: any) => {
    console.log(response);
    setClID(response.clientId)
    return response
  }
  const errorMessage = () => {
    console.log('error');
  }
  const config = {
    clientId: '852666352240-5tjdjq9bu6ikao8s2jnru023d5u5qjhi.apps.googleusercontent.com',
    apiKey: "AIzaSyBARflBn10Og_e-dbUlJwXujVmt1HbCbFA",
    scope: "https://www.googleapis.com/auth/calendar",
    discoveryDocs: [
      "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
    ],
  };
  const apiCalendar = new ApiCalendar(config);
  const handleItemClick = (event: SyntheticEvent<any>, name: string) => {
    if (name === 'sign-in') {
      apiCalendar.handleAuthClick()
      //apiCalendar.handleAuthClick()
    } else if (name === 'sign-out') {
      apiCalendar.handleSignoutClick();
    }
  }

  return (
    <>
      <h1>React Google Login</h1>
      <br />
      <br />
      <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
      <button onClick={(e) => { handleItemClick(e, "sign-in") }} >logCALENDAR</button>
    </>
  );
}

export default App;
