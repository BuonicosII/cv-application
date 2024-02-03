import { useState } from 'react'
import { CurriculumForm } from './CurriculumForm'
import { Curriculum } from './Curriculum'

function App() {
  const [curriculum, setCurriculum] = useState({ name: "Winston", surname: "Churchill", value: 'someValue'})

  return (
    <>
      <CurriculumForm someObj={curriculum} someFn={setCurriculum}/>
      <Curriculum anotherObj={curriculum}/>
    </>
  )
}

export default App
