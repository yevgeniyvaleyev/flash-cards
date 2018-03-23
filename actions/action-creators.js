import * as types from './types';

export const onDeckAdded = (data) => ({
  type: types.DECK_ADDED,
  payload: data
})

export const onCardAdded = (data) => ({
  type: types.CARD_ADDED,
  payload: data
})

export const onDecksFetched = (data) => ({
  type: types.DECKS_FETCHED,
  payload: data
})

export const onCardsFetched = (data) => ({
  type: types.CARDS_FETCHED,
  payload: data
})