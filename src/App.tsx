import logo from './logo.svg';
import './App.css';
import React, { Component, useEffect, useRef } from 'react';
import WebViewer from '@pdftron/webviewer';
import { ComponentDef } from "./ComponentDef"


function App() {
  const viewer = useRef<any>(null);
  // const debug = () => {
  //   WebViewer(
  //     {
  //       path: '/webviewer/lib',
  //       initialDoc: './sample.pdf',
  //     },
  //     viewer.current,
  //   ).then((instance) => {
  //     const { documentViewer } = instance.Core;

  //   });
  // }

  return (
    <>
      <div className="MyComponent">
        <ComponentDef />
      </div>

    </>
  );
}

export default App;
