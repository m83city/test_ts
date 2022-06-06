import React, { useState } from 'react';
import {Select} from "antd"


function App() {
const [language, setLanguage] =useState([
  {label:"english",value: "en"},
  {label:"ukraine",value: "uk"},

]);



  return (
    <div>
        <Select options={language} placeholder={"some lang"}/>

    </div>
  );
}

export default App;
