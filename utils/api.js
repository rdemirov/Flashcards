import { AsyncStorage } from 'react-native'

const DECKS_STORAGE_KEY = 'flashcards:decksStorage'

export function fetchDecks () {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((decks) => {
        return JSON.parse(decks);
    })
}

export function fetchDeck ({deckId}) {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
      .then((deck) => {
          return JSON.parse(deck)[deckId];
      })
  }
  

export function saveDeckTitle ({ title,id }) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [id]: {
        title:title,
        questions:[]
    }
  }))
}

export function addCardToDeck ({ deckId, card }) {
    const {question,answer} = card;
    return AsyncStorage.mergeItem(DECKS_STORAGE_KEY,JSON.stringify({
        [deckId]:{
                    questions:[{
                        question,
                        answer
                    }]
        }
    }))
  }
