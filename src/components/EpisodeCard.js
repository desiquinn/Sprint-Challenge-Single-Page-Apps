import React from 'react'
import { Card } from "semantic-ui-react"

export default function EpisodeCard (props) {
  // image={image}
  const {name, airdate, episode, characters} = props
  // console.log(name)

  return (
    <span>
      <Card>
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>
            <span className='date'>{episode} {airdate}</span>
          </Card.Meta>
        </Card.Content>
      </Card>
    </span>
  )
}
