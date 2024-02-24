import "./App.css";
import { def } from "./Data/definitions";

import { useState, useEffect } from "react";
import Term from "./Components/Term";
import Article from "./Components/Article";
import Search from "./Components/Search";

function App() {
  const [glossary, setGlossary] = useState(def);

  const [current, setCurrent] = useState(-1);  // initial current set to -1 to render intro page

  const [answer1, setAnswer1] = useState(""); // becomes submitted answer
  const [input1, setInput1] = useState(""); // updates on enrt of text input

  //   function startsWith(wordToCompare) {
  //     return function(element) {
  //         return element.term === wordToCompare;
  //     }
  // // }
  // console.log("kkkkkk", glossary.findIndex(startsWith(answer1)));

  useEffect(() => {
    function startsWith(wordToCompare) {
      return function (element) {
        return element.term.toLowerCase().trim() === wordToCompare;
      };
    }

    let c = glossary.findIndex(startsWith(answer1));
    console.log("cc", c);

    setCurrent(c > -1 ? c : current);
    if (answer1 != "") {
      setAnswer1(c > -1 ? answer1 : "Not Found");
    }
  }, [answer1]);

  // function findIndex(search1){
  //   let newArr = glossary.reduce(function(acc, curr, index) {
  //     if (curr.term == search1) {
  //       acc+=index;
  //     }
  //     return acc;
  //   }, 0);
  //   return newarr

  // }

  /**
   * used as callback/setter for setCurrent from <Term /> component
   * @param {number} index
   */
  function CallBack(index) {
    setCurrent(index);
  }

  return (
    <div className="App">
      <div id="left">
        {/* {current}{answer1} */}
        <h3>Interactive Glossary</h3>

        <Search
          actionInput={setInput1}
          actionAnswer={setAnswer1}
          input1={input1}
          answer1={answer1}
        />

        {glossary.map((option, index) => {
          return <Term keyno={index} action={CallBack} label={option.term} />;
        })}
      </div>


{/* Right side - definitions page/ Article.jsx */}

      <div id="right">
        <Article label={glossary[current]} currentpage={current} fulldef={glossary} />
      </div>
    </div>
  );
}

export default App;
