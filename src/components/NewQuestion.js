import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion} from '../actions/questions'
import { Redirect } from 'react-router-dom'
import { Button , Form} from 'react-bootstrap'

class NewQuestion extends Component {
    state ={
        optionOne: '',
        optionTwo: '',
        toHome: false,
    }

    handleChange = (e) => {
      this.setState({ [e.target.id]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { optionOne, optionTwo } = this.state
        const {dispatch} = this.props
         
        dispatch(handleAddQuestion(optionOne, optionTwo))
    
        this.setState(() => ({
          optionOne: '',
          optionTwo: '',
          toHome: true,
        }))
    }

  render() {
      const {optionOne, optionTwo, toHome} = this.state
      const isdisabled = optionOne === '' || optionTwo === ''

      if(toHome === true) {
        return <Redirect to='/' />
      }

    return (
      <div>
        <h3 className='center'>Create New Question</h3>
        <p>Complete the question:</p>
        <h3>Would you rather ...</h3>
        <Form className='new-tweet' onSubmit={this.handleSubmit}>
            <Form.Control 
                id="optionOne"
                placeholder="Enter Option One Text Here"
                value={optionOne}
                onChange={this.handleChange}
                className='textarea'
                maxLength={100}
                required
            />
            <h3 className='center'>or</h3>
            <Form.Control 
                id="optionTwo"
                placeholder="Enter Option Two Text Here"
                value={optionTwo}
                onChange={this.handleChange}
                className='textarea'
                maxLength={100}
                required
            />
            <p></p>
            <Button
            className='btn'
            type='submit'
            disabled={isdisabled}>
                Submit
            </Button>
        </Form>
      </div>
    )
  }
}

export default connect()(NewQuestion) 

/*

  handleSubmit = (e) => {
    e.preventDefault()


        const { text, toHome } = this.state
    

    if (toHome === true) {
        return <Redirect to='/' />
      }

    const tweetLeft = 280 - text.length


    const { text } = this.state
    const { dispatch, id } = this.props

    dispatch(handleAddTweet(text, id))

    this.setState(() => ({
        text: '',
        toHome: id ? false : true,
    }))
  }
        <form className='new-tweet' onSubmit={this.handleSubmit}>
          <textarea
            placeholder="What's happening?"
            value={text}
            onChange={this.handleChange}
            className='textarea'
            maxLength={280}
          />
          {tweetLeft <= 100 && (
            <div className='tweet-length'>
              {tweetLeft}
            </div>
          )}
          <button
            className='btn'
            type='submit'
            disabled={text === ''}>
              Submit
          </button>
        </form>
        */