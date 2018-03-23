import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, Button, StyleSheet, Platform } from 'react-native';
import { green } from '../utils/colors';
import { addDeck } from '../actions';

class AddDeckComponent extends Component {
  
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  isDataValid () {
    return this.state.text;
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>What is the title of your new deck?</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <View style={styles.button}>
          <Button
            disabled={!this.isDataValid()}
            onPress={() => {
              this.props.addDeck(this.state.text);
              this.setState({
                text: ''
              })
            }}
            title="Add"
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
    borderColor: 'gray', 
    borderWidth: Platform.OS === 'ios' ? 1 : 0
  },
  button: {
    width: 200,
    marginTop: 10,
    marginBottom: 10
  }
})

export const AddDeck = connect(null, { addDeck })(AddDeckComponent)