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
            <View>
                {!showResults && <View>
                    <Text style={styles.questionIndex}>{`${currentQuestion}/${totalQuestions}`}</Text>
                    <View style={styles.questionAnswerContainer}>
                        <Text style={styles.questionAnswerText}>{showAnswer ? questions[this.state.currentQuestionIndex].answer : questions[this.state.currentQuestionIndex].question}</Text>
                        <TouchableHighlight onPress={this.toggleQuestionAnswer}>
                            <Text style={styles.questionAnswerDisplay}> {showAnswer ? 'Question' : 'Answer'}</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.answerButtonsContainer}>
                        <TouchableHighlight onPress={this.markCorrectAnswer} style={[styles.button,{backgroundColor:'green'}]} >
                            <Text style={styles.buttonText}>Correct</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={this.markIncorrectAnswer} style={[styles.button,{backgroundColor:'red'}]}>
                            <Text style={styles.buttonText}>Incorrect</Text>
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

const styles = StyleSheet.create({
    questionAnswerContainer:{
       justifyContent:'center',
       alignItems:'center'
    },
    questionAnswerDisplay: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'red'
    },
    questionAnswerText:{
     fontSize:40,
     fontWeight:'bold'
    },
    questionIndex:{
        justifyContent:'flex-start',
        alignItems:'flex-start',
        fontSize:20
    },
    button:{
        width:200,
        height:60,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8
    },
    buttonText:{
        fontSize:20,
        fontWeight:'bold',
        color:'white'
    },
    answerButtonsContainer:{
        justifyContent:'center',
        alignItems:'center'
    }
});