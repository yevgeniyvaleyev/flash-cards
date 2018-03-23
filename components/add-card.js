import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Platform } from 'react-native';
import { green } from '../utils/colors';
import { addCard } from '../actions';
import { connect } from 'react-redux';

class AddCardComponent extends Component {
  
  constructor(props) {
    super(props);
    const { deckId } = this.props.navigation.state.params;
    
    this.state = { 
      deckId, 
      question: '', 
      answer: '' 
    };
  }

  isDataValid () {
    return this.state.question && this.state.answer;
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>Question:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(question) => this.setState({question})}
          value={this.state.question}
        />
        <Text>Answer:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(answer) => this.setState({answer})}
          value={this.state.answer}
        />
        <View style={styles.button}>
          <Button
            disabled={!this.isDataValid()}
            onPress={() => {
              this.props.addCard(this.state);
              this.props.navigation.goBack();
            }}
            title="Submit"
            color={green}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center'
  },
  input: {
    width: 300, 
    height: 40, 
    marginTop: 10,
    marginBottom: 10,
    borderColor: 'gray', 
    borderWidth: Platform.OS === 'ios' ? 1 : 0
  },
  button: {
    width: 200,
    marginTop: 10,
    marginBottom: 10
  }
})

export const AddCard = connect(null, { addCard })(AddCardComponent)