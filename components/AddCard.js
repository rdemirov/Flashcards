import React, { Component } from 'react'
import { StyleSheet, TextInput, Text,View,TouchableHighlight } from 'react-native';

export default class AddCard extends Component {
    render() {
        const {deck,navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text>Enter question</Text>
                <TextInput style={styles.inputField}></TextInput>
                <Text>Enter answer</Text>
                <TextInput style={styles.inputField}></TextInput>
                <TouchableHighlight style={styles.btn}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableHighlight>   
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center'
    },
    inputField:{
        borderWidth: 1,
        borderColor: 'black',
        width:250
    },
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
