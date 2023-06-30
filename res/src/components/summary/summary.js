
import "./summary.css"
import MobileMenu from "./mobile-menu/mobile-menu";
import Avatar from "./avatar/avatar";
import Email from "./email/email";
import SocialIcons from "./social-icons/social-icons";
import MainNavbar from "./main-navbar/main-navbar";
import Copyright from "./copyright/copyright";
import Skills from "./Skills/skills";

const Summary = () =>{
    return(
            <header className="header pull-left">
                <MobileMenu/>
                <Avatar/>
                <Email/>
                <SocialIcons/>
                <MainNavbar/>
                <Skills/>
                <Copyright/>
            </header>
    )
}

export default Summary;