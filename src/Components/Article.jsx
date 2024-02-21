
import { useState, useEffect } from 'react';
import '../Article.css';


function Article(props) {

  const [answer, setAnswer] = useState(""); // submitted answer
  const [input, setInput] = useState(""); // updates on enrt of text input
  const [correct, setCorrect] = useState("")



  
  function onAttempt(attempt){
 
    if(props.label.quiz.checkAnswer(attempt)){
     setCorrect("CORRECT")
    
    }else{
      setCorrect("INCORRECT")
 
 
   }
  }





  const submitAnswer = () => {
    if (input.trim() !== "") {
      setAnswer(input.trim().toLowerCase());
      setInput("");
      onAttempt(input.trim().toLowerCase())
    }
  };


  return (
  <div id="article" >
  
    <h3 id="term">{props.label.term.toUpperCase()}</h3><div></div>
    <p id ="def"><span className='bold'>Definition: </span>{props.label.description}</p>

   <img id="image" src={props.label.image} alt={props.label.term} /> 
{/* 

   <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img id="image" src={props.label.image} />
    </div>
    <div className="flip-card-back">
      <h1>John Doe</h1> 
      <p>Architect & Engineer</p> 
      <p>We love that guy</p>
    </div>
  </div>
</div> */}

 

 
   
   <div id="quiz">
<p>Take a quiz...</p>
   <p className='bold'>{props.label.quiz.question}? </p>
        <input
          type="text"
          placeholder="Please submit an answer"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={submitAnswer}>Submit</button>
      
    
    
      {/* <p>DEBUGGING answer:{props.label.quiz.correctAnswer}</p>
  <p>Answer submitted: "{answer}"</p> */}
 <p className="w3-container w3-red">{answer && ( correct)}</p> 
     </div>

</div >
  );
}

export default Article;
