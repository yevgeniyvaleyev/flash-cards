import React, {Component} from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { getDecks } from '../reducers/decks';
import { DeckListItem } from './deck-list-item';
import { AppLoading } from 'expo';
import * as actions from '../actions';

class DecksList extends Component {

  componentDidMount () {
    this.props.getDecks();
  }
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
            deckId={item.id}
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
})

export default connect(mapStateToProps, { getDecks: actions.getDecks })(DecksList)