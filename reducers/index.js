import actionTypes from '../actions/actionTypes'

const defaultState = {
  decks: {},
  selectedDeck: {}
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_DECKS:
      if (action.decks) return { decks: { ...action.decks },selectedDeck:{...state.selectedDeck} };
      else return defaultState
    case actionTypes.SAVE_DECK_TITLE:
      {
        const { title } = action.params;

        return {
          decks: {
            ...state.decks,
            [Date.now()]: {
              title,
              questions: []
            }
          },
          selectedDeck:{...state.selectedDeck}
        }
      }
    case actionTypes.GET_DECK: {
      return {
        ...state,
        selectedDeck:action.deck
      }
    }

    case actionTypes.RESET_SELECTED_DECK: {
      return {
        ...state,
        selectedDeck:{}
      }
    }
  }
  return state;
}


export default reducer;