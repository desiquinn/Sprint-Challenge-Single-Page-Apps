import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from "./CharacterCard";
import { Grid } from 'semantic-ui-react';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    axios.get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        // console.log(response.data.results)
        setCharacters(response.data.results)
      })
      .catch(error => console.log("DOING IT WRONG:", error))
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);


  return (
  
    <section className='character-list grid-view'>
      <div>
        <Grid centered columns={2} divided>
          {characters.map((character) => {
            
            return <CharacterCard 
              image={character.image}
              name={character.name}
              species={character.species}
              status={character.status}
              location={character.location.name}
              origin={character.origin.name}
              key={character.name}
            />
          })}
        </Grid>
      </div>
    </section>
  )
}