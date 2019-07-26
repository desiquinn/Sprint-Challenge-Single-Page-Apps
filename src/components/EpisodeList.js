import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function EpisodeList() {
  // TODO: Add useState to track data from useEffect
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    axios.get("https://rickandmortyapi.com/api/episode/")
      .then(response => {
        console.log(response.data.results)
        setEpisodes(response.data.results)
      })
      .catch(error => console.log("DOING IT WRONG:", error))
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return <section className='episode-list grid-view'>

      <h2>TODO: `array.map()` over your state here!</h2>
    </section>

}