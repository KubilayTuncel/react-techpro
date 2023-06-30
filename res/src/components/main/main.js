
import "./main.css"
import Info from "./info/info";
import Experiences from "./experiences/experiences";
const Main = () =>{
    return(
        <div className="main-content pull-right">
            <Info/>
            <div>
                <Experiences/>
            </div>
        </div>
    )
}

export default Main;