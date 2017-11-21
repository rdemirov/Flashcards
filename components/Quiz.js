import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

import {getPercentage} from '../utils/helpers'

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
     this.markIncorrectAnswer = this.markIncorrectAnswer.bind(this);
     this.markCorrectAnswer = this.markCorrectAnswer.bind(this);
     this.handleQuestRestart = this.handleQuestRestart.bind(this);
    }

    toggleQuestionAnswer() {
         this.setState((state)=>({
             ...state,
             showAnswer:!state.showAnswer
         }))
    }

    handleQuestRestart() {
        this.setState({
            currentQuestionIndex: 0,
            totalQuestions: this.props.navigation.state.params.questions.length,
            correctCount: 0,
            showAnswer: false,
            showResults: false
        })
    }

    markIncorrectAnswer() {
        this.setState((state)=> {
           return {...state,
            currentQuestionIndex:state.currentQuestionIndex+1,
            showResults:(state.totalQuestions<=(state.currentQuestionIndex+1))
        }
        })
    }

    markCorrectAnswer() {
        this.setState((state)=> {
            return {...state,
             currentQuestionIndex:state.currentQuestionIndex+1,
             correctCount:state.correctCount+1,
             showResults:(state.totalQuestions<=(state.currentQuestionIndex+1))
         }
         })
    }

    render() {
        const { questions } = this.props.navigation.state.params;
        const totalQuestions = this.state.totalQuestions;
        const showAnswer = this.state.showAnswer;
        let currentQuestion = this.state.currentQuestionIndex + 1;
        let {correctCount,incorrectCount,showResults} = this.state;
        return (
            <View >
                {!showResults && <View>
                    <Text>{`${currentQuestion}/${totalQuestions}`}</Text>
                    <View>
                        <Text>{showAnswer ? questions[this.state.currentQuestionIndex].answer : questions[this.state.currentQuestionIndex].question}</Text>
                        <TouchableHighlight onPress={this.toggleQuestionAnswer}>
                            <Text> {showAnswer ? 'Question' : 'Answer'}</Text>
                        </TouchableHighlight>
                    </View>
                    <View>
                        <TouchableHighlight onPress={this.markCorrectAnswer}>
                            <Text>Correct</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={this.markIncorrectAnswer}>
                            <Text>Incorrect</Text>
                        </TouchableHighlight>
                    </View>
                </View>}
                {showResults && <View>
                    <Text>{`You have ${getPercentage(correctCount,totalQuestions)}% correct answers`}</Text>

                    <TouchableHighlight onPress={this.handleQuestRestart}>
                            <Text>Start over</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={()=>(this.props.navigation.goBack())}>
                            <Text>Back to deck view</Text>
                        </TouchableHighlight>
                </View>}
            </View>
        )
    }
}