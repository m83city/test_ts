import logo from './logo.svg';
import './App.css';
import React, { useRef, useState } from 'react';
import { useFormik } from 'formik';

function App() {

  interface IArray {
    name: string,
    count: number
  }

  const [initArray, setInitArray] = useState<IArray[]>([
    {
      name: "first",
      count: 1
    },
    {
      name: "second",
      count: 1
    }
  ]);

  const card1: IArray = {
    name: "n",
    count: 1
  }
  const card2: IArray = {
    name: "Psz",
    count: 1
  }
  const addArray = (element: IArray) => {

    if (initArray.some(item => item.name === element.name)) {
      console.log('item is already yet')
      const index = initArray.findIndex((el: IArray) => el.name === element.name)
      console.log(index)
      console.log('slice')
      console.log(initArray.filter(item => item.name !==element.name))

      setInitArray([...initArray.filter(item => item.name !==element.name), { ...element, count: initArray[index].count + element.count }])

    }
    else {
      console.log("add element")
      setInitArray([...initArray, element])
    }
    console.log(initArray)
  }



  return (
    <>
      <button onClick={() => addArray(card1)}>Add card1</button>
      <button onClick={() => addArray(card2)}>Add card2</button>
      <button onClick={() => console.log(initArray)}>Show array</button>

      <h1>Here</h1>
      {
        initArray.map(item =>
          <p key={item.name}>{item.name}</p>
        )
      }

    </>
  );
}

export default App;
