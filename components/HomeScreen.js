import React, { Component } from 'react'
import { StyleSheet, Text, View,FlatList } from 'react-native';
import {connect} from 'react-redux'
import {getDecksAsync} from '../actions'
import DeckListItem from './DeckListItem'

class HomeScreen extends Component {

  componentDidMount() {
   this.props.getDecksAsync();
  }

    render() {
         let {decksObject} = this.props;
    let decksArray = Object.keys(decksObject)
    return (
       <FlatList
       contentContainerStyle={styles.container}
       data = {decksArray}
       keyExtractor={(item,index)=>(index)}
       renderItem={({item}) =><DeckListItem deck={decksObject[item]}{...this.props}/>}

       />
    );
    }
}

const styles = StyleSheet.create({
    deck: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    deckTitle: {
        fontSize:30,
        fontWeight:'bold'
    },
    cardCount: {
        fontSize:20,
        fontWeight:'bold',
        color:'gray'
    }
  });

const mapStateToProps= (state,ownProps) => ({
  decksObject:state
})

export default connect(mapStateToProps,{
  getDecksAsync
})(HomeScreen)