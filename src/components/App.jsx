import { useState } from 'react'
import { CurriculumForm } from './CurriculumForm'
import { Curriculum } from './Curriculum'

function App() {
  const [curriculum, setCurriculum] = useState({ name: "Winston", surname: "Churchill", value: 'someValue'})

  return (
    <div>
      <CurriculumForm someObj={curriculum} someFn={setCurriculum}/>
      <Curriculum anotherObj={curriculum}/>
    </div>
  )
}

export default App
