import React, {useEffect, useState} from 'react';
import SpaceFlight from './SpaceFlight';

import axios from 'axios';

function App() {
  const [flights, setFlights] = useState([])

  useEffect(() => {
    axios
    .get('https://api.spacexdata.com/v2/launches')
    .then((res) =>{
      setFlights(res.data)
    })
    .catch((err) => {
      console.log("error while fetching from the spaceX api: ", err)
    })
  },[])
  //
  return  (
    <div>
      <h1>SpaceX Flight</h1>
      <SpaceFlight/>
    </div>
  )

   
 
}

export default App;
