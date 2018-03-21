import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { AppLoading } from 'expo';
import { getDeckById } from '../reducers/decks';
import { getCardsByParentId } from '../reducers/cards';
import { green } from '../utils/colors';

class DeckDetails extends Component {
  render () {
    const { deckId } = this.props.navigation.state.params;
    const { deck, cards } = this.props;
    
    if (!deck) {
      return <AppLoading />
    } 

    return (
      <View>
        <Text>{deck.name}</Text>
        <Text>{cards.length}</Text>

        <Button
          onPress={() => this.props.navigation.navigate(
            'AddCard', { deckId }
          )}
          title="Add card"
          color={green}
        />
        <Button
          onPress={() => {}}
          title="Start quiz"
          color={green}
        />
      </View>
    )
  }
};

const mapStateToProps = (state, props) => ({
  deck: getDeckById(state, props.navigation.state.params.deckId),
  cards: getCardsByParentId(state, props.navigation.state.params.deckId)
})

export default connect(mapStateToProps)(DeckDetails)