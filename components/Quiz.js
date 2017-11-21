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
                    <View style={styles.container}>
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
                {showResults && <View style={styles.container}>
                    <Text style={styles.resultDisplay}>{`You have ${getPercentage(correctCount,totalQuestions)}% correct answers`}</Text>
                    <TouchableHighlight style={styles.button} onPress={this.handleQuestRestart}>
                            <Text style={[styles.buttonText,{color:'black'}]}>Start over</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={[styles.button,{backgroundColor:'black'}]} onPress={()=>(this.props.navigation.goBack())}>
                            <Text style={styles.buttonText}>Back to deck view</Text>
                        </TouchableHighlight>
                </View>}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
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
        borderRadius:8,
        borderWidth:1,
        borderColor:'black',
        margin:5
    },
    buttonText:{
        fontSize:20,
        color:'white'
    },
    answerButtonsContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:20
    },
    resultDisplay:{
        fontSize:30,
        marginTop:15,
        marginBottom:30
    }
});