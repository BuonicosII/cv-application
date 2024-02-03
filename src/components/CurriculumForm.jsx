import { useState } from 'react'

function CurriculumForm({ someObj, someFn }) {

    const [bio, setBio] = useState(someObj)

    function formUpdate(e) {

        e.preventDefault()

        const newBio = 
        { name: e.target.parentNode.name.value, 
        surname: e.target.parentNode.surname.value, 
        phone: e.target.parentNode.phone.value}

        setBio(newBio)
    }


    function formSubmit(e) {
        e.preventDefault();

        const newObj = { name: e.target.name.value, surname: e.target.surname.value, phone: e.target.phone.value}

        someFn(newObj)
    }

    return (
        <div className="curriculumDiv">
            <form onSubmit={formSubmit}>
                <label htmlFor="name">Name</label>
                <input onChange={formUpdate} id="name" name="name" value={bio.name}></input>
                <label htmlFor="surname">Surname</label>
                <input onChange={formUpdate} id="surname" name="surname" value={bio.surname}></input>
                <label htmlFor="phone">Phone</label>
                <input onChange={formUpdate} id="phone" name="phone" value={bio.phone}></input>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export { CurriculumForm }