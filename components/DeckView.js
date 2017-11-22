import React, { Component } from 'react'
import { StyleSheet, Text, View,TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
class DeckView extends Component {
    constructor(props) {
        super(props)
        this.handlePress = this.handlePress.bind(this)
    }

    handlePress(component,params) {
        this.props.navigation.navigate(component,params);
    }
    render() {
        let {deck,navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.deckTitle}>{deck.title}</Text>
                <Text style={styles.cardCount}>{`Cards ${deck.questions.length}`}</Text>
                <View style={styles.buttonContainer}>
                <TouchableHighlight style={[styles.btn,{backgroundColor:'white'}]} onPress={()=>(this.handlePress('AddCard',{id:this.props.deckId}))}>
                    <Text style={[styles.buttonText,{color:'black'}]}>Add card</Text>
                </TouchableHighlight>
              {deck.questions && deck.questions.length>0 &&  <TouchableHighlight style={[styles.btn,{marginTop:5}]} onPress={()=>(this.handlePress('Quiz',{questions:deck.questions}))}>
                    <Text style={styles.buttonText}>Start quiz</Text>
                </TouchableHighlight>}
                </View>
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
        borderRadius:8,
        marginTop:30,
        marginBottom:5
    },
    buttonText: {
        fontSize:20,
        color:'white'
    },
    container:{
        alignItems:'center',
        justifyContent: 'space-between',
        marginTop:15
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

  DeckView.propTypes = {
    deck: PropTypes.object,
    deckId: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
    navigation: PropTypes.object
  
  }


const mapStateToProps = (state, ownProps) => ({
    deck:state.decks[ownProps.navigation.state.params.deckId],
    navigation:ownProps.navigation,
    deckId:ownProps.navigation.state.params.deckId
})


 export default  connect(mapStateToProps,{})(DeckView)