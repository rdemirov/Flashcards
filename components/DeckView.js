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
            <View style={styles.container}>
                <Text style={styles.deckTitle}>{this.props.navigation.state.params.deck.title}</Text>
                <Text style={styles.cardCount}>{`Cards ${this.props.navigation.state.params.deck.questions.length}`}</Text>
                <TouchableHighlight style={[styles.btn,{backgroundColor:'white'}]} onPress={()=>(this.handlePress('AddCard'))}>
                    <Text>Add card</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.btn} onPress={()=>(this.handlePress('Quiz'))}>
                    <Text style={styles.buttonText}>Start quiz</Text>
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
    },
    container:{
        alignItems:'center',
        justifyContent: 'space-between',
    },
    deckTitle: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    cardCount: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'gray'
    }
  });
