import SectionHeader from "../section-header/section-header";
import experiences from "./experiences.json";
import Experience from "./experience";
const Experiences = () =>{
    return(
        <section id="experience" className="resume">
            <SectionHeader title="WORK EXPERIENCES"/>
            <div className="row">
                {experiences.map((exp,i)=>(
                    <div key={i} >
                        <Experience {...exp}/>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Experiences;