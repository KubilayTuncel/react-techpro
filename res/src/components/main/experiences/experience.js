import "./experiences.css"
const Experience = ({company, title, date, desc}) =>{
    return(
        <div className="top-item resume-item">
            <h3>{title}</h3>
            <h4>{company}</h4>
            <span>{date}</span>
            <p>{desc}</p>
        </div>
    )
}

export default Experience;