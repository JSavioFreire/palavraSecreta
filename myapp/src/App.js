//React
import { useState } from "react";

//components
import Title from "./components/title/title";
import WordBox from "./components/wordBox/WordBox";
import Answer from "./components/answer/Answer";
import LetterUsed from "./components/letterUsed/LetterUsed";

//styled
import GlobalStyle from "./globalStyled";


const App = ()=> {

  //possiveis palavras
  const [teste] = useState({id:1, word: 'SAVIO', tip: 'Meu Nome'})

  //Valores recebidos no input
  const [value, setValue] = useState('')
  const setarValue = (e)=>{setValue(e)}
 
  //Letras jogadas
  const [playedLetter] = useState([])
  const PushPlayedLetter = (e)=>{playedLetter.push(e)}

  return (
    <>
      <GlobalStyle/>
      <Title tip={teste.tip}/>
      <WordBox idkey={teste.id} word = {teste.word} eachLetter = {value} playedLetter = {playedLetter}/>
      <Answer setarValue = {setarValue} PushPlayedLetter = {PushPlayedLetter}/>
      <LetterUsed used = {playedLetter}/>
    </>
  );
}

export default App;
