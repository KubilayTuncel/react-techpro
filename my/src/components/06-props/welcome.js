import "./welcome.scss"

// const Welcome = (props)=>{
const Welcome = ({firstName, lastName})=>{

    // const {firstName, lastName} = props;
    //3 farkli sekilde parent dan gelen props degerlerini bu child class da alabiliyoruz.

    return(
        <div className="welcome">
            {/*<h2> Welcome {props.firstName} {props.lastName}</h2>*/}
            <h2> Welcome {firstName} {lastName}</h2>
        </div>
    )
}

export default Welcome;