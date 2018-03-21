import * as types from './types';

export const onDeckAdded = (data) => ({
  type: types.DECK_ADDED,
  payload: data
})

export const onCardAdded = (data) => ({
  type: types.CARD_ADDED,
  payload: data
})