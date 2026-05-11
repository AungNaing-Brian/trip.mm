
import { useState } from 'react';
import './App.css';
import TripList from './components/TripList/index.js'


function App() {
  
  let [show,setShow] = useState(true);

  return (
    <>
      <button onClick={()=>setShow(false)}>Hite Trips</button>
      {show && <TripList/>}
    </>
    
  );
}

export default App;
