import { saveQuestion , saveQuestionAnswer} from '../utils/api'
import { hideLoading } from 'react-redux-loading-bar'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'


export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}

export function handleAddQuestion (optionOne, optionTwo) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    return saveQuestion({
      optionOneText: optionOne,
      optionTwoText: optionTwo,
      author: authedUser,
    })
      .then((question) => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()))
  }
}

function answerQuestion ( info) {
const{authedUser, qid, answer} = info

  return{
    type: ANSWER_QUESTION,
    authedUser,
    qid,
    answer
  }
}

export function handleAnswerQuestion (info) {
  return (dispatch) => {

    return saveQuestionAnswer({
      authedUser: info.authedUser,
      qid: info.qid,
      answer: info.answer,
    })
      .then((res) => dispatch(answerQuestion(res)))
      .then(() => dispatch(hideLoading()))
  }
}