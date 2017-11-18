import React, { Component } from 'react'
import { StyleSheet, Text, View,FlatList } from 'react-native';

export default class CreateDeck extends Component {
    render() {
        const {deck} = this.props;
        return (
            <View style={styles.deck}>
                <Text >CreateDeck</Text>
            </View>
        )
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
