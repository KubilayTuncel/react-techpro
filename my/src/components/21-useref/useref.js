import {Button, Container} from "react-bootstrap";
import {useRef} from "react";

const UseRef = () => {

    const emailRef = useRef(null)
    const setFocus = () => {
        emailRef.current.focus();
        emailRef.current.style.backgroundColor = "green";
    }

    return(
        <Container>
            <input type="text" placeholder="Enter your email" ref={emailRef}/>
            <Button onClick={setFocus}>Set Focus</Button>

        </Container>
    )
}

export default UseRef