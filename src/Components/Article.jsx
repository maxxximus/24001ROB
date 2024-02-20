
import { useState } from 'react';
import './Article.css';


function Details1(props) {




  return (
  < >
    <h3>{props.label.term.toUpperCase()}</h3>
    <p>{props.label.description}</p>

   <img src={props.label.image} alt="" /> 
   <p>{props.label.quiz.question}</p>
</>
  );
}

export default Details1;
