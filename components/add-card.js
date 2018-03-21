import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { green } from '../utils/colors';
import { addCard } from '../actions';
import { connect } from 'react-redux';

class AddCardComponent extends Component {
  
  constructor(props) {
    super(props);
    const { deckId } = this.props.navigation.state.params;
    debugger
    this.state = { 
      deckId, 
      question: '', 
      answer: '' 
    };
  }

  render () {
    return (
      <View>
        <Text>What is the title of your new deck?</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(question) => this.setState({question})}
          value={this.state.question}
        />
        <TextInput
          style={{height: 40, marginTop: 10, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(answer) => this.setState({answer})}
          value={this.state.answer}
        />
        <Button
          onPress={() => {
            this.props.addCard(this.state)
          }}
          title="Submit"
          color={green}
        />
      </View>
    )
  }
}

export const AddCard = connect(null, { addCard })(AddCardComponent)