import { BioForm } from './BioForm'

function CurriculumForm({ someObj, someFn }) {

    return (
        <div className='formHolder'>
            <BioForm someObj={someObj} someFn={someFn} ></BioForm>
        </div>
    )
}

export { CurriculumForm }