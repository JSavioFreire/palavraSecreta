import { useState } from "react"
import { Letter } from "../answer/StyleAnswer"
import { BoxWord,AllBoxWord } from "./StyleWordBox"

const WordBox = ({word,eachLetter,playedLetter}) => {

    
  return (
    <AllBoxWord>
        {word.map((Letter)=>{
           
            if(eachLetter == Letter ){
                return(
                <BoxWord><h1 className="right">{Letter}</h1></BoxWord>
            )}
          
            else{
                return(
                    <BoxWord></BoxWord>
                )
            }
        }
            

            
            
        )
    
        }
        
    </AllBoxWord>
  )
}

export default WordBox