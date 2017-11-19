import React, { Component } from 'react'
import { StyleSheet, Text, View,FlatList } from 'react-native';
import DeckView from './DeckView'

export default class DeckListItem extends Component {
    render() {
        const {deck,navigation} = this.props;
        return (
            <View >
                <Text >{this.props.navigation.state.params.deck.title}</Text>
                <Text >{this.props.navigation.state.params.deck.questions.length}</Text>
            </View>
        )
    }
}
