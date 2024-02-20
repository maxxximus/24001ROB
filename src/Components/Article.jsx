
import { useState } from 'react';
import './Article.css';


function Article(props) {

  const [answer, setAnswer] = useState(); // becomes submitted answer
  const [input, setInput] = useState(""); // updates on enrt of text input
  const [correct, setCorrect] = useState(null)

  
  function onAttempt(attempt){
 
    if(props.label.quiz.checkAnswer(attempt)){
     setCorrect(true)
    }else{
      setCorrect(false)
 
 
   }
  }




  const submitAnswer = () => {
    if (input.trim() !== "") {
      setAnswer(input.trim().toLowerCase());
      setInput("");
      onAttempt(input.trim().toLowerCase())
    }
  };

  const quizresponse = correct ? `CORRECT`:`INCORRECT`

  return (
  < >
    <h3>{props.label.term.toUpperCase()}</h3>
    <p>{props.label.description}</p>

   <img src={props.label.image} alt="" /> 
   <p>{props.label.quiz.question}</p>
 

   <div className="todo-input">
        <input
          type="text"
          placeholder="Please submit an answer"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={submitAnswer}>Submit</button>
      </div>
    
    
      <p>DEBUGGING ONLY:{props.label.quiz.correctAnswer}</p>
      <p>Answer submitted: "{answer}"</p>
     {quizresponse}


</>
  );
}

export default Article;
