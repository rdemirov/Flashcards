import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';
import { saveDeckTitleAsync } from '../actions'
class CreateDeck extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(text) {
        this.setState({ deckTitle: text })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.label} >What is the title of your new deck?</Text>
                <TextInput style={styles.inputField}
                    placeholder={'Enter deck title'}
                    value={this.state.deckTitle}
                    onChangeText={this.handleInputChange} />
                <View style={{ margin: 20 }}>
                    <TouchableHighlight
                        underlayColor="white"
                        style={styles.btn}
                        onPress={() => {
                            const id = Date.now();
                            this.props.saveDeckTitleAsync({ title: this.state.deckTitle, id })
                                .then((result) => {
                                    this.props.navigation.navigate('DeckView', { deckId: id })
                                }
                                )
                        }}
                    >
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableHighlight>
                </View>
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
    container: {
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    inputField: {
        borderWidth: 1,
        borderColor: 'black',
        width: 300,
        height: 50,
        margin: 30,
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
    },
    label:{
        fontSize: 30, 
        margin: 30,
        alignItems:'center'
    }
});
