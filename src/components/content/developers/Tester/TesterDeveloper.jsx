import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTestDevelopers  } from '../../../../redux/redux-store/developers-reducer'
import { Card, ListGroup } from 'react-bootstrap';
import { getDevelopersReselect} from '../Developer-selector';



class TesterDeveloper extends Component {
  componentDidMount() {
    this.props.getTestDevelopers ()

  }
  render() {
    const { developers } = this.props.developers
    console.log(developers)


    return (
      <div>
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
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ developers: getDevelopersReselect(state)})

export default connect(mapStateToProps, { getTestDevelopers  })(TesterDeveloper)