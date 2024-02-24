


function Term(props) {

// parent - App.js


  return (<>

<button key={props.keyno}  onClick={()=>{props.action(props.keyno)}} className='butt'>{props.label}</button>

</>
  );
  
}

export default Term;





