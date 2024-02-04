import { useState } from 'react'

function BioForm ({someObj, someFn}) {

    const [bio, setBio] = useState(someObj)
    const [editable, setEditable] = useState(false)

    function formUpdate(e) {
    
        e.preventDefault()
    
        const newBio = {
        ...bio, 
        name: e.target.parentNode.name.value, 
        surname: e.target.parentNode.surname.value,
        born: e.target.parentNode.born.value, 
        phone: e.target.parentNode.phone.value,
        email: e.target.parentNode.email.value,
        address: e.target.parentNode.address.value
        }
    
        setBio(newBio)
    }
    
    function formSubmit(e) {
    
        e.preventDefault();
    
        const newObj = { 
        ...bio,
        name: e.target.name.value, 
        surname: e.target.surname.value, 
        born: e.target.born.value, 
        phone: e.target.phone.value,
        email: e.target.email.value,
        address: e.target.address.value
        }
    
        someFn(newObj)
        setEditable(false)
    }

    if (editable === true) {
        return (
            <form onSubmit={formSubmit}>
                <label htmlFor="name">Name</label>
                <input onChange={formUpdate} id="name" name="name" value={bio.name}></input>
                <label htmlFor="surname">Surname</label>
                <input onChange={formUpdate} id="surname" name="surname" value={bio.surname}></input>
                <label htmlFor="born">Born</label>
                <input onChange={formUpdate} id="born" name="born" value={bio.born}></input>
                <label htmlFor="address">Address</label>
                <input onChange={formUpdate} id="address" name="address" value={bio.address}></input>
                <label htmlFor="phone">Phone</label>
                <input onChange={formUpdate} id="phone" name="phone" value={bio.phone}></input>
                <label htmlFor="email">E-Mail</label>
                <input onChange={formUpdate} id="email" name="email" value={bio.email}></input>
                <button type='submit'>Submit</button>
            </form>
            )
    } else {
        return (
            <div>
                <label htmlFor="name">Name</label>
                <input onChange={formUpdate} id="name" name="name" value={bio.name} disabled></input>
                <label htmlFor="surname">Surname</label>
                <input onChange={formUpdate} id="surname" name="surname" value={bio.surname} disabled></input>
                <label htmlFor="born">Born</label>
                <input onChange={formUpdate} id="born" name="born" value={bio.born} disabled></input>
                <label htmlFor="address">Address</label>
                <input onChange={formUpdate} id="address" name="address" value={bio.address} disabled></input>
                <label htmlFor="phone">Phone</label>
                <input onChange={formUpdate} id="phone" name="phone" value={bio.phone} disabled></input>
                <label htmlFor="email">E-Mail</label>
                <input onChange={formUpdate} id="email" name="email" value={bio.email} disabled></input>
                <button onClick={()=> {setEditable(true)}}>Edit</button>
            </div>
        )
    }


}

export { BioForm }