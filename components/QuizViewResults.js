import React from 'react'
import {
    View,
    Text,
    TouchableHighlight,
    StyleSheet
} from 'react-native'
import { getPercentage } from '../utils/helpers'
import PropTypes from 'prop-types'

function QuizViewResults(props) {
    const {handleQuestRestart,navigation,totalQuestions,correctCount} = props;
    return (
        <View style={styles.container}>
            <Text style={styles.resultDisplay}>{`You have ${getPercentage(correctCount, totalQuestions).toFixed(2)}% correct answers`}</Text>
            <TouchableHighlight style={styles.button} onPress={props.handleQuestRestart}>
                <Text style={[styles.buttonText, { color: 'black' }]}>Start over</Text>
            </TouchableHighlight>
            <TouchableHighlight style={[styles.button, { backgroundColor: 'black' }]} onPress={() => (props.navigation.goBack())}>
                <Text style={styles.buttonText}>Back to deck view</Text>
            </TouchableHighlight>
        </View>
    )
}

QuizViewResults.propTypes = {
    handleQuestRestart: PropTypes.func,
    navigation: PropTypes.object,
    totalQuestions: PropTypes.number,
    correctCount: PropTypes.number
    }

    const styles = StyleSheet.create({
        container: {
            justifyContent: 'center',
            alignItems: 'center'
        },
        button: {
            width: 200,
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8,
            borderWidth: 1,
            borderColor: 'black',
            margin: 5
        },
        buttonText: {
            fontSize: 20,
            color: 'white'
        },
        resultDisplay: {
            fontSize: 30,
            marginTop: 15,
            marginBottom: 30
        }
    });

export default QuizViewResults
