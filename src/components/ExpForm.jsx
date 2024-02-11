import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

function ExpForm ({ someObj, somFn}) {

    return (
        <div className='formAndTitleHolder'>
            <div className='formTitle'>
                <h2>Experience</h2>
                <button>Toggle</button>
            </div>
        </div>
    )

}

export { ExpForm }