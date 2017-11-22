import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    FlatList,
    TouchableOpacity,
    Animated,
    View
} from 'react-native';
import PropTypes from 'prop-types'

export default class DeckListItem extends Component {
    constructor(props) {
        super(props);
        this.handleNavigation = this.handleNavigation.bind(this);
        this.state = {
            opacity: new Animated.Value(1)
        }
    }

    handleNavigation() {
        Animated.timing(this.state.opacity, { toValue: 0, duration: 500 })
            .start(() => (
                Animated.timing(this.state.opacity, { toValue: 1, duration: 500 })
                .start(() => (this.props.navigation.navigate('DeckView', { deckId: this.props.deckId, title: this.props.deck.title })))));
    }

    render() {
        const { deck, navigation, deckId } = this.props;
        let { opacity } = this.state;
        return (
            <Animated.View key={deckId} style={{ opacity: opacity }}>
                <TouchableOpacity onPress={this.handleNavigation} >
                    <View style={styles.deck} >
                        <Text style={styles.deckTitle}>{deck.title}</Text>
                        <Text style={styles.cardCount}>{`${deck.questions.length} Cards`}</Text>
                    </View>
                </TouchableOpacity>
            </Animated.View>

        )
    }
}

const styles = StyleSheet.create({
    deck: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: 150,
        borderBottomColor: 'black',
        borderBottomWidth: 1
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

DeckListItem.propTypes = {
    deck: PropTypes.object,
    deckId: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
    navigation: PropTypes.object
}