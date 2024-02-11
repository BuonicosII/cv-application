import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

function NewWorkExperience ({ someObj, someFn, addingFn}) {

    function addDegree(e) {
        e.preventDefault();

        const newDegree = {
            id: uuidv4(),
            from: e.target.from.value,
            to: e.target.to.value,
            role: e.target.role.value,
            info: e.target.info.value
        }

        someObj.experience.push(newDegree);

        someFn({
            ...someObj,
            experience: someObj.experience.map(someExp => someExp)})

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
                        <label htmlFor="role">Role</label>
                        <input name='role' id='role'></input>
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

function WorkExperience ({someObj, someFn, index, statusFn, status}) {

    const [workExp, setWorkExp] = useState(someObj.experience[index])

    function formUpdate(e) {

        e.preventDefault()

        const newExp = {
            ...workExp,
            from: e.target.parentNode.parentNode.from.value,
            to: e.target.parentNode.parentNode.to.value,
            role: e.target.parentNode.parentNode.role.value,
            info: e.target.parentNode.parentNode.info.value
        }

        setWorkExp(newExp)
    }

    function ExpRemove() {

        someObj.experience.splice(index, 1)

        someFn({
            ...someObj,
            experience: someObj.experience.map(someExp => someExp)})
    }

    function expSubmit(e) {

        e.preventDefault()

        const newExp = {
            ...workExp,
            from: e.target.from.value,
            to: e.target.to.value,
            role: e.target.role.value,
            info: e.target.info.value
        }

        someObj.experience[index] = newExp;

        someFn({
            ...someObj,
            experience: someObj.experience.map(someExp => someExp)})
        statusFn(undefined)

    }

    if (status === index) {
        return (
            <form className="formDiv" onSubmit={expSubmit}>
                <div className='formInputField'>
                    <label htmlFor="from">From</label>
                    <input onChange={formUpdate} name='from' id='from' value={workExp.from}></input>
                </div>
                <div className='formInputField'>
                    <label htmlFor="to">To</label>
                    <input onChange={formUpdate}name='to' id='to' value={workExp.to}></input>
                </div>
                <div className='formInputField'>
                    <label htmlFor="role">Role</label>
                    <input onChange={formUpdate} name='role' id='role' value={workExp.role}></input>
                </div>
                <div className='formInputField'>
                    <label htmlFor="info">About</label>
                    <input onChange={formUpdate} name='info' id='info' value={workExp.info}></input>
                </div>
                <button className="formDivBtn" type='submit'>Submit</button>
            </form>
        )
    } else {
        return (
            <div className="formDiv">
                <div className='formInputField'>
                    <label htmlFor="from">From</label>
                    <input onChange={formUpdate}name='from' id='from' value={workExp.from} disabled></input>
                </div>
                <div className='formInputField'>
                    <label htmlFor="to">To</label>
                    <input onChange={formUpdate}name='to' id='to' value={workExp.to} disabled></input>
                </div>
                <div className='formInputField'>
                    <label htmlFor="role">Role</label>
                    <input onChange={formUpdate} name='role' id='role' value={workExp.role} disabled></input>
                </div>
                <div className='formInputField'>
                    <label htmlFor="info">About</label>
                    <input onChange={formUpdate} name='info' id='info' value={workExp.info} disabled></input>
                </div>
                <div className='buttonDiv'>
                    <button className="deleteBtn" onClick={ExpRemove}>Remove</button>
                    <button className="formDivBtn" onClick={() => {statusFn(index)}}>Edit</button>
                </div>

            </div>
        )
    }


}

function ExpForm ({ someObj, someFn}) {

    const [collapsed, setCollapsed] = useState(true);
    const [status, setStatus] = useState(undefined);
    const [addingExp, setAddingExp] = useState(false)

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
                <h2>Experience</h2>
                <button onClick={toggleCollapse}>Toggle</button>
            </div>
            {!collapsed && someObj.experience.map((workExp, index) => {
            return (
                <WorkExperience key={workExp.id} someObj={someObj} someFn={someFn} index={index} statusFn={setStatus} status={status} ></WorkExperience> //remember to add key here!
                )
            })}
            {!collapsed && <button className='addNewBtn' onClick={() => {setAddingExp(true)}}>+ Add new</button>}
            {addingExp && <NewWorkExperience someObj={someObj} someFn={someFn} addingFn={setAddingExp}></NewWorkExperience>}
        </div>
    )

}

export { ExpForm }