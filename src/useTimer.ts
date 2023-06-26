import { useState } from "react";

const date = new Date(0);
export const useTimer = () => {

    const [time, setTime] = useState<number>(0);

    // setInterval(() => {
    //     if (time > 0) {
    //         date.setSeconds(time);
    //         setTime(time - 1);
    //         console.log(time)
    //     } else {
    //         return
    //     }

    // }, 5000);

    function interval() {
        if (time === 0) {
            return
        } else {
            setTimeout(() => {
                date.setSeconds(time);
                setTime(time - 1);
                console.log(time);

            }, 1000);
        }
    }




    return {
        date,
        setTime,
        interval
    }




}