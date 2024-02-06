import { BioForm } from './BioForm'
import { EduForm } from './EduForm'

function CurriculumForm({ someObj, someFn }) {

    return (
        <div className='formHolder'>
            <BioForm someObj={someObj} someFn={someFn}></BioForm>
            <EduForm someObj={someObj} someFn={someFn}></EduForm>
        </div>
    )
}

export { CurriculumForm }