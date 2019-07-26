import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function LocationsList() {
   // TODO: Add useState to track data from useEffect
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    axios.get("https://rickandmortyapi.com/api/location/")
      .then(response => {
        console.log(response.data.results)
        setLocations(response.data.results)
      })
      .catch(error => console.log("DOING IT WRONG:", error))
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return <section className='location-list grid-view'>

  <h2>TODO: `array.map()` over your state here!</h2>
</section>


}
