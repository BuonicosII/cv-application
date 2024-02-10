import { useState } from 'react'

function EduExperience ({ someObj, someFn, index, statusFn, status}) {

    const [degree, setDegree] = useState(someObj.education[index])

    function formUpdate(e) {

        e.preventDefault()

        const newDegree = {
            from: e.target.parentNode.parentNode.from.value,
            to: e.target.parentNode.parentNode.to.value,
            institution: e.target.parentNode.parentNode.institution.value,
            info: e.target.parentNode.parentNode.info.value
        }

        setDegree(newDegree)
    }

    function degreeSubmit(e) {

        e.preventDefault()

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
        statusFn(undefined)

    }

    if (status === index) {
        return (
            <form className="formDiv" onSubmit={degreeSubmit}>
                <div className='formInputField'>
                    <label htmlFor="from">From</label>
                    <input onChange={formUpdate}name='from' id='from' value={degree.from}></input>
                </div>
                <div className='formInputField'>
                    <label htmlFor="to">To</label>
                    <input onChange={formUpdate}name='to' id='to' value={degree.to}></input>
                </div>
                <div className='formInputField'>
                    <label htmlFor="institution">Institution</label>
                    <input onChange={formUpdate} name='institution' id='institution' value={degree.institution}></input>
                </div>
                <div className='formInputField'>
                    <label htmlFor="info">About</label>
                    <input onChange={formUpdate} name='info' id='info' value={degree.info}></input>
                </div>
                <button type='submit'>Submit</button>
            </form>
        )
    } else {
        return (
            <div className="formDiv">
                <div className='formInputField'>
                    <label htmlFor="from">From</label>
                    <input onChange={formUpdate}name='from' id='from' value={degree.from} disabled></input>
                </div>
                <div className='formInputField'>
                    <label htmlFor="to">To</label>
                    <input onChange={formUpdate}name='to' id='to' value={degree.to} disabled></input>
                </div>
                <div className='formInputField'>
                    <label htmlFor="institution">Institution</label>
                    <input onChange={formUpdate} name='institution' id='institution' value={degree.institution} disabled></input>
                </div>
                <div className='formInputField'>
                    <label htmlFor="info">About</label>
                    <input onChange={formUpdate} name='info' id='info' value={degree.info} disabled></input>
                </div>
                <button onClick={() => {statusFn(index)}}>Edit</button>
            </div>
        )
    }

}


function EduForm ({someObj, someFn}) {

    const [collapsed, setCollapsed] = useState(true);
    const [status, setStatus] = useState(undefined)

    function toggleCollapse() {
        if (status !== undefined) {
            alert("Submit the form first!")
        } else {
            collapsed ? setCollapsed(false) : setCollapsed(true)
        }
    }

    return (
        <div className='formAndTitleHolder'>
            <div className='formTitle'>
                <h2>Education</h2>
                <button onClick={toggleCollapse}>Toggle</button>
            </div>
        {!collapsed && someObj.education.map((degree, index) => {
            return (
                <EduExperience someObj={someObj} someFn={someFn} index={index} statusFn={setStatus} status={status} ></EduExperience> //remember to add key here!
                )
        })}
        </div>
    )
}

export { EduForm }