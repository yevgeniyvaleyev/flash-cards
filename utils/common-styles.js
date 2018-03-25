import { StyleSheet, Platform } from 'react-native'
import * as colors from './colors'

export const Styles = StyleSheet.create({
  VerticalContainer: {
    flexDirection: 'column',
    alignItems: 'stretch',
    flex: 1
  },
  HorizontalContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between'
  },
  text: {
    color: colors.dark
  },
  pageContainer: {
    padding: 10
  },
  listItem: {
    borderBottomWidth: 1,
    borderColor: colors.lightest,
    alignItems: 'center',
    padding: 10
  },
  button: {
    width: 200,
    margin: 10
  },
  noFlex: {
    flex: 0
  },
  label: {
    fontSize: 18
  },
  input: {
    height: 40, 
    borderColor: colors.lighter, 
    borderWidth: Platform.OS === 'ios' ? 1 : 0
  },
  successMessage: {
    textAlign: 'center',
    color: colors.main,
    fontSize: 20,
    fontWeight: 'bold'
  },
  bottomButtonsContainer: {
    marginBottom: 60,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1
  }
})