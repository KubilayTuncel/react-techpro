
import "./skills.css"
import skills from "./skills.json";
import Skill from "./Skill/skill";
const Skills = () =>{
    return(
        <>
            <div className="skills">
                <div className="row">
                    {
                        skills.map((type,i)=>
                            <div key={i} className="col-md-6 col-sm-6 col-xs-12 item" >
                                <Skill name={type.name} value={type.value}/>
                            </div>
                        )
                    }
                </div>

            </div>
        </>

    )
}

export default Skills;