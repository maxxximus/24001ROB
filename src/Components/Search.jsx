import React, { useState} from "react";


function Search(props) {

  const submitAnswer = () => {
    if (props.input1.trim() !== "") {
        props.actionAnswer(props.input1.trim().toLowerCase());
        props.actionInput("");
    }
  };


// search
  return (
    <div className="searchform">
      <div >
       
        <input
          type="text"
          placeholder="Search definitions"
          value={props.input1}
          onChange={(e) => props.actionInput(e.target.value)}
        />
        <button onClick={submitAnswer}>Search</button>
    


      </div>
      <p>{props.answer1 !="" ? `Definition: ${props.answer1}` : ""}</p>
  
    </div>
  );
}


export default Search;