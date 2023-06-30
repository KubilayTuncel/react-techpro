import "./clock1.scss"
import moment from "moment";

const Clock1 = ()=>{
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

    return(
        <div className="clock-container">
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

export default Clock1;