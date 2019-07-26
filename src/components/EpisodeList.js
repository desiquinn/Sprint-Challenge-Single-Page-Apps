import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EpisodeCard from "./EpisodeCard";
import { Grid } from "semantic-ui-react";

export default function EpisodeList() {
  // TODO: Add useState to track data from useEffect
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    axios.get("https://rickandmortyapi.com/api/episode/")
      .then(response => {
        // console.log(response.data.results)
        setEpisodes(response.data.results)
      })
      .catch(error => console.log("DOING IT WRONG:", error))
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return <section className='episode-list grid-view'>

      <div>
        <Grid centered columns={2} divided>
        {episodes.map((episode) => {
          
         return <EpisodeCard 
            name={episode.name}
            airdate={episode.air_date}
            episode={episode.episode}
            characters={episode.chracters}
            key={episode.name}
            />
        })}
        </Grid>
      </div>
    </section>

}