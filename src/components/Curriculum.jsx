function Curriculum({ anotherObj }) {
    return (
        <div className="curriculumDiv">
            {anotherObj.name + " " + anotherObj.surname + " " + anotherObj.phone + " " +anotherObj.education[0].institution}
        </div>
    )
}

export { Curriculum }