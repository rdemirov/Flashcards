import React from 'react';
import { StyleSheet, Text, View,FlatList,Platform } from 'react-native';
import {TabNavigator,StackNavigator} from 'react-navigation';
import HomeScreen from './components/HomeScreen'
import CreateDeck from './components/CreateDeck'
import DeckView from './components/DeckView'

const Tabs = TabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Decks'
    }
},
CreateDeck: {
  screen: CreateDeck,
  navigationOptions: {
    tabBarLabel: 'New deck'
  }
}
},{
  initialRouteName:'Home'
});

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
  } ,CreateDeck: {
    screen: CreateDeck,
  },
  DeckView:{
    screen:DeckView,
    navigationOptions: ({navigation}) => ({
      title: navigation.state.params.title,
    })
  }
})

export default class App extends React.Component {
  
  render() {
    return (
       <MainNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
