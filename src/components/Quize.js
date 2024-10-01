import React,{useContext,useEffect,createContext,useState} from 'react'
import { QuizeContext } from '../Helpers/Contexts'
//import { questions } from '../Helpers/QuestionBak'
import axios from 'axios'


function Quize() {
  const{game,score}=useContext(QuizeContext)
  const [gameState,setGameState]=game
  const [scoreState,setScoreState]=score
  const [questions,setQuestions]=useState([])
  const [currentQuestion,setCurrentQuestion]=useState(0)


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://raw.githubusercontent.com/1-abesh-1/questions-for-quize-app-react/refs/heads/main/questions');
        setQuestions(response.data);
        sessionStorage.setItem('full',response.data.length)
      } catch (error) {
        alert(error.message)
      } 
    };

    fetchData();
  });



const submit=(value)=>{

if(questions.length===currentQuestion+1){

  if(value===questions[currentQuestion].answer){
    setScoreState(scoreState+1)
    setTimeout(function() {
      setGameState('endscreen')
    }, 100);
  
  }else{
    setGameState('endscreen')
  }



  setScoreState(scoreState+1)
 
}else{
if(value===questions[currentQuestion].answer){
  setScoreState(scoreState+1)
  setTimeout(function() {
    setCurrentQuestion(currentQuestion+1)
  }, 100);

}else{
  setCurrentQuestion(currentQuestion+1)
}
}






}


  return (
    <div className='Quize'>

{!questions.length?<h6>questions are being cooked...</h6>:<center>
 <h6>{questions[currentQuestion].question}</h6>
<div className='options'>
 <button onClick={()=>submit('A')}>{questions[currentQuestion].A}</button><br/>
 <button onClick={()=>submit('B')}>{questions[currentQuestion].B}</button><br/>
<button onClick={()=>submit('C')}>{questions[currentQuestion].C}</button><br/>
<button onClick={()=>submit('D')}>{questions[currentQuestion].D}</button><br/>

</div>
</center>}
      
  
 
</div>
  )


  
}
 
export default Quize;