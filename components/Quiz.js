import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentQuestionIndex: 0,
            totalQuestions: props.navigation.state.params.questions.length,
            correctCount: 0,
            showAnswer: false,
            showResults: false
        }
     this.toggleQuestionAnswer=this.toggleQuestionAnswer.bind(this);
    }

    toggleQuestionAnswer() {
         this.setState((state)=>({
             ...state,
             showAnswer:!state.showAnswer
         }))
    }

    render() {
        const { questions } = this.props.navigation.state.params;
        const totalQuestions = this.state.totalQuestions;
        const showAnswer = this.state.showAnswer;
        let questionIndex = this.state.currentQuestionIndex + 1;
        let {correctCount,incorrectCount,showResults} = this.state;
        return (
            <View >
                <Text>{`${questionIndex}/${totalQuestions}`}</Text>
                {!showResults && <View>
                    <View>
                        <Text>{showAnswer ? questions[this.state.currentQuestionIndex].answer : questions[this.state.currentQuestionIndex].question}</Text>
                        <TouchableHighlight onPress={this.toggleQuestionAnswer}>
                            <Text> {showAnswer ? 'Answer' : 'Question'}</Text>
                        </TouchableHighlight>
                    </View>
                    <View>
                        <TouchableHighlight>
                            <Text>Correct</Text>
                        </TouchableHighlight>
                        <TouchableHighlight>
                            <Text>Incorrect</Text>
                        </TouchableHighlight>
                    </View>
                </View>}
                {showResults && <View>
                    <Text>{`You have ${(correctCount*100)/totalQuestions}% correct answers`}</Text>
                </View>}
            </View>
        )
    }
}