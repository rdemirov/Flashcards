import React from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import DeckListItem from './components/DeckListItem'

export default class App extends React.Component {
  state = {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    }
  }
  render() {
    let decksObject = this.state;
    let decksArray = Object.keys(decksObject)
    return (
       <FlatList
       data = {decksArray}
       extraData = {this.state}
       keyExtractor={(item,index)=>(index)}
       renderItem={({item}) =><DeckListItem deck={this.state[item]}/>}

       />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
