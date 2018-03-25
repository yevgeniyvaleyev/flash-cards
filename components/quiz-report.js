import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import { main, base, warning } from '../utils/colors'
import { Styles } from '../utils/common-styles';
import { connect } from 'react-redux';

class QuizReportComponent extends Component {
  render () {
    const {result, onReload} = this.props;
    const correctCount = result.filter(item => item.isCorrect).length;
    debugger
    return (
        <View style={Styles.VerticalContainer}> 
          <View style={[Styles.VerticalContainer, styles.status, {flex: 0}]}>
            <Text>Correct: {correctCount} / {result.length}</Text> 
          </View>
          <View style={[Styles.VerticalContainer, {flex: 5}]}>
            <FlatList
              data={result}
              keyExtractor={(item) => item.card.id}
              renderItem={({item}) => (
                <View style={[Styles.VerticalContainer, styles.reportItem, !item.isCorrect && styles.incorrect]}>
                  <Text>Q: {item.card.question}</Text>
                  <Text>A: {item.card.answer}</Text>
                </View>
              )}
            />
          </View>
          <View style={Styles.bottomButtonsContainer}>
            <View style={[Styles.button]}>
              <Button
                onPress={onReload}
                title="Restart Quiz"
                color={main}
              />
            </View>
          </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  incorrect: {
    borderColor: warning
  },
  status: {
    flex: 1,
    marginBottom: 10
  },
  reportItem: {
    padding: 10,
    paddingTop: 15,
    paddingBottom: 15,
    borderLeftWidth: 5,
    borderColor: base
  }
});

export const QuizReport = connect()(QuizReportComponent);