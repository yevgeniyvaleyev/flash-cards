import { DECK_ADDED, DECKS_FETCHED } from '../actions/types';

const decksItitState = Array(20).fill().map((_, i) => ({ 
  id: i, 
  name: `Deck #${i}`
}));

export const decks = (state = [], action) => {
  if (action.type === DECK_ADDED) {
    return [
      ...state,
      action.payload
    ]
  }
  if (action.type === DECKS_FETCHED) {
    // TODO: check possible duplicates
    return [
      ...state,
      ...action.payload
    ]
  }

  return state;
}

export const getDecks = (state) => state.decks;
export const getDeckById = (state, id) => 
  state.decks.find(deck => deck.id === id);