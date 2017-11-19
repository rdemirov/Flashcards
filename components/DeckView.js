import React, { Component } from 'react'
import { StyleSheet, Text, View,TouchableHighlight } from 'react-native';

export default class DeckView extends Component {
    constructor(props) {
        super(props)
        this.handlePress = this.handlePress.bind(this)
    }

    handlePress(component) {
        this.props.navigation.navigate(component);
    }
    render() {
        const {deck,navigation} = this.props;
        return (
            <View >
                <Text >{this.props.navigation.state.params.deck.title}</Text>
                <Text >{this.props.navigation.state.params.deck.questions.length}</Text>
                <TouchableHighlight onPress={()=>(this.handlePress('AddCard'))}>
                    <Text>Add card</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={()=>(this.handlePress('Quiz'))}>
                    <Text>Start quiz</Text>
                </TouchableHighlight>
            </View>
        )
    }
}
