import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Platform } from 'react-native';
import { green } from '../utils/colors';
import { connect } from 'react-redux';
import { clearLocalNotification, setLocalNotification } from '../utils/notification';

class QuizComponent extends Component {
  
  constructor(props) {
    super(props);
    const { deckId } = this.props.navigation.state.params;

    this.state = {};
  }

  componentDidMount () {
    clearLocalNotification().then(setLocalNotification)
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>Quiz view</Text>
        <View style={styles.button}>
          <Button
            onPress={() => {
              // something
            }}
            title="noname"
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
  button: {
    width: 200,
    marginTop: 10,
    marginBottom: 10
  }
})

export const Quiz = connect(null, { })(QuizComponent)