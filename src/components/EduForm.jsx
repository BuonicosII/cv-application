import { useState } from 'react'
import { format, parseISO } from "date-fns"

function EduExperience ({ someObj, someFn, index}) {

    function degreeSubmit(e) {

        e.preventDefault()

        const newDegree = {institution: "liceo copernico"}

        someObj.education[index] = newDegree;

        someFn({
            ...someObj,
            education: someObj.education.map(someDegree => someDegree)})

    }

    return (
        <form onSubmit={degreeSubmit}>
            <label htmlFor="from">From</label>
            <input type='date' name='from' id='from'></input>
            <label htmlFor="to">To</label>
            <input type='date' name='to' id='to'></input>
            <label htmlFor="institution">Institution</label>
            <input name='institution' id='institution' value={someObj.education[index].institution}></input>
            <label htmlFor="info">From</label>
            <input name='info' id='info' value={someObj.education[index].info}></input>
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