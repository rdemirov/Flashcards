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
        const { title,id} = action.params;

        return {
          decks: {
            ...state.decks,
            [id]: {
              title,
              questions: []
            }
          },
          selectedDeck:{...state.selectedDeck}
        }
      }
    case actionTypes.ADD_CARD_TO_DECK: {
      const {deckId,card} = action.params;
      return {
      decks:{   ...state.decks,
         [deckId]:{
                ...state.decks[deckId],
                questions:[
                  ...state.decks[deckId].questions,
                  card
                ]
         }}
      }
    }
  }
  return state;
}


export default reducer;