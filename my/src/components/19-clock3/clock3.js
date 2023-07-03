import "./clock3.scss"
import moment from "moment";
import {useEffect, useState} from "react";

const Clock3 = (props)=>{

    const [dateTime, setDateTime] = useState(moment())

    const {textColor, bgColor} = props

    moment().locale("de")
    require('moment/locale/de')
    const timeStr = dateTime.format("HH:mm")
    const dateStr =dateTime.format("LL")
    const dayStr=dateTime.format("dddd")
    const hour=dateTime.format("HH")
    const minute =dateTime.format("mm")
    const second = dateTime.format("ss");

    let  message="";

    if (hour>=6 && hour < 11){
        message = "Morgen"
    }else if(hour>=11 && hour<17){
        message = "Nachmittag"
    }else if(hour>=17 && hour<22){
        message = "Abend"
    }else {
        message ="Nacht"
    }

    const clockStyle={
        backgroundColor :bgColor,
        color:textColor
    }

    useEffect(()=>{
        const timer = setInterval(()=>{
            setDateTime((moment()))
        }, 1000)

        return ()=>{
            clearInterval(timer)
        }
    },[])

/*
    setInterval(()=>{
        setDateTime((moment()))
    }, 1000)*/

    return(
        <div className="clock-container" style={clockStyle}>
            <div className="time">
                {hour} <span style={{opacity:second % 2 === 0 ? 1 : 0 }}>:</span> {minute}
            </div>
            <div className="new">
                <div className="date">{dateStr}</div>
                <div className="day">{dayStr} {message}</div>
            </div>
        </div>
    )
}

export default Clock3;