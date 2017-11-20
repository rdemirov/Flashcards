import React, { Component } from 'react'
import {connect} from 'react-redux'
import { StyleSheet, Text, View,TextInput,TouchableHighlight } from 'react-native';
import {saveDeckTitleAsync} from '../actions'
class CreateDeck extends Component {

    constructor(props) {
        super(props);
        this.state={};
        this.handleInputChange=this.handleInputChange.bind(this);
    }

    handleInputChange(text) {
        this.setState({deckTitle:text})
    }

    render() {
        return (
            <View style={styles.container}>
                <Text >What is the title of your new deck?</Text>
                <TextInput style={styles.inputField}
                 placeholder={'Enter deck title'} 
                 value={this.state.deckTitle}
                 onChangeText={this.handleInputChange}/>
                <TouchableHighlight
                underlayColor="white"
                 style={styles.btn}
                 onPress={()=>(this.props.saveDeckTitleAsync({title:this.state.deckTitle}))}>
                   <Text style={styles.buttonText}>Submit</Text> 
                </TouchableHighlight>
            </View>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
})


export default connect(mapStateToProps, {
    saveDeckTitleAsync
})(CreateDeck)

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
