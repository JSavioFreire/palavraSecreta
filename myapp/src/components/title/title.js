import { H1, P } from "./styleTitle"

const Title = ({tip}) => {
  return (
    <>
        <H1>Descubra a Palavra Secreta</H1>
        <P>Dica sobre a palavra: {tip}</P>
        <P>Você ainda tem {} tentativas</P>
    </>
  )
}

export default Title