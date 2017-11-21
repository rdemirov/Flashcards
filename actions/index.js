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

const getDeck = (deck) => ({
	type: actionTypes.GET_DECK,
	deck
});

export const getDeckAsync = (params) => dispatch => (
	fetchDeck(params)
		.then(deck => dispatch(getDeck(deck)))
);

const storeDeckTitle = (params) => ({
	type: actionTypes.SAVE_DECK_TITLE,
	params
});

export const saveDeckTitleAsync = (params) => dispatch => (
	saveDeckTitle(params)
		.then(() => dispatch(storeDeckTitle(params)))
);

const addNewCard = (params) => ({
	type: actionTypes.ADD_CARD_TO_DECK,
	params
});

export const addCardToDeckAsync = (params) => dispatch => (
	addCardToDeck(params)
		.then(result => dispatch(addNewCard(params)))
);