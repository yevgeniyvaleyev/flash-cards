import { DECK_ADDED } from '../actions/types';

const decksItitState = Array(20).fill().map((_, i) => ({ 
  id: i, 
  name: `Deck #${i}`
}));

export const  decks = (state = decksItitState, action) => {
  if (action.type === DECK_ADDED) {
    return [
      ...state,
      action.payload
    ]
  }

  return state;
}

export const getDecks = (state) => state.decks;
export const getDeckById = (state, id) => 
  state.decks.find(deck => deck.id === id);