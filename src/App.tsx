import React, { useEffect, useState } from 'react';
import { Select } from "antd"
import 'antd/dist/antd.css';
import { listLanguages } from "./comsponent/listLanguage"

function App() {
let a, b,c
let d:{}

const arr:any = [ a, b, c , d:{1 ,2 , 3 , 4}]

  return (
    <div>
      <Select options={listLanguages} placeholder={"some lang"} />

    </div>
  );
}

export default App;
