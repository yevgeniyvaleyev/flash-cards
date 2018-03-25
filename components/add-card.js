import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Platform, Animated, KeyboardAvoidingView } from 'react-native';
import { main } from '../utils/colors';
import { addCard } from '../actions';
import { connect } from 'react-redux';
import { Styles } from '../utils/common-styles';
import { SuccessMessage } from './success-message';

class AddCardComponent extends Component {
  
  constructor(props) {
    super(props);
    const { deckId } = this.props.navigation.state.params;
    
    this.state = { 
      bounceValue: new Animated.Value(0),
      deckId, 
      question: '', 
      answer: '' 
    };
  }

  isDataValid () {
    return this.state.question && this.state.answer;
  }

  addCard () {
    const { bounceValue } = this.state;
    this.props.addCard(this.state);
    this.setState({
      question: '',
      answer: ''
    });
    Animated.sequence([
      Animated.timing(bounceValue, { duration: 200, toValue: 1}),
      Animated.timing(bounceValue, { duration: 800, toValue: 0})
    ]).start()
  }

  render () {
    const { bounceValue, question, answer } = this.state;

    return (
      <KeyboardAvoidingView 
        behavior="padding" 
        keyboardVerticalOffset={50}
        style={Styles.VerticalContainer}>
        <View style={[Styles.VerticalContainer, {justifyContent: 'center'}]}>
          <SuccessMessage style={{flex: 1}} bounceValue={bounceValue}/>
        </View>
        <View style={[Styles.VerticalContainer, Styles.pageContainer, styles.form]}>
          <Text style={Styles.label}>Question:</Text>
          <TextInput
            style={Styles.input}
            onChangeText={(question) => this.setState({question})}
            value={question}
          />
          <Text style={Styles.label}>Answer:</Text>
          <TextInput
            style={Styles.input}
            onChangeText={(answer) => this.setState({answer})}
            value={answer}
          />
        </View>
        <View style={Styles.bottomButtonsContainer}>
          <View style={Styles.button}>
            <Button
              disabled={!this.isDataValid()}
              onPress={() => this.addCard()}
              title="Add"
              color={main}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  form: {
    minHeight: 100
  }
})

export const AddCard = connect(null, { addCard })(AddCardComponent)