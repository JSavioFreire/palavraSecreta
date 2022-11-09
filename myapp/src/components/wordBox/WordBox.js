import { BoxWord,AllBoxWord } from "./StyleWordBox"

const WordBox = ({word,eachLetter,playedLetter}) => {

    const splitWord = word.split('')
 
  return (
    <AllBoxWord >
        {splitWord.map((Letter)=>{
            const PlayedCorrect = (value) => {
                if (value == Letter) {
                    return value
                }}
    
            const correct = playedLetter.filter(PlayedCorrect)

            if(eachLetter == Letter || correct == Letter){
                return(
                <BoxWord><h1>{Letter}</h1></BoxWord>
            )}
          
            else{
                return(
                    <BoxWord></BoxWord>
                )
            }}  
        )}
        
    </AllBoxWord>
  )
}

export default WordBox