
// import { useState } from 'react';
// import './App.css';
// import TripList from './components/TripList/index.js'


// function App() {
  
//   let [show,setShow] = useState(true);

//   return (
//     <>
//       <button onClick={()=>setShow(false)}>Hite Trips</button>
//       {show && <TripList/>}
//     </>
    
//   );
// }

// export default App;


//C6ep37
import { useEffect, useState } from 'react';
import './App.css';
import TripList from './components/TripList/index.js'


function App() {
  
  let [data,setData] = useState('my data');

  let myFunction=()=>{
    setData('update Data'); //render->stop because of same date.
  }

  useEffect(()=>{
    myFunction();
    console.log('running');
  },[myFunction])

  return (
    <>
     <h1>{data}</h1>
     <TripList/>
    </>
    
  );
}

export default App;

//data = 'my data' -> first render
//data = 'update data' -> seconder render