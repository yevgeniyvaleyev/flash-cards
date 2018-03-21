import React, {Component} from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { green } from '../utils/colors';
import { connect } from 'react-redux';
import { getDecks } from '../reducers/decks';
import { getCardsByParentId } from '../reducers/cards';
import { DeckListItem } from './deck-list-item';
import { AppLoading } from 'expo';

class DecksList extends Component {
  render () {
    const { decks, getCardsCount } = this.props;

    if (!decks) {
      return <AppLoading />
    }

    return (
      <FlatList
        data={decks}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <DeckListItem
            key={item.id}
            name={item.name}
            count={getCardsCount(item.id)}
            onPress={() => this.props.navigation.navigate(
              'DeckDetails',
              { deckId: item.id, name: item.name }
            )}
          />
        )}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  decks: getDecks(state),
  getCardsCount: (parentId) => getCardsByParentId(state, parentId).length
})

export default connect(mapStateToProps)(DecksList)