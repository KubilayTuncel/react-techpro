import "./clock2.scss"
import moment from "moment";

const Clock2 = (props)=>{

    const {textColor, bgColor} = props

    moment().locale("de")
    require('moment/locale/de')
    const timeStr = moment().format("HH:mm")
    const dateStr =moment().format("LL")
    const dayStr=moment().format("dddd")
    const hour=moment().format("HH")

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

    return(
        <div className="clock-container" style={clockStyle}>
            <div className="time">
                {timeStr}
            </div>
            <div className="new">
                <div className="date">{dateStr}</div>
                <div className="day">{dayStr} {message}</div>
            </div>
        </div>
    )
}

export default Clock2;