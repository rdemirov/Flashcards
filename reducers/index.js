import actionTypes from '../actions/actionTypes'

const defaultState ={
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    }
  };

const reducer = (state=defaultState,action) => {
  switch(action.type) {
    case actionTypes.GET_DECKS: 
      if(action.decks) return action.decks;
      else return defaultState
  }
    return state;
}

export default reducer;