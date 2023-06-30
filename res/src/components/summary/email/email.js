import "./email.css"
import {MdMail, MdLocationOn, MdPhoneIphone} from "react-icons/md"

const Email = () =>{
    return(
        <div className="email">
            <MdMail/>
            <p>kubilaytuncel7@gmail.com</p>
            <MdPhoneIphone/>
            <p>017672324083</p>
            <MdLocationOn/>
            <p>Leipzig, Germany</p>
        </div>
    )
}

export default Email;