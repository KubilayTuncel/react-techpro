
const Events = () => {

    //Event handler
    const sayHello1 = () =>{
        alert("Hello")
    }

    const sayHello2 = (name) =>{
        alert(`Hello ${name}`)
    }

    return(
        <div>
            <div onClick={sayHello1}>Say Hello 1</div>
            <div onClick={()=>sayHello2("Kubilay")}>Say Hello 2</div>
        </div>
    )
}

export default Events