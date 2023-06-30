import Welcome from "./welcome";

const Greetings = ()=>{
    return(
        <div className="greetings">
            <h1>Greetings</h1>
            <Welcome firstName ="Ali" lastName="Gel"/>
            <Welcome firstName ="Ayse" lastName="Gel"/>
        </div>
    )
}

export default Greetings;