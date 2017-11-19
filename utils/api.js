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
      .then((decks) => {
          return JSON.parse(decks)[deckId];
      })
  }
  

export function saveDeckTitle ({ title }) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    title: {
        title,
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
