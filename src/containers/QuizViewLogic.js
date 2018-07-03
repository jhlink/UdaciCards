import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuizView from '../components/QuizView';
import ScoreView from '../components/ScoreView';
import { getQuestions, incQuizCount } from '../actions';

class QuizViewLogic extends Component { 
  state = {
    answeredQuestions: [],
    score: 0,
    isQuestion: true,
    currentQuestion: {},
    completedQuiz: false,
    incrementedQuizCount: false,
  }

  componentDidMount() {
    const { id } = this.props.navigation.state.params;
    const { fetchQuestions } = this.props;

    this.setState({ deckId: id });
    fetchQuestions();
  }

  componentDidUpdate() {
    const { questions, addOneToQuizCount, disableNotification } = this.props;
    const { currentQuestion, completedQuiz, incrementedQuizCount } = this.state;
    if ( !this.isEmpty(questions) && !completedQuiz && this.isEmpty(currentQuestion) ) {
      this.handleNextQuestion(); 
    }

    if ( completedQuiz && !incrementedQuizCount ) {
      addOneToQuizCount();
      //disableNotification();
      this.setState({
        incrementedQuizCount: true
      });
    }
  }
  
  getRandomInt = ( max ) => {
    return Math.floor(Math.random() * max);
  }

  filterList = ( targetList, filterCriteriaList ) => {
    return targetList.filter( (e) => !filterCriteriaList.includes(e.id)); 
  }

  handleNextQuestion = ( ) => {
    const { questions } = this.props;
    const { answeredQuestions, currentQuestion } = this.state;

    const updatedAnsweredQuestions = !(this.isEmpty(currentQuestion))
      ?  [ ...answeredQuestions, currentQuestion.id] 
      : answeredQuestions;

    const remainingQuestions = updatedAnsweredQuestions.length !== 0  
      ? this.filterList(questions, updatedAnsweredQuestions)  
      : questions;
    
    const randomQuestionIndex = this.getRandomInt( remainingQuestions.length );

    const nextQuestion = remainingQuestions.length > 0 
      ? remainingQuestions[ randomQuestionIndex ] 
      : { };

    console.log('remaining', remainingQuestions);
    console.log('answered', updatedAnsweredQuestions);
    this.setState({
      completedQuiz: remainingQuestions.length === 0,
      answeredQuestions: updatedAnsweredQuestions,
      currentQuestion: nextQuestion,
      isQuestion: true,
      incrementedQuizCount: false
    });
  }

  handleCorrectAnswer = () => {
    const { score } = this.state;
    this.handleNextQuestion();
    const newScore = score + 1;
    this.setState({ 
      score: newScore,
    });
  }

  handleIncorrectAnswer = () => {
    const { score } = this.state;
    this.handleNextQuestion();
    const newScore = score > 0 ? score - 1 : 0;
    this.setState({ 
      score: newScore,
    });
  }

  toggleQuestionAnswerPrompt = () => {
    const { isQuestion } = this.state;
    if (isQuestion) {
      this.setState({
        isQuestion: false
      });
    } else {
      this.setState({
        isQuestion: true 
      });
    }
  }

  isEmpty = ( object ) => {
    if (object === undefined || object === null) {
      return true;
    }
    return Object.keys(object).length === 0 && object.constructor === Object;
  }

  resetQuiz = () => {
    this.setState({
      completedQuiz: false,
      answeredQuestions: [],
      score: 0,
      isQuestion: true,
    });
    console.log('reset');
  }
    
  render() {
    const { completedQuiz, score, isQuestion, currentQuestion, answeredQuestions } = this.state;
    const { questions, goBack } = this.props;

    console.log('completed', completedQuiz);
    if ( completedQuiz ) {
      return ( 
        <ScoreView 
          handleDeckViewNav={ goBack }
          handleQuizRestart={ this.resetQuiz }
        />
      );
    }

    const cardPromptTest = isQuestion ? currentQuestion.questionText : currentQuestion.answerText;
    const quizScore = questions !== undefined  
      ? `${ answeredQuestions.length } / ${ questions.length }`
      : '0 / 0';

    return(
      <QuizView
        quizProgress={ quizScore }
        promptText={ cardPromptTest }
        questionState={ isQuestion }
        handleCardFlip={ this.toggleQuestionAnswerPrompt }
        handleCorrectBtn={ this.handleCorrectAnswer }
        handleIncorrectBtn={ this.handleIncorrectAnswer }
      />
    );
  }
}

function mapDispatchToProps ( dispatch, { navigation } ) {
  return { 
    fetchQuestions: () => dispatch(getQuestions()),
    goBack: () => navigation.goBack(),
    addOneToQuizCount: () => dispatch(incQuizCount())
  };
}

function mapStateToProps( state, { navigation } ) {
  const { questions } = state.questionReducer;
  const { id } = navigation.state.params; 
  
  if ( questions === undefined) {
    return { };
  }

  const deckQuestions = questions.filter( (question) => question.deckId === id);
  return { questions: deckQuestions };
}

export default connect(mapStateToProps, mapDispatchToProps)( QuizViewLogic );

