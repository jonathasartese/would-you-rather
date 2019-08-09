import { RECEIVE_USERS, ADD_ANSWER_TO_USER, ADD_QUESTION_TO_USER } from '../actions/users'

export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
    case ADD_QUESTION_TO_USER :
      const authedUser = action.question.author
      const question = action.question
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          questions: state[authedUser].questions.concat(question)
        }
      }
    case ADD_ANSWER_TO_USER :
      return {
        ...state,
        [action.authedUser.authedUser]: {
          ...state[action.authedUser.authedUser],
          answers: {
            ...state[action.authedUser.authedUser].answers,
            [action.authedUser.qid]: action.authedUser.answer
          }
        }
      }
    default :
      return state
  }
}