import { Used,LetterUseds } from "./styleLetterUsed"

const LetterUsed = ({used}) => {

  return (
    <Used>
        Letras usadas:
        <div>
            {used.map((value)=>{
                return(
                    <LetterUseds>
                        {value} -
                    </LetterUseds>)
            })}
        </div>
        
    </Used>
  )
}

export default LetterUsed