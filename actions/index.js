import { isDataValid } from '../utils/validators';
import * as actionCreators from './action-creators'; 
import * as api from '../utils/api';

export const addDeck = (title) => (dispatch, getState) => {

  if (!title) {
    throw new Error('Enter correct deck title')
  }

  const newDeck = {
    id: '_' + Math.random(),
    name: title
  }

  api.addDeck(newDeck).then(() => {
    dispatch(actionCreators.onDeckAdded(newDeck))
  });
}

export const getDecks = () => (dispatch, getState) =>
  api.getDecks().then((decks) => {
    dispatch(actionCreators.onDecksFetched(decks))
  });

export const getCards = (deckId) => (dispatch, getState) =>
  api.getCards(deckId).then((cards) => {
    debugger
    dispatch(actionCreators.onCardsFetched(cards))
  });

export const addCard = (cardData) => (dispatch, getState) => {
  const fields = ['deckId', 'question', 'answer'];

  if(!isDataValid(cardData, fields)) {
    throw new Error('Enter all required fields');
  };
  
  const newCard = {
    id: '_' + Math.random(),
    deckId: cardData.deckId,
    question: cardData.question,
    answer: cardData.answer
  }

  api.addCard(newCard).then(() => {
    dispatch(actionCreators.onCardAdded(newCard));
  });
}