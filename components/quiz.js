import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Platform } from 'react-native';
import { connect } from 'react-redux';
import { clearLocalNotification, setLocalNotification } from '../utils/notification';
import { getCardsByParentId } from '../reducers/cards';
import { QuizCard } from './quiz-card';
import { QuizReport } from './quiz-report';
import { AppLoading } from 'expo';
import { Styles } from '../utils/common-styles';

class QuizComponent extends Component {

  constructor (props) {
    super(props)
    this.state = {
      currentCardIndex: 0,
      result: []
    };
  }

  reset () {
    this.setState({
      currentCardIndex: 0,
      result: []
    })
  }

  componentDidMount () {
    clearLocalNotification().then(setLocalNotification)
  }

  renderProgress (doneCount, fullCount) {
    return <Text>{doneCount}/{fullCount}</Text>
  }

  setAnswerState (card, isCorrect, currentCardIndex) {
    this.setState({
      result: [...this.state.result, { card, isCorrect }],
      currentCardIndex: currentCardIndex + 1
    });
  }

  render () {
    const { cards } = this.props;
    const { deckId } = this.props.navigation.state.params;
    const { currentCardIndex } = this.state;
    const card = cards[currentCardIndex];
    const isFinish = currentCardIndex + 1 > cards.length;

    if (!cards || cards.length === 0) {
      return <AppLoading />
    }

    return (
      <View style={[Styles.VerticalContainer, Styles.pageContainer]}>
        {!isFinish && this.renderProgress(currentCardIndex + 1, cards.length)}
        {!isFinish && <QuizCard 
          setAnswerState={(isCorrect) => {
            this.setAnswerState(card, isCorrect, currentCardIndex)
          }}
          {...card}
        />}
        {isFinish && <QuizReport 
          result={this.state.result} 
          onReload={() => this.reset()}
          deckId={deckId} />}
      </View>
    )
  }
}

const mapStateToProps = (state, { navigation }) => ({
  cards: getCardsByParentId(state, navigation.state.params.deckId)
})

export const Quiz = connect(mapStateToProps)(QuizComponent)