import {Button, Container} from "react-bootstrap";
import {useEffect, useState} from "react";

const UseEffect2 = () => {

    const [counter, setCounter] = useState(0);

    useEffect(()=>{
        document.title = `Hello ${counter}`
    },[counter])

    return(
        <Container>
            <h1>{counter} kere tikladin</h1>
            <Button variant="info" onClick={()=>setCounter(prev=>prev+1)}>Click Me</Button>

        </Container>
    )
}

export default UseEffect2