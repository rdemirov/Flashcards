import React, { Component } from 'react'
import { StyleSheet, TextInput, Text,View,TouchableHighlight } from 'react-native';

export default class AddCard extends Component {
    render() {
        const {deck,navigation} = this.props;
        return (
            <View >
                <Text>Enter question</Text>
                <TextInput></TextInput>
                <Text>Enter answer</Text>
                <TextInput></TextInput>
                <TouchableHighlight>
                    <Text>Submit</Text>
                </TouchableHighlight>   
            </View>
        )
    }
}