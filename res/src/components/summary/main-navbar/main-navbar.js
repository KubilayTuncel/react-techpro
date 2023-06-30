import "./main-navbar.css"


const MainNavbar = () =>{
    return(
        <nav className="main-nav">
            <ul className="navigation">
                <li>
                    <a href="#about">About Me</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#education">Education</a>
                </li>
                <li>
                    <a href="#testimonials">Testimonials</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default MainNavbar;