import { useState } from "react"
import { AllAnswer, Letter,Submit } from "./StyleAnswer"

const Answer = ({setarValue, PushPlayedLetter}) => {
    const [val, setVal] = useState()

    const handleChange = (e)=>{
        setVal(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        setarValue(val)
        PushPlayedLetter(val)
    }


  return (
    <>
        <form>
            <AllAnswer style={{display: 'flex'}}>
                <Letter onChange={handleChange}/>
                <Submit onClick={handleSubmit}>Enviar</Submit>
            </AllAnswer>
        </form>
        
    </>
  )
}

export default Answer