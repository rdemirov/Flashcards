import React, { Component } from 'react'
import { StyleSheet, TextInput, Text, View, TouchableHighlight } from 'react-native';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {addCardToDeckAsync} from '../actions'

class AddCard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleChangeQuestion = this.handleChangeQuestion.bind(this);
        this.handleChangeAnswer = this.handleChangeAnswer.bind(this);
        this.addCardToDeck = this.addCardToDeck.bind(this)

    }

    handleChangeQuestion(text) {
        this.setState({ question: text })
    }

    handleChangeAnswer(text) {
        this.setState({ answer: text })
    }

    addCardToDeck() {
        const card = {question:this.state.question,answer:this.state.answer}
        this.props.addCardToDeckAsync({deckId:this.props.deckId,card})
        this.setState((state)=>({question:null,answer:null}));
    }

    render() {
        const { deck, navigation } = this.props;
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.inputField}
                    placeholder={'question'}
                    onChangeText={this.handleChangeQuestion}
                    value={this.state.question}
                ></TextInput>
                <TextInput
                    style={styles.inputField}
                    placeholder={'answer'}
                    onChangeText={this.handleChangeAnswer}
                    value={this.state.answer}></TextInput>
                <TouchableHighlight style={styles.btn} onPress={this.addCardToDeck}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    inputField: {
        borderWidth: 1,
        borderColor: 'black',
        width: 300,
        height: 50,
        margin: 20,
        paddingLeft:20,
        paddingRight:20
    },
    btn: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'black',
        height: 60,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    buttonText: {
        fontSize: 20,
        color: 'white'
    }
});

const mapStateToProps = (state, ownProps) => ({
    deckId:ownProps.navigation.state.params.id,
    navigation:ownProps.navigation
})

AddCard.propTypes ={
    deckId: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
    navigation: PropTypes.object,
    addCardToDeckAsync: PropTypes.func
}


export default connect(mapStateToProps, {
    addCardToDeckAsync
})(AddCard)
