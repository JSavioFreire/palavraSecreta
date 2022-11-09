//React
import { useState } from "react";

//components
import Title from "./components/title/title";
import WordBox from "./components/wordBox/WordBox";
import Answer from "./components/answer/Answer";

//styled
import GlobalStyle from "./globalStyled";


const App = ()=> {

  //possiveis palavras
  const [teste] = useState(['S','A','V','I','O'])

  //Valores recebidos no input
  const [value, setValue] = useState('')
  const setarValue = (e)=>{setValue(e)}
 
  //Letras jogadas
  const [playedLetter] = useState([])
  const PushPlayedLetter = (e)=>{playedLetter.push(e)}

  console.log(playedLetter)

  return (
    <>
      <GlobalStyle/>
      <Title/>
      <WordBox word = {teste} eachLetter = {value} playedLetter = {playedLetter}/>
      <Answer setarValue = {setarValue} PushPlayedLetter = {PushPlayedLetter}/>

    </>
  );
}

export default App;
