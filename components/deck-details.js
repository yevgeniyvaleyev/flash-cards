import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { AppLoading } from 'expo';
import { getDeckById } from '../reducers/decks';
import { getCardsByParentId } from '../reducers/cards';
import { main } from '../utils/colors';
import { Styles } from '../utils/common-styles';

class DeckDetails extends Component {
  render () {
    const { deckId } = this.props.navigation.state.params;
    const { deck, cardsCount } = this.props;
    
    if (!deck) {
      return <AppLoading />
    } 

    return (
      <View style={[Styles.VerticalContainer, Styles.pageContainer]}>
        <View style={[Styles.VerticalContainer]}>
          <View style={[Styles.HorizontalContainer, Styles.noFlex]}>
            <Text>Deck name:</Text>
            <Text>{deck.name}</Text>
          </View>
          <View style={[Styles.HorizontalContainer, Styles.noFlex]}>
            <Text>Cards count:</Text>
            <Text>{cardsCount}</Text>
          </View>
        </View>
        <View style={[Styles.bottomButtonsContainer]}>
          <View style={Styles.button}>
            <Button
              onPress={() => this.props.navigation.navigate(
                'AddCard', { deckId }
              )}
              title="Add card"
              color={main}
            />
          </View>
          <View style={[Styles.button]}>
            <Button
              disabled={cardsCount === 0}
              onPress={() => this.props.navigation.navigate(
                'Quiz', { deckId }
              )}
              title="Start quiz"
              color={main}
            />
          </View>
        </View>
      </View>
    )
  }
};

const mapStateToProps = (state, props) => ({
  deck: getDeckById(state, props.navigation.state.params.deckId),
  cardsCount: getCardsByParentId(state, props.navigation.state.params.deckId).length
})

export default connect(mapStateToProps)(DeckDetails)