import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
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
      <View style={styles.container}>
        <Text>{deck.name}</Text>
        <Text>{cards.length}</Text>

        <View style={styles.button}>
          <Button
            onPress={() => this.props.navigation.navigate(
              'AddCard', { deckId }
            )}
            title="Add card"
            color={green}
          />
        </View>
        <View style={styles.button}>
          <Button
            onPress={() => this.props.navigation.navigate(
              'Quiz', { deckId }
            )}
            title="Start quiz"
            color={green}
          />
        </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center'
  },
  button: {
    width: 200,
    marginTop: 10,
    marginBottom: 10
  }
})

const mapStateToProps = (state, props) => ({
  deck: getDeckById(state, props.navigation.state.params.deckId),
  cards: getCardsByParentId(state, props.navigation.state.params.deckId)
})

export default connect(mapStateToProps)(DeckDetails)