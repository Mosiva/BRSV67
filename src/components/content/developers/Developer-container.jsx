import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getDevelopers } from '../../../redux/redux-store/developers-reducer'
import { Card, ListGroup, CardDeck } from 'react-bootstrap';
import { getDevelopersReselect } from './Developer-selector';

export const DeveloperContainer = () => {

  const developers = useSelector(getDevelopersReselect)
  const dispatch = useDispatch();
  

  useEffect(() => { 
    dispatch(getDevelopers()); 
  }, [])


  return (
    <div>
      <CardDeck>
  
          {developers.map(d =>
            <React.Fragment key={d.id}>

              <Card
                bacground="dark"
                style={{ width: '18rem' }}
                className="mb-2"
              >
                <Card.Header>{d.name}</Card.Header>
                <Card.Body>
                  <Card.Title> {d.position} </Card.Title>
                  <ListGroup>
                    <ListGroup.Item>  Speaking language: {d.speaklang}</ListGroup.Item>
                    <ListGroup.Item>  Programing language: {d.proglang}</ListGroup.Item>
                    <ListGroup.Item>  Libraries: {d.libraries}</ListGroup.Item>
                    <ListGroup.Item>  Additional platform: {d.platformtechnology}</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>

            </React.Fragment>
          )}
      </CardDeck>
    </div>
  )
}