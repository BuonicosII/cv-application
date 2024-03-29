import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

function NewEduExperience ({ someObj, someFn, addingFn}) {

    function addDegree(e) {
        e.preventDefault();

        const newDegree = {
            id: uuidv4(),
            from: e.target.from.value,
            to: e.target.to.value,
            institution: e.target.institution.value,
            info: e.target.info.value
        }

        someObj.education.push(newDegree);

        someFn({
            ...someObj,
            education: someObj.education.map(someDegree => someDegree)})

        addingFn(false)
    }

    return (
        <div className='newDegreeFormHolder'>
                <form className="popUp" onSubmit={addDegree}>
                    <div className='formInputField'>
                        <label htmlFor="from">From</label>
                        <input name='from' id='from'></input>
                    </div>
                    <div className='formInputField'>
                        <label htmlFor="to">To</label>
                        <input name='to' id='to'></input>
                    </div>
                    <div className='formInputField'>
                        <label htmlFor="institution">Institution</label>
                        <input name='institution' id='institution'></input>
                    </div>
                    <div className='formInputField'>
                        <label htmlFor="info">About</label>
                        <input name='info' id='info'></input>
                    </div>
                    <div className='buttonDiv'>
                        <button className='deleteBtn' onClick={()=> {addingFn(false)}}>Cancel</button>
                        <button className="formDivBtn" type='submit'>Submit</button>
                    </div>

                </form>
        </div>
    )
}

function EduExperience ({ someObj, someFn, index, statusFn, status}) {

    const [degree, setDegree] = useState(someObj.education[index])

    function formUpdate(e) {

        e.preventDefault()

        const newDegree = {
            ...degree,
            from: e.target.parentNode.parentNode.from.value,
            to: e.target.parentNode.parentNode.to.value,
            institution: e.target.parentNode.parentNode.institution.value,
            info: e.target.parentNode.parentNode.info.value
        }

        setDegree(newDegree)
    }

    function degreeRemove() {

        someObj.education.splice(index, 1)

        someFn({
            ...someObj,
            education: someObj.education.map(someDegree => someDegree)})
    }

    function degreeSubmit(e) {

        e.preventDefault()

        const newDegree = {
            ...degree,
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
                <button className="formDivBtn" type='submit'>Submit</button>
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
                <div className='buttonDiv'>
                    <button className="deleteBtn" onClick={degreeRemove}>Remove</button>
                    <button className="formDivBtn" onClick={() => {statusFn(index)}}>Edit</button>
                </div>

            </div>
        )
    }

}


function EduForm ({someObj, someFn}) {

    const [collapsed, setCollapsed] = useState(true);
    const [status, setStatus] = useState(undefined);
    const [addingDegree, setAddingDegree] = useState(false)

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
                <EduExperience key={degree.id} someObj={someObj} someFn={someFn} index={index} statusFn={setStatus} status={status} ></EduExperience> //remember to add key here!
                )
        })}
        {!collapsed && <button className='addNewBtn' onClick={() => {setAddingDegree(true)}}>+ Add new</button>}
        {addingDegree && <NewEduExperience someObj={someObj} someFn={someFn} addingFn={setAddingDegree}></NewEduExperience>}
        </div>
    )
}

export { EduForm }