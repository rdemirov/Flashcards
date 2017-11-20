import actionTypes from '../actions/actionTypes'

const defaultState = {};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_DECKS:
      if (action.decks) return { ...action.decks };
      else return defaultState
    case actionTypes.SAVE_DECK_TITLE:
      {
        const { title } = action.params;

        return {
          ...state,
          [title]: {
            title,
            questions: []
          }
        }
      }
  }
  return state;
}


export default reducer;