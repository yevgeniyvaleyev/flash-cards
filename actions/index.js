import { isDataValid } from '../utils/validators';
import * as actionCreators from './action-creators'; 

export const addDeck = (title) => (dispatch, getState) => {

  if (!title) {
    throw new Error('Enter correct deck title')
  }

  const newDeck = {
    id: '_' + Math.random(),
    name: title
  }
  dispatch(actionCreators.onDeckAdded(newDeck));
}

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
  dispatch(actionCreators.onCardAdded(newCard));
}