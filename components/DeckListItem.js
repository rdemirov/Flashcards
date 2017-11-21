import React, {Component} from 'react'
import {StyleSheet, Text, FlatList, TouchableOpacity, View} from 'react-native';

export default class DeckListItem extends Component {
    constructor(props) {
        super(props);
        this.handleNavigation = this
            .handleNavigation
            .bind(this);
    }

    handleNavigation() {
        this
            .props
            .navigation
            .navigate('DeckView',{deckId:this.props.deckId,title:this.props.deck.title})
    }

    render() {
        const {deck, navigation} = this.props;
        return (
            <TouchableOpacity onPress={this.handleNavigation} >
                <View  style={styles.deck} >
                    <Text style={styles.deckTitle}>{deck.title}</Text>
                    <Text style={styles.cardCount}>{`${deck.questions.length} Cards`}</Text>
                </View>
                </TouchableOpacity>

        )
    }
}

const styles = StyleSheet.create({
    deck: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height:150
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
