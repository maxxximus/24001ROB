import { useState } from "react";


function Term(props) {
const [desc, setDesc]= useState("")
const [current, setCurrent] = useState({})
const [showResults, setShowResults] = useState(false)
const onClick = () => setShowResults(true)



  return (<>

<button  onClick={()=>{props.action(props.keyno)}}  id={props.keyno} className='butt'>{props.label}</button>

</>
  );
  
}

export default Term;





