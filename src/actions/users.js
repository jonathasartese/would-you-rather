export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_QUESTION_TO_USER = 'ADD_QUESTION_TO_USER'
export const ADD_ANSWER_TO_USER = 'ADD_ANSWER_TO_USER'

export function receiveUsers(users){
    return {
        type: RECEIVE_USERS,
        users,
    }
}

export function addQuestionToUser(userid, questionid){
    return {
        type: ADD_QUESTION_TO_USER,
        userid,
        questionid,
    }
}

export function addAnswerToUser(userid, questionid, answer){
    return {
        type: ADD_ANSWER_TO_USER,
        userid,
        questionid,
        answer,
    }
}

//handle ADD_QUESTION_TO_USER
//handle ADD_ANSWER_TO_USER