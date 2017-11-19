import React, { Component } from 'react'
import { StyleSheet, Text, View,TextInput,TouchableHighlight } from 'react-native';

export default class CreateDeck extends Component {
    render() {
        const {deck} = this.props;
        return (
            <View>
                <Text >What is the title of your new deck?</Text>
                <TextInput />
                <TouchableHighlight
                underlayColor="white"
                 style={styles.btn}>
                   <Text>Submit</Text> 
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    btn: {
        borderWidth: 1,
        padding: 25,
        borderColor: 'black',
        width:100,
        height:30,
        alignItems:'center',
        justifyContent: 'center'
    }
  });
