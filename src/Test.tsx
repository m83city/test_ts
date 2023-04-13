import { useCallback, useState } from "react"

export const Test = (props: any) => {

    console.log('test')

    return <div>
        {props.aray.map((e: any) => <p key={e.id}>{e.id}</p>)}
    </div>
}