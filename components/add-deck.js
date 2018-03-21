import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, Button } from 'react-native';
import { green } from '../utils/colors';
import { addDeck } from '../actions';

class AddDeckComponent extends Component {
  
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render () {
    return (
      <View>
        <Text>What is the title of your new deck?</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Button
          onPress={() => {
            this.props.addDeck(this.state.text)
          }}
          title="Submit"
          color={green}
        />
      </View>
    )
  }
}

export const AddDeck = connect(null, { addDeck })(AddDeckComponent)