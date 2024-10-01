import React,{useContext,useState} from 'react'
import { QuizeContext } from '../Helpers/Contexts'

function MainMenu() {
const{game,score}=useContext(QuizeContext)
const [gameState,setGameState]=game
const [name,setName]=useState('')


  return (
    <div className='Menu'>


<h1>🆀🆄🅸🆉🅴 </h1>
<input type='text' placeholder='name please' onChange={(e)=>setName(e.target.value)}></input>

        <button onClick={()=>{
           if(name===''){
            alert('plz provide your name')
           }else{
sessionStorage.setItem('name',name)
            setGameState('quize')
           }
           
        }}>Start</button>
        
        </div>
  )
}

export default MainMenu