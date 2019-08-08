import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAnswerQuestion} from '../actions/questions'
import { formatQuestion } from '../utils/helpers'
import { Button, Form } from 'react-bootstrap'


class QuestionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          choose: '',
        }
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleInputChange = (e) => {
        this.setState({
          choose: e.target.value
        });
      }
    
      handleSubmit = (e, id) => {
        e.preventDefault();
        const {dispatch , question , authedUser} = this.props
        const answer = this.state.choose
    
        dispatch(handleAnswerQuestion({
          authedUser: authedUser,
          qid: question.id,
          answer: answer,
        }))

        this.props.history.push(`/results/${id}`)
      }
      render() {
        const { question } = this.props
        const {
            name, avatar, optionOne, optionTwo 
        } = question

        return (
            <div className='tweet'>
                <img 
                    src={avatar}
                    alt={`Avatar of ${name}`}
                    className='avatar'
                />
                <div className='tweet-info'>
                  <h2 className='center'>{name}</h2>
                  <h3>Would you rather...</h3>
                  <div>
                    <p class="container-radio">
                      <Form.Check 
                        type='radio' 
                        value="optionOne" 
                        checked={this.state.choose === "optionOne"} 
                        onChange={this.handleInputChange}
                        label={optionOne.text}/>
                      
                    </p>
                    <p class="container-radio">
                      <Form.Check 
                        type='radio' 
                        value="optionTwo"
                        checked={this.state.choose === "optionTwo"}
                        onChange={this.handleInputChange}
                        label={optionTwo.text}/>
                    </p>
                  </div>
                  <Button 
                    className='btn' 
                    type='submit' 
                    onClick={(e) => this.handleSubmit(e, question.id)}>
                    Submit
                    </Button>
                </div>
            </div>
        )
      }
    }
    
    function mapStateToProps ({authedUser, users, questions}, props) {
      const { id } = props.match.params
      const question = questions[id]
      
      return {
        authedUser,
        question: question
          ? formatQuestion(question, users[question.author], authedUser)
          : null
      }
    }
    export default connect(mapStateToProps)(QuestionPage)
    