import { AsyncStorage } from 'react-native'
import { APP_STORAGE_KEY } from './keys'

export function getDecks () {
  return AsyncStorage.getItem(APP_STORAGE_KEY)
    .then((rawState) => {
      const state = JSON.parse(rawState);
      return state && state['decks'] ? Object.values(state['decks']) : [];
    })
}

export function getCards (deckId) {
  return AsyncStorage.getItem(APP_STORAGE_KEY)
    .then((rawState) => {
      const state = JSON.parse(rawState);
      const cards = state && state['cards'] ? Object.values(state['cards']) : [];
      
      return cards.filter((card) => card.deckId === deckId);
    })
}

export function addCard (card) {
  return AsyncStorage.mergeItem(APP_STORAGE_KEY, JSON.stringify({
    cards: {
      [card.id]: card
    }
  }))
}

export function addDeck (deck) {
  return AsyncStorage.mergeItem(APP_STORAGE_KEY, JSON.stringify({
    decks: {
      [deck.id]: deck
    }
  }))
}