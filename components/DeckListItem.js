import React, { Component } from 'react'
import { StyleSheet, Text, View,FlatList } from 'react-native';

export default class DeckListItem extends Component {
    render() {
        const {deck} = this.props;
        return (
            <View style={styles.deck}>
                <Text style={styles.deckTitle}>{deck.title}</Text>
                <Text style={styles.cardCount}>{`Cards : ${deck.questions.length}`}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    deck: {
      height:80,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth:2
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
