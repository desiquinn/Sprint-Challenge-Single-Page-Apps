import React from 'react';
import { Card, Image, Icon} from "semantic-ui-react";

export default function CharacterCard (props) {
  // image={image}
  const {image, name, species, status, location, origin} = props
  // console.log(name)

  return (<span>
    <Card>
      <Image src={image} alt={name} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span className='date'>{species} - {status}</span>
        </Card.Meta>
        <Card.Description>
          Location: {location}
        </Card.Description>
        <Card.Description>
          Origin: {origin}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          Location
        </a>
      </Card.Content>
    </Card>
    
  </span>)
}
