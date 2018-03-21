import React from 'react';
import { View, Platform } from 'react-native';
import { StatusBarComponent } from './components/status-bar';
import { green, white } from './utils/colors';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { Provider } from 'react-redux'
import configureStore from './configureStore'

// App components
import reducer from './reducers'
import DecksList from './components/decks-list';
import { AddDeck } from './components/add-deck';
import DeckDetails from './components/deck-details';
import { AddCard } from './components/add-card';

const Tabs = TabNavigator({
  DecksList: {
    screen: DecksList,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-folder-open-outline' size={30} color={tintColor} />
    },
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-add' size={30} color={tintColor} />
    },
  },
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? green : white,
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? white : green,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
});

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
  },
  DeckDetails: {
    screen: DeckDetails,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.name,
      headerTintColor: white,
      headerStyle: {
        backgroundColor: green,
      }
    })
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      title: 'Add Card',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: green,
      }
    }
  }
})

export default class App extends React.Component {
  
  render() {
    return (
      <Provider store={configureStore()}>
        <View style={{flex: 1}}>
          <StatusBarComponent backgroundColor={green} barStyle="light-content" />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}
