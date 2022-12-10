import { useEffect, useState } from "react"

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

export default function Time() {
    const [time, setTime] = useState(new Date())

    useEffect(()=> { //useEffect calls setTimeout on each render, which means setTimeout works as setInterval
      setTimeout(()=>{
        setTime(new Date())
      }, 1000)
    }, [time]) //each time that "time" changes useEffect is executed

  function getMonthName () {
    return monthNames[time.getMonth()]
  }

  return (
    <div className="time-container">
        <div className="grid-item time-title">Year</div>
        <div className="grid-item time-title">Month</div>
        <div className="grid-item time-title">Day</div>
        <div className="grid-item time-title">Hour</div>
        <div className="grid-item time-title">Minutes</div>
        <div className="grid-item time-title">Seconds</div>
        <div className="grid-item">{time.getFullYear()}</div>
        <div className="grid-item">{getMonthName()}</div>
        <div className="grid-item">{time.getDate()}</div>
        <div className="grid-item">{time.getHours()}</div>
        <div className="grid-item">{time.getMinutes()}</div>
        <div className="grid-item">{time.getSeconds()}</div>
    </div>
  )
}