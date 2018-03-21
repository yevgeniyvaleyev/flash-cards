import React, {Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export const DeckListItem = ({name, count, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
      <Text>{name}</Text>
      <Text>{count}</Text>
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10
  },
})