import React, { useEffect, useState } from 'react';
import { Select } from "antd"
import 'antd/dist/antd.css';
import { listLanguages } from "./comsponent/listLanguage"

function App() {


let object:any = {
  "botId": "8e7569c6-4232-4783-9ce9-4778ecf5ce43",
  "callbacks": [
      [
          {
              "callbackQueryData": "1mFfy8UTD",
              "label": {
                  "en": "New button",
                  "af": "New button"
              },
              "method": {
                  "value": "",
                  "property": "",
                  "linkUrl": "",
                  "inside": null,
                  "type": "NEXT_PAGE",
                  "nextId": "",
                  "validation": null,
                  "calendar": null,
                  "condition": null,
                  "api": null,
                  "pagination": null
              }
          },
          {
              "callbackQueryData": "Og20zYw0c",
              "label": {
                  "en": "New button",
                  "af": "New button"
              },
              "method": {
                  "value": "",
                  "property": "",
                  "linkUrl": "",
                  "inside": null,
                  "type": "NEXT_PAGE",
                  "nextId": "",
                  "validation": null,
                  "calendar": null,
                  "condition": null,
                  "api": null,
                  "pagination": null
              }
          }
      ]
  ],
  "name": "Start Page",
  "createdDate": null,
  "isTemplate": false,
  "status": "ACTIVATED",
  "id": "dNLnAsdI6m",
  "startPage": true,
  "text": {
      "en": "Welcome to start page",
      "af": "Welcome to start page"
  }
}

 const debug = () =>{
 // To do a deep removal with property names from variables
const deep = {
    foo: 'bar',
    c: {
     x: 1,
     y: 2
    }
  };
  
  const parentKey = 'c';
  const childKey = 'y';
  // Remove the 'c' element from original
  const { [parentKey]: parentValue, ...noChild } = deep;
  // Remove the 'y' from the 'c' element
  const { [childKey]: removedValue, ...childWithout } = parentValue;
  // Merge back together
  const withoutThird = { ...noChild, [parentKey]: childWithout };
  console.log(withoutThird); // Will be { "foo": "bar", "c": { "x": 1 } }
 }
 const lab = [
 { value: "af", label: "Afrikaans" },
 { value: "sq", label: "Albanian - shqip" },
 { value: "am", label: "Amharic - አማርኛ" },
 { value: "ar", label: "Arabic - العربية" },
 { value: "an", label: "Aragonese - aragonés" },
 { value: "hy", label: "Armenian - հայերեն" }]
  return (
    <div>
      
        <button onClick={debug}>DEBUG</button>
    </div>
  );
}

export default App;
