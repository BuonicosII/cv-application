import { useState } from 'react'
import { format, parseISO } from "date-fns"

function BioForm ({someObj, someFn}) {

    const [bio, setBio] = useState(someObj)
    const [editable, setEditable] = useState(false)
    const [collapsed, setCollapsed] = useState(true);

    function formUpdate(e) {
    
        e.preventDefault()
    
        const newBio = {
        ...bio, 
        name: document.querySelector("#name").value, 
        surname: document.querySelector("#surname").value,
        born: parseISO(document.querySelector("#born").value), 
        phone: document.querySelector("#phone").value,
        email: document.querySelector("#email").value,
        address: document.querySelector("#address").value
        }
    
        setBio(newBio)
    }
    
    function formSubmit(e) {
    
        e.preventDefault();
    
        const newObj = { 
        ...bio,
        name: document.querySelector("#name").value, 
        surname: document.querySelector("#surname").value,
        born: parseISO(document.querySelector("#born").value), 
        phone: document.querySelector("#phone").value,
        email: document.querySelector("#email").value,
        address: document.querySelector("#address").value
        }
    
        someFn(newObj)
        setEditable(false)
    }

    if (editable === true) {
        return (
            <div className='formAndTitleHolder'>
                <div className='formTitle'>
                    <h2>Biographic Info</h2>
                    <button onClick={() => {alert("Submit the form first!")}}>Toggle</button>
                </div>
                <form className="formDiv" onSubmit={formSubmit}>
                    <div className='formInputField'>
                        <label htmlFor="name">Name</label>
                        <input onChange={formUpdate} id="name" name="name" value={bio.name}></input>
                    </div>
                    <div className='formInputField'>
                        <label htmlFor="surname">Surname</label>
                        <input onChange={formUpdate} id="surname" name="surname" value={bio.surname}></input>
                    </div>
                    <div className='formInputField'>
                        <label htmlFor="born">Born</label>
                        <input type="date" onChange={formUpdate} id="born" name="born" value={format(bio.born, "yyyy-MM-dd")}></input>
                    </div>
                    <div className='formInputField'>
                        <label htmlFor="address">Address</label>
                        <input onChange={formUpdate} id="address" name="address" value={bio.address}></input>
                    </div>
                    <div className='formInputField'>
                        <label htmlFor="phone">Phone</label>
                        <input type="tel" onChange={formUpdate} id="phone" name="phone" value={bio.phone}></input>
                    </div>
                    <div className='formInputField'>
                        <label htmlFor="email">E-Mail</label>
                        <input type="email" onChange={formUpdate} id="email" name="email" value={bio.email}></input>
                    </div>
                    <button className="formDivBtn" type='submit'>Submit</button>
                </form>
            </div>

            )
    } else if (editable === false && collapsed === false) {
        return (
            <div className='formAndTitleHolder'>
                <div className='formTitle'>
                    <h2>Biographic Info</h2>
                    <button onClick={()=>{setCollapsed(true)}}>Toggle</button>
                </div>
                <div className='formDiv'>
                    <div className='formInputField'>
                        <label htmlFor="name">Name</label>
                        <input onChange={formUpdate} id="name" name="name" value={bio.name} disabled></input>
                    </div>
                    <div className='formInputField'>
                        <label htmlFor="surname">Surname</label>
                        <input onChange={formUpdate} id="surname" name="surname" value={bio.surname} disabled></input>
                    </div>
                    <div className='formInputField'>
                        <label htmlFor="born">Born</label>
                        <input type="date" onChange={formUpdate} id="born" name="born" value={format(bio.born, "yyyy-MM-dd")} disabled></input>
                    </div>
                    <div className='formInputField'>
                        <label htmlFor="address">Address</label>
                        <input onChange={formUpdate} id="address" name="address" value={bio.address} disabled></input>
                    </div>
                    <div className='formInputField'>
                        <label htmlFor="phone">Phone</label>
                        <input type="tel" onChange={formUpdate} id="phone" name="phone" value={bio.phone} disabled></input>
                    </div>
                    <div className='formInputField'>
                        <label htmlFor="email">E-Mail</label>
                        <input type="email" onChange={formUpdate} id="email" name="email" value={bio.email} disabled></input>
                    </div>
                    <button className="formDivBtn" onClick={()=> {setEditable(true)}}>Edit</button>
                </div>
            </div>

        )
    } else {
        return (
            <div className='formAndTitleHolder'>
                <div className='formTitle' onClick={()=>{setCollapsed(false)}}>
                    <h2>Biographic Info</h2>
                    <button onClick={()=>{setCollapsed(false)}}>Toggle</button>
                </div>
            </div>
        )
    }


}

export { BioForm }