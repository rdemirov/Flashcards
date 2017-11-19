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
                   <Text style={styles.buttonText}>Submit</Text> 
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    btn: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor:'black',
        height:60,
        width:200,
        alignItems:'center',
        justifyContent: 'center',
        borderRadius:8
    },
    buttonText: {
        fontSize:20,
        color:'white'
    }
  });
