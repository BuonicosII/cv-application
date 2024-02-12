import { format } from "date-fns"

function WorkExperience ({ props }) {
    
    return (
        <div className="experienceBox">
            <div>
                <hr></hr>
            </div>
            <h2>Work Experience</h2>
            {props.experience.toReversed().map(workExp => {
                    return (
                        <div key={workExp.id} className="infoDiv">
                            <p className="dateLabel">{workExp.from + " - " + workExp.to}</p>
                            <p className="experience">{workExp.role}</p>
                            <p>{workExp.info}</p>
                        </div>
                        )
            })}
        </div>
    )
}

function Education ({ props }) {
    
    return (
        <div className="experienceBox">
            <div>
                <hr></hr>
            </div>
            <h2>Education</h2>
            {props.education.toReversed().map(degree => {
                    return (
                        <div key={degree.id} className="infoDiv">
                            <p className="dateLabel">{degree.from + " - " + degree.to}</p>
                            <p className="experience">{degree.institution}</p>
                            <p>{degree.info}</p>
                        </div>
                        )
            })}
        </div>
    )
}

function Biography ({ props }) {
    return (
        <div className="biographyDiv">
            <div className="curriculumLabelandData">
                <p className="label">Name</p>
                <p>{props.name}</p>
            </div>
            <div className="curriculumLabelandData">
                <p className="label">Surname</p>
                <p>{props.surname}</p>
            </div>
            <div className="curriculumLabelandData">
                <p className="label">Born</p>
                <p>{format(props.born, "MMMM do yyyy")}</p>
            </div>
            <div className="contactInfoDiv">
                <div className="curriculumLabelandData">
                    <p className="label">Address</p>
                    <p>{props.address}</p>
                </div>
                <div className="curriculumLabelandData">
                    <p className="label">Phone</p>
                    <p><a href={"tel:" + props.phone}>+{props.phone}</a></p>
                </div>
                <div className="curriculumLabelandData">
                    <p className="label">E-mail</p>
                    <p><a href={"mailto" + props.email}>{props.email}</a></p>
                </div>
            </div>
        </div>
    )
}



function Curriculum({ anotherObj }) {
    return (
        <div className="curriculumDiv">
            <h1>{anotherObj.name.slice(0, 1) + ". " + anotherObj.surname + "\'s CV"}</h1>
            <Biography props={anotherObj}></Biography>
            <WorkExperience props={anotherObj}></WorkExperience>
            <Education props={anotherObj}></Education>
        </div>
    )
}

export { Curriculum }