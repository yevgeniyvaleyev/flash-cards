import { CARD_ADDED } from '../actions/types';

const cardsItitState = Array(20).fill().map((_, i) => ({ 
  id: i, 
  deckId: Math.round(Math.random() * 20), 
  question: 'What is React?',
  answer: 'A library for managing user interfaces'
}));

export const cards = (state = cardsItitState, action) => {
  if (action.type === CARD_ADDED) {
    return [
      ...state,
      action.payload
    ]
  }

  return state;
}

export const getCardsByParentId = (state, deckId) => 
  state.cards.filter(card => card.deckId === deckId);