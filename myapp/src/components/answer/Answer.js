import { useState } from "react"
import { AllAnswer, Letter,Submit } from "./StyleAnswer"

const Answer = ({setarValue, PushPlayedLetter, setEachWord}) => {
    const [val, setVal] = useState()

    const handleChange = (e)=>{
        setVal(e.target.value.toUpperCase())
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        setarValue(val)
        PushPlayedLetter(val)
    }
    const changeword = (e)=>{
        e.preventDefault()
        setEachWord(Math.floor(Math.random() * 10));
    }
    
  return (
    <>
        <form>
            <AllAnswer style={{display: 'flex'}}>
                <Letter maxLength={1} required onChange={handleChange}/>
                <Submit onClick={handleSubmit}>Enviar</Submit>
            </AllAnswer>
            <button onClick={changeword}></button>
        </form>
        
    </>
  )
}

export default Answer