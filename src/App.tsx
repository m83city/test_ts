import logo from './logo.svg';
import './App.css';
import React, { useRef, useState } from 'react';
import { useFormik } from 'formik';

function App() {

  interface IArray {
    name: string,
    count: number
    item: number
  }
  const index = 'lg'


  const object = {
    lg: [{
      name: "lg-first",
      count: 20,
      item: 1
    },
    {
      name: "lg-second",
      count: 20,
      item: 1
    },],
    md: [
      {
        name: "md-first",
        count: 20,
        item: 1
      },
      {
        name: "md-second",
        count: 20,
        item: 1
      }
    ]
  }

  const Array1 = [
    { name: "lg-first", count: 421231, },
    { name: "lg-second", count: 423694, },
  ]
  const changeStart = () => {

/*     const newObject = {
      ...object.lg.map(e => {
        Array1.forEach(item => {
          if (e.name === item.name) { e.count = item.count }
        })
        return e
      })
    }
    const newJbject = {...object }
    console.log(newObject)
    console.log(newJbject) */


    const emptyArray:any = []
    object[index].forEach(item => {
      Array1.forEach(e => {
        if(e.name === item.name){
          item.count = e.count
          emptyArray.push({item})
        }
      })
    })
    
    console.log(emptyArray)
  }
  return (
    <>
      <button onClick={() => changeStart()}>changeStart</button>

      <h1>Here</h1>
    </>
  );
}

export default App;
