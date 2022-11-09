import { H1, P } from "./styleTitle"

const Title = ({tip}) => {
  return (
    <>
        <H1>Descubra a palavra secreta</H1>
        <P>Dica sobre a palavra: {tip}</P>
        <P>Você ainda tem {} tentativas</P>
    </>
  )
}

export default Title