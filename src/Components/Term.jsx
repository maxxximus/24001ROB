


function Term(props) {

// parent - App.js


  return (<>

<button  onClick={()=>{props.action(props.keyno)}}  id={props.keyno} className='butt'>{props.label}</button>

</>
  );
  
}

export default Term;





