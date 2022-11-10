import { Title,Button } from "./styleInicialScreen"

const InicialScreen = ({setScreen}) => {

    const changeScreen = ()=>{
        setScreen('game')
    }
    
  return (
    <>
        <Title>Descubra a Palavra Secreta</Title>
        <Button onClick={changeScreen}>Comecar</Button>
    </>
  )
}

export default InicialScreen