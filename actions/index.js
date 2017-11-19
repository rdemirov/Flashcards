import actionTypes from './actionTypes'
import {fetchDecks,fetchDeck,saveDeckTitle,addCardToDeck} from '../utils/api'


const getDecks = (decks) => ({
	type: actionTypes.GET_DECKS,
	decks
});

export const getDecksAsync = (params) => dispatch => (
	fetchDecks(params)
		.then(decks => dispatch(getDecks(decks)))
);