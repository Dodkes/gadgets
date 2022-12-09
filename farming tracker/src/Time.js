import { useEffect, useState } from "react"

export default function Time() {
    const [time, setTime] = useState({
        year: new Date().getFullYear(),
        month: new Date().getMonth(),
        day: new Date().getDate(),
        hour: new Date().getHours(),
        minute: new Date().getMinutes(),
        second: new Date().getSeconds()
    })

    useEffect(()=> { //useEffect calls setTimeout on each render, which means setTimeout works as setInterval
      setTimeout(()=>{
        setTime({ //useState function updating
          year: new Date().getFullYear(),
          month: new Date().getMonth(),
          day: new Date().getDate(),
          hour: new Date().getHours(),
          minute: new Date().getMinutes(),
          second: new Date().getSeconds()
        }
          )
      }, 1000)
    })

  return (
    <div className="time-container">
        <div className="grid-item time-title">Year</div>
        <div className="grid-item time-title">Month</div>
        <div className="grid-item time-title">Day</div>
        <div className="grid-item time-title">Hour</div>
        <div className="grid-item time-title">Minutes</div>
        <div className="grid-item time-title">Seconds</div>
        <div className="grid-item">{time.year}</div>
        <div className="grid-item">{time.month}</div>
        <div className="grid-item">{time.day}</div>
        <div className="grid-item">{time.hour}</div>
        <div className="grid-item">{time.minute}</div>
        <div className="grid-item">{time.second}</div>
    </div>
  )
}
