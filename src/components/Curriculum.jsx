function Curriculum({ anotherObj }) {
    return (
        <div className="curriculumDiv">
            {anotherObj.name + " " + anotherObj.surname + " " + anotherObj.phone}
        </div>
    )
}

export { Curriculum }