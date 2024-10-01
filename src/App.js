import React,{useState} from 'react'
import './App.css'
import { useContext } from 'react'
import { QuizeContext ,scoreContext} from './Helpers/Contexts'


import MainMenu from "./components/MainMenu"
import EndScreen from './components/EndScreen'
import Quize from './components/Quize'




 const  App= () => {
   const [game,setGame]=useState('menu')
   const [score,setScore]=useState(0)



  return (
    <div className='App'>


      <QuizeContext.Provider value={{ game: [game, setGame], score: [score, setScore] }}>
      {game==='menu' && <MainMenu/>}
{game==='quize' && <Quize/>}
{game==='endscreen' && <EndScreen/>}




      </QuizeContext.Provider>


    </div>
  )
}


export default App;