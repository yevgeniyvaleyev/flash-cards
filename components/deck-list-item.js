import React, {Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { getCardsByParentId } from '../reducers/cards';
import { connect } from 'react-redux';
import { getCards } from '../actions';
import { Styles } from '../utils/common-styles';

class DeckListItemComponent extends Component {
  
  componentDidMount () {
    this.props.getCards(this.props.deckId)
  }
  
  render () {
    const {name, count, onPress} = this.props;

    return (
      <TouchableOpacity onPress={onPress}>
        <View style={[Styles.HorizontalContainer, Styles.listItem]}>
          <Text>{name}</Text>
          <Text>{count}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const mapStateToProps = (state, {deckId}) => ({
  count: getCardsByParentId(state, deckId).length
})

export const DeckListItem = connect(mapStateToProps, { getCards })(DeckListItemComponent)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10
  },
})