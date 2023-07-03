import countries from "./countries.json"

const Jsx7 = ({rate=3})=>{
    return(
        <>
            {[...new Array(5)].map((item,index)=> (index < rate ? "O" : "X"))}
        </>
    )
}

export default Jsx7;