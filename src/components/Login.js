import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Card, Button } from 'react-bootstrap'
import { handlesetAuthedUser } from '../actions/authedUser';

class Login extends Component {
    constructor(props) {
        super(props);
    
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (e, id) => {
        e.preventDefault();
        const {dispatch  } = this.props
        const authedUser = e.target.id
        console.log('login', authedUser)
        dispatch(handlesetAuthedUser({
          authedUser,
        }))

        this.props.history.push(`/`)

      }
  render() {
    const { usersIds, users} = this.props
    return (
        <div> 
        <h1 className='center'> Login </h1>
        <Row>
        {usersIds.map((id) => (
            <Col key={id}>
                <Card style={{ width: '18rem' }} value={users[id].id}>
                    <Card.Img 
                    variant="top" 
                    src={users[id].avatarURL} 
                    alt={`Avatar of ${users[id].name}`} 
                    />
                    <Card.Body>
                        <Card.Title>{users[id].name}</Card.Title>
                        <Button 
                        id={users[id].id}
                        variant="primary"
                        type='submit' 
                        onClick={(e) => this.handleSubmit(e, id)}>
                        Login
                        </Button>
                    </Card.Body>
                </Card>
            </Col>
        ))}
        </Row>
        </div>
    )
  }
}

function mapStateToProps ({ users  }) {
    return {
        usersIds: Object.keys(users),
        users: users
    }
    
  }

export default connect(mapStateToProps)(Login)
