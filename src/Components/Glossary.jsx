
import './Glossary.css';
import Details from '../Models/Details';
import { useState, useEffect } from 'react';

import Term from './Term';
function Glossary() {





    const [glossary, setGlossary] = useState([
        new Details("function", "full description1", "image src"),
        new Details("variable", "full description2", "image src"),
        new Details("props", "full description3", "image src"),
        new Details("Usestate", "full description4", "image src"),
      ])
    
    
  return (
    <div id="main">{glossary.map((option) => {
        return ( 
          <Term label={option.term}
        //   action={()=> onAttempt(option)}
        //   increase ={setCounter}
          />
        )
      })}</div>

  );
}

export default Glossary;
