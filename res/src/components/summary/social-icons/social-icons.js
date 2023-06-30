import "./social.icons.css"
import {FaLinkedin, FaXing, FaGithub} from "react-icons/fa"

const SocialIcons = () =>{
    return(
        <div className="social-icons">
            <ul>
                <li>
                    <a href="#">
                        <FaLinkedin/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FaXing/>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <FaGithub/>
                    </a>
                </li>

            </ul>
        </div>
    )
}

export default SocialIcons;