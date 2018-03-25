import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native';
import { Styles } from '../utils/common-styles';
import { base, main, warning, lightest } from '../utils/colors';

export class QuizCard extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      isFrontSideActive: true 
    };
  }

  componentWillReceiveProps () {
    this.setState({ isFrontSideActive: true })
  }

  showAnswer = () => {
    this.setState({ isFrontSideActive: false })
  }

  renderTextBox (text, isBackSide) {
    return (
      <View style={[Styles.VerticalContainer, QuizStyles.card, isBackSide && QuizStyles.cardBack]}>
        <Text style={QuizStyles.cardText}>{text}</Text>
      </View>
    )
  }

  renderFrontSide (question) {
    return (
      <View style={[Styles.VerticalContainer]}>
        {this.renderTextBox(question)}
        <View style={Styles.bottomButtonsContainer}>
          <View style={Styles.button}>
            <Button 
              color={main}
              title="View answer"
              onPress={this.showAnswer} 
            />
          </View>
        </View>
      </View>
    )
  }

  renderBackSide (answer) {
    return (
      <View style={Styles.VerticalContainer}>
        {this.renderTextBox(answer, true)}
        <View style={Styles.bottomButtonsContainer}>
          <View style={Styles.button}>
            <Button 
              title="Correct"
              color={main}
              onPress={() => this.props.setAnswerState(true)} 
            />
          </View>
          <View style={Styles.button}>
            <Button 
              color={warning}
              title="Incorrect"
              onPress={() => this.props.setAnswerState(false)}
            />
          </View>
        </View>
      </View>
    )
  }

  render () {
    const { answer, question } = this.props;

    if (this.state.isFrontSideActive) {
      return this.renderFrontSide(question)
    }
    return this.renderBackSide(answer)
  }
}

const QuizStyles = StyleSheet.create({
  card: {
    marginTop: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: base
  },
  cardBack: {
    backgroundColor: lightest
  },
  cardText: {
    fontSize: 25
  }
})