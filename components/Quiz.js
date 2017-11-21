import React, { Component } from 'react'
import { StyleSheet, Text, View,TouchableHighlight } from 'react-native';

export default class Quiz extends Component {
    render() {
        const {navigation} = this.props;
        return (
            <View >
               <Text>Quiz</Text>
            </View>
        )
    }
}