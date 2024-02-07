import { useState } from 'react'

function EduExperience ({ someObj, someFn, index}) {

    const [degree, setDegree] = useState(someObj.education[index])

    function formUpdate(e) {

        e.preventDefault()

        const newDegree = {
            from: e.target.parentNode.from.value,
            to: e.target.parentNode.to.value,
            institution: e.target.parentNode.institution.value,
            info: e.target.parentNode.info.value
        }

        setDegree(newDegree)
    }

    function degreeSubmit(e) {

        e.preventDefault()

        console.log(e.target)

        const newDegree = {
            from: e.target.from.value,
            to: e.target.to.value,
            institution: e.target.institution.value,
            info: e.target.info.value
        }

        someObj.education[index] = newDegree;

        someFn({
            ...someObj,
            education: someObj.education.map(someDegree => someDegree)})

    }

    return (
        <form onSubmit={degreeSubmit}>
            <label htmlFor="from">From</label>
            <input onChange={formUpdate}name='from' id='from' value={degree.from}></input>
            <label htmlFor="to">To</label>
            <input onChange={formUpdate}name='to' id='to' value={degree.to}></input>
            <label htmlFor="institution">Institution</label>
            <input onChange={formUpdate} name='institution' id='institution' value={degree.institution}></input>
            <label htmlFor="info">From</label>
            <input onChange={formUpdate} name='info' id='info' value={degree.info}></input>
            <button type='submit'>Submit</button>
        </form>
    )
}


function EduForm ({someObj, someFn}) {

    return (
        <>
        {someObj.education.map((degree, index) => {
            return (
                <EduExperience someObj={someObj} someFn={someFn} index={index}></EduExperience> //remember to add key here!
                )
        })}
        </>
    )
}

export { EduForm }