import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion} from '../actions/questions'
import { Redirect } from 'react-router-dom'

class NewQuestion extends Component {
    state ={
        text1: '',
        text2: '',
    }

    handleChange = (e) => {
        const text = e.target.value
    
        this.setState(() => ({
          text
        }))
    }
    handleSubmit = (e) => {
        e.preventDefault()

        const { text1 } = this.state.text1
        const { text2 } = this.state.text2
    
        this.setState(() => ({
            text1: '',
            text2: ''
        }))
    }

  render() {
      const {text1} = this.state.text1
      const {text2} = this.state.text2

    return (
      <div>
        <h3 className='center'>Compose new Question</h3>
        <form className='new-tweet' onSubmit={this.handleSubmit}>
            <textarea 
                placeholder="Option 1"
                value={text1}
                onChange={this.handleChange}
                className='textarea'
                maxLength={100}
            />
            <p></p>
            <textarea 
                placeholder="Option 2"
                value={text2}
                onChange={this.handleChange}
                className='textarea'
                maxLength={100}
            />
            <button
            className='btn'
            type='submit'
            disabled={text1 === '' && text2 === ''}>
                Submit
            </button>
        </form>
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