import React, { Component } from 'react'
import { StyleSheet, Text, View,FlatList } from 'react-native';

import DeckListItem from './DeckListItem'

export default class HomeScreen extends Component {
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
       contentContainerStyle={styles.container}
       data = {decksArray}
       extraData = {this.state}
       keyExtractor={(item,index)=>(index)}
       renderItem={({item}) =><DeckListItem deck={this.state[item]}{...this.props}/>}

       />
    );
    }
}

const styles = StyleSheet.create({
    deck: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    deckTitle: {
        fontSize:30,
        fontWeight:'bold'
    },
    cardCount: {
        fontSize:20,
        fontWeight:'bold',
        color:'gray'
    }
  });
