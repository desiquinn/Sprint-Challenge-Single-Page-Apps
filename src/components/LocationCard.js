import React from 'react'
import { Card, Button } from "semantic-ui-react"

export default function LocationCard ({ name, type, dimension, residents }) {
  
  return (
    <span>
      <Card>
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>
            <span className='date'>{type} {dimension}</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Button floated='right'>
            Residents
            </Button>
          </a>
        </Card.Content>
      </Card>
    </span>
  )
}
