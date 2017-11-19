import actionTypes from '../actions/actionTypes'

const defaultState ={};

const reducer = (state=defaultState,action) => {
  switch(action.type) {
    case actionTypes.GET_DECKS: 
      if(action.decks) return action.decks;
      else return {}
  }
    return state;
}

export default reducer;