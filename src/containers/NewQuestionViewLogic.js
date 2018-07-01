import React, { Component } from 'react';
import NewQuestionView from '../components/NewQuestionView';
import { connect } from 'react-redux';
import { createQuestion } from '../actions';
import uuidv4 from 'uuid/v4';

const INIT_QUESTION = {
  deckId: '',
  questionText: '',
  answerText: ''
};

class NewQuestionViewLogic extends Component { 
  state = {
    deckId: '',
    questionText: '',
    answerText: ''
  }

  toDeckView = () => {
    const newQuestion = {
      id: uuidv4(),
      ...this.state
    };

    this.props.addQuestion(newQuestion);
  }

  componentDidMount() {
    const { id } = this.props.navigation.state.params;
    this.setState({ deckId: id });
  }

  componentDidUpdate( ) {
    const { question, goBack } = this.props;

    if (question !== undefined && question.questionAdded) {
      this.setState = INIT_QUESTION; 

      goBack();
    }
  }

  handleAnswerTextChange = ( answerText ) => {
    this.setState( { answerText });
  }

  handleQuestionTextChange = ( questionText ) => {
    this.setState( { questionText });
  }

  render() {
    const { questionText, answerText } = this.state;

    return (
      <NewQuestionView
        questionText={ questionText }   
        answerText={ answerText }
        handleQuestionChange={ this.handleQuestionTextChange }   
        handleAnswerChange={ this.handleAnswerTextChange }
        handleOnSubmit={ this.toDeckView }
      />
    ); 
  }
}

function mapStateToProps ( state ) {
  const { question } = state.questionReducer;

  return {
    question 
  };
}

function mapDispatchToProps ( dispatch, { navigation }) {
  return {
    addQuestion: (questionData) =>  dispatch(createQuestion(questionData)),
    goBack: () => navigation.goBack(), 
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(NewQuestionViewLogic);

