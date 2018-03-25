import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, Button, StyleSheet, Platform, Animated, KeyboardAvoidingView } from 'react-native';
import { main } from '../utils/colors';
import { addDeck } from '../actions';
import { Styles } from '../utils/common-styles';
import { SuccessMessage } from './success-message';

class AddDeckComponent extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      bounceValue: new Animated.Value(0),
      text: ''
    };
  }

  addDeck  = () => {
    const { bounceValue, text } = this.state;

    this.props.addDeck(text);
    this.setState({
      text: ''
    });
    Animated.sequence([
      Animated.timing(bounceValue, { duration: 200, toValue: 1}),
      Animated.timing(bounceValue, { duration: 800, toValue: 0})
    ]).start()
  }

  isDataValid () {
    return this.state.text;
  }

  render () {
    const { bounceValue, text } = this.state;

    return (
      <KeyboardAvoidingView 
      behavior="padding" 
      keyboardVerticalOffset={50}
      style={Styles.VerticalContainer}>
        <View style={[Styles.VerticalContainer, {justifyContent: 'center'}]}>
          <SuccessMessage style={{flex: 1}} bounceValue={bounceValue}/>
        </View>
        <View style={[Styles.VerticalContainer, Styles.pageContainer]}>
          <Text style={Styles.label}>What is the title of your new deck?</Text>
          <TextInput
            style={Styles.input}
            onChangeText={(text) => this.setState({text})}
            value={text}
          />
        </View>
        <View style={Styles.bottomButtonsContainer}>
          <View style={Styles.button}>
            <Button
              disabled={!this.isDataValid()}
              onPress={this.addDeck}
              title="Add"
              color={main}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

export const AddDeck = connect(null, { addDeck })(AddDeckComponent)