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
  const words = [
    {id:1, word: 'SAVIO', tip: 'Meu Nome'},
    {id:2, word: 'MAMAO', tip: 'Frutas'},
    {id:3, word: 'BANANA', tip: 'Frutas'},
    {id:4, word: 'MELANCIA', tip: 'Frutas'},
    {id:5, word: 'MELAO', tip: 'Frutas'},
    {id:6, word: 'PALIO', tip: 'Carros'},
    {id:7, word: 'DUSTER', tip: 'Carros'},
    {id:8, word: 'RENEGADE', tip: 'Carros'},
    {id:9, word: 'PUNTO', tip: 'Carros'},
    {id:10, word: 'FIORINO', tip: 'Carros'},]

  const [eachWord, setEachWord] = useState(0)
  
  //Valores recebidos no input
  const [value, setValue] = useState('')
  const setarValue = (e)=>{setValue(e)}
  
  //Letras jogadas
  const [playedLetter] = useState([])
  const PushPlayedLetter = (e)=>{playedLetter.push(e)}

  return (
    <>
      <GlobalStyle/>
      <Title tip={words[eachWord].tip}/>
      <WordBox idkey={words[eachWord].id} word = {words[eachWord].word} eachLetter = {value} playedLetter = {playedLetter}/>
      <Answer setarValue = {setarValue} PushPlayedLetter = {PushPlayedLetter} setEachWord = {setEachWord}/>
      <LetterUsed used = {playedLetter}/>
    </>
  );
}

export default App;
