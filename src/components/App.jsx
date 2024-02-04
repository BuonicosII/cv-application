import { useState } from 'react'
import { CurriculumForm } from './CurriculumForm'
import { Curriculum } from './Curriculum'


function App({ obj }) {
  const [curriculum, setCurriculum] = useState(obj)

  return (
    <>
      <CurriculumForm someObj={curriculum} someFn={setCurriculum}/>
      <Curriculum anotherObj={curriculum}/>
    </>
  )
}

export { App }
