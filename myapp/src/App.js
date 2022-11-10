//react
import { useState } from "react";

//styled
import GlobalStyle from "./globalStyled";

//components
import Game from "./components/game/Game";
import InicialScreen from "./components/inicialScreen/InicialScreen";
import OverScreen from "./components/gameOverScreen/OverScreen";

const App = ()=> {

//stages
const [screen, setScreen] = useState('inicial')

  return (
    <> 
      <GlobalStyle/>
      {screen === 'inicial' && <InicialScreen setScreen={setScreen}/>}
      {screen === 'game' && <Game/>}
      {screen === 'over' && <OverScreen setScreen={setScreen}/>}
    </>
  );
}

export default App;
