import "./skill.css"

const Skill = ({name,value}) =>{
    return(
        <>

               <div className="skill-box">
                   <div className="skill-info clearfix">
                       <span className="pull-left">{name}</span>
                       <span className="pull-right">{value}%</span>

                   </div>
               </div>
               <div className="progress">
                   <div className="progress-bar"
                        role="progressbar"
                        aria-valuenow={value}
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{width:`${value}%`}}>
                   </div>
               </div>
        </>
    )
}

export default Skill;