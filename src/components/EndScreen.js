import { useContext,useEffect,useState } from 'react'
import React from 'react'
import html2pdf from 'html2pdf.js'
import { QuizeContext } from '../Helpers/Contexts'
import axios from 'axios'

function EndScreen() {


const{game,score}=useContext(QuizeContext)
  const [gameState,setGameState]=game
  const [scoreState,setScore]=score
 const[examName,setExam]=useState('')



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://raw.githubusercontent.com/1-abesh-1/questions-for-quize-app-react/refs/heads/main/certificateFor');
        setExam(response.data);
  
      } catch (error) {
        alert(error.message)
      } 
    };

    fetchData();
  });

  return (
    <div className='certificate'>
      
      <div id="download" ><center>
    <h1>🆀🆄🅸🆉🅴</h1> <p>𝔚𝔢 𝔠𝔢𝔯𝔱𝔦𝔣𝔶 𝔱𝔥𝔞𝔱 𝔱𝔥𝔦𝔰 𝔠𝔞𝔫𝔡𝔦𝔡𝔞𝔱𝔢 𝔴𝔥𝔬𝔰𝔢 𝔫𝔞𝔪𝔢 𝔦𝔰 {sessionStorage.getItem('name')} <br/>𝔓𝔞𝔯𝔱𝔦𝔠𝔦𝔭𝔞𝔱𝔢𝔡 𝔦𝔫 𝔱𝔥𝔢 {examName} 𝔬𝔟𝔱𝔞𝔦𝔫𝔦𝔫𝔤 𝔰𝔠𝔬𝔯𝔢&nbsp;{scoreState}/{sessionStorage.getItem('full')}.<br/>
    𝔉𝔬𝔯 𝔯𝔢𝔤𝔞𝔯𝔡𝔦𝔫𝔤 𝔞𝔲𝔱𝔥𝔬𝔯𝔦𝔱𝔶 𝔦𝔱'𝔰 𝔶𝔬𝔲𝔯 𝔴𝔦𝔩𝔩 <br/>𝔱𝔬 <br/> 𝔠𝔬𝔫𝔰𝔦𝔡𝔢𝔯 𝔱𝔥𝔦𝔰 𝔠𝔞𝔫𝔡𝔦𝔡𝔞𝔱𝔢 𝔦𝔣 𝔱𝔥𝔢 𝔰𝔠𝔬𝔯𝔢 𝔪𝔢𝔢𝔱𝔰 𝔶𝔬𝔲𝔯 ℜ𝔢𝔮𝔲𝔦𝔯𝔢𝔪𝔢𝔫𝔱𝔰</p><br/><br/>
    <p>_______________<br/>🅘🅝🅥🅘🅖🅘🅛🅐🅣🅞🅡</p></center>
</div>
  <center><button onClick={()=>html2pdf().from(document.getElementById('download')).save()}>download a copy</button>
</center>
    </div>
  )
}

export default EndScreen