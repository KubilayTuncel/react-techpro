import {Container} from "react-bootstrap";
import "./scroll.scss"
import {useEffect, useRef} from "react";

const Scroll = () => {

    const refAboutus = useRef(null)

    useEffect(()=>{
        const handleScroll = () => {
            const aboutUsEl = refAboutus.current
            const currentScrollPosition = window.scrollY

            const elScrollPosition = aboutUsEl.offsetTop
            const currentWindowHeight = window.innerHeight;
            const elCurrentHeight = aboutUsEl.offsetHeight;

            const targetScrollPosition =
                elScrollPosition - currentWindowHeight + elCurrentHeight

            if (currentScrollPosition >= targetScrollPosition) {
                aboutUsEl.classList.add("active")
            }

        }
        document.addEventListener("scroll", handleScroll)

        return () => {
            document.removeEventListener("scroll", handleScroll)
        }
    })

    return(
        <Container>
            {[...new Array(15)].map((item, index)=>(
                <p key={index} >
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                    no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                    At vero eos et accusam et justo duo dolores et ea rebum.
                    Stet clita kasd gubergren,
                    no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
            ))}
            <p className= "about-us"  ref={refAboutus}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                At vero eos et accusam et justo duo dolores et ea rebum.
                Stet clita kasd gubergren,
                no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
            {[...new Array(15)].map((item, index)=>(
                <p key={index}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                    no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                    At vero eos et accusam et justo duo dolores et ea rebum.
                    Stet clita kasd gubergren,
                    no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
            ))}
        </Container>
    )
}

export default Scroll