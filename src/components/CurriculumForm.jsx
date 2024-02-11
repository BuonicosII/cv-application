import { BioForm } from './BioForm'
import { EduForm } from './EduForm'
import { ExpForm } from './ExpForm'

function CurriculumForm({ someObj, someFn }) {

    return (
        <div className='formHolder'>
            <BioForm someObj={someObj} someFn={someFn}></BioForm>
            <EduForm someObj={someObj} someFn={someFn}></EduForm>
            <ExpForm someObj={someObj} someFn={someFn}></ExpForm>
        </div>
    )
}

export { CurriculumForm }