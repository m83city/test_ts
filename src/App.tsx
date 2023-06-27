import logo from './logo.svg';
import './App.css';
import React, { Component, createContext, useEffect, useRef, useState } from 'react';
import WebViewer from '@pdftron/webviewer';
import { LoadDocument } from './LoadDocument';
import { WebViewerComponent } from './WebViewerComponent';


export const WebViewerContext = createContext({});

function App() {
  const viewer = useRef(null);
  const searchParam = ".continued from page 1"
  const [file, setFile] = useState<any>("");

  const [instance, setInstance] = useState();

  const debug = () => {

  }

  return (
    <WebViewerContext.Provider
    value={{instance, setInstance}}
    >
      <LoadDocument/>
      <WebViewerComponent/>





    </WebViewerContext.Provider>
  );
}

export default App;
