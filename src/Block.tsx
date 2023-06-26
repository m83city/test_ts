import React, { useState } from "react"

interface IProp {
    name:string
}
export const Block:React.FC<IProp> = ({name}) => {

    const [array, setArray] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 99,]);
    
    const addRow = ()=>{
        setArray([...array, 99])
    }


    return (
        <>  <button onClick={()=>addRow()}>asdasdsa</button>
            {array.map((e)=>(<div key={e}>{name}</div>))}

        </>)
}
