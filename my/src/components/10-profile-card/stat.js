import "./profile-card.scss"

const Stat = ({name, value}) => {

    return(
        <div className="">
            <h3>{value}</h3>
            <h6>{name}</h6>
        </div>
    )
}

export default Stat