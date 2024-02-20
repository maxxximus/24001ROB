
import './App.css';

import Details from './Model/Details';
import { useState, useEffect } from 'react';
import Term from './Components/Term';
import Details1 from './Components/Article';
import Question from './Model/Question';

function App() {

  const [glossary, setGlossary] = useState([
    new Details("function", `A JavaScript function is a block of code designed to perform a particular task.A JavaScript function is executed when "something" invokes it (calls it).
    `, "https://global.discourse-cdn.com/sitepoint/optimized/3X/a/e/ae5919fb02e7e1773dc33fdbd5db869183bff20c_2_1035x588.jpeg", 
    new Question("what", ["1","2","3"], "4")),
    new Details("variable", `Variables are Containers for Storing Data. JavaScript Variables can be declared using var, let and const`,
     "https://miro.medium.com/v2/resize:fit:828/format:webp/1*2X5JdJr-mR62llsnX2VrzA.png", 
     new Question("what", ["1","2","3"], "4")),
    new Details("props", `arguments passed into React components. Props are passed to components via HTML attributes.
    `, "https://miro.medium.com/v2/resize:fit:828/format:webp/1*H5Bao06wMbFJX1ILLd6QJA.png", 
    new Question("what", ["1","2","3"], "4")),
    new Details("Usestate", "full description4", "image src", 
    new Question("what", ["1","2","3"], "4")),
    new Details("hooks", "full description5", "image src", new Question("what", ["1","2","3"], "4")),
    new Details("react", "full description6", "image src", new Question("what", ["1","2","3"], "4")),
    new Details("hash", "full description7", "image src" , new Question("what", ["1","2","3"], "4")),
  ])

  const [current, setCurrent] = useState(0)

  console.log(glossary);

  function CallBack (index){

setCurrent(index)

}



  return (
    <div className="App">
   
<div id="left" >{current}<h3>Interactive Glossary</h3>

{glossary.map((option, index) => {
            return ( 
              <Term keyno={index} action={CallBack} label={option.term}
              />
           
            
            )
          })}
     

     </div>
     <div id="right">

    
              <Details1 label={glossary[current]}  />
           
            
        


     </div>




  

  
    </div>
  );


}

export default App;
