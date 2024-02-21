import "./App.css";
import { def } from "./Data/definitions";

import { useState, useEffect } from "react";
import Term from "./Components/Term";
import Article from "./Components/Article";


function App() {
  const [glossary, setGlossary] = useState(def);

  const [current, setCurrent] = useState(0);

  function CallBack(index) {
    setCurrent(index);
  }

  return (
    <div className="App">
      <div id="left">

        <h3>Interactive Glossary</h3>

        {glossary.map((option, index) => {
          return <Term keyno={index} action={CallBack} label={option.term} />;
        })}
      </div>
      <div id="right">
        <Article label={glossary[current]} />
      </div>
    </div>
  );
}

export default App;
