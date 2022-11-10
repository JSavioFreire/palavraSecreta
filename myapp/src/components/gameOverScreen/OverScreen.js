import { Title,Button,Ponts } from "./styleOver"

const OverScreen = ({setScreen}) => {


    const changeScreen = ()=>{
        setScreen('game')
    }

  return (
    <>
        <Title>Que Pena, Você Perdeu!</Title>
        <Button onClick={changeScreen}>Recomeçar</Button>
        <Ponts>Sua Pontuação: </Ponts>
    </>
  )
}

export default OverScreen