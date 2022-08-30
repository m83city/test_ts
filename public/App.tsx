import React, { useState } from 'react';
import {Select} from "antd"


function App() {
const [language, setLanguage] =useState([
  {label:"english",value: "en"},
  {label:"ukraine",value: "uk"},
  {label:"En",value: "ed"},
  {label:"Pen",value: "pn"},
  {label:"ERa",value: "er"},
  {label:"Gen",value: "ge"},


]);



  return (
    <div>
        <Select options={language} placeholder={"some lang"}/>

    </div>
  );
}

export default App;
