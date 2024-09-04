import { useState, useEffect } from "react";

export function DigitalClock(){

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return() => {
            clearInterval(intervalId);
        }
    }, []);

    const formatTime = () => {

        let Hours = time.getHours();
        const Minutes = time.getMinutes();
        const Seconds = time.getSeconds();
        const meridiem = Hours >= 12 ? "PM" : "AM";

        Hours = Hours % 12 || 12;
        
        return(`${padZero(Hours)}:${padZero(Minutes)}:${padZero(Seconds)} ${meridiem}`);
    }

    const padZero = (number) => {
        return (number < 10 ? "0" : "") + number;
    }

    return(
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    );
};