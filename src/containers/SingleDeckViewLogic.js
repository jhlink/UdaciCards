import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleDeckView from '../components/SingleDeckView';

class SingleDeckViewLogic extends Component { 
  state = {
    deckName: 'Deck',
    cardCount: 0
  }

  componentDidMount() {
    const { deck } = this.props.navigation.state.params;
    this.setState({ ...deck });
  }

  toNewQuestionView = () => {
    const { goToScreen } = this.props;

    goToScreen(
      'NewQuestionView',
      { ...this.state }
    );
  }

  toQuizView = () => {
    const { goToScreen } = this.props;

    goToScreen(
      'QuizView',
      { ...this.state }
    );
  }

  render() {
    const { cardCount, deckName } = this.state;

    return(
      <SingleDeckView 
        deckName={ deckName } 
        cardCount={ cardCount } 
        handleCardAdd={ this.toNewQuestionView }
        handleQuizStart={ this.toQuizView }
      />
    );
  }
}

function mapDispatchToProps ( dispatch, { navigation }) {
  return {
    goToScreen: (componentAsString, propsToPass) => {
      navigation.navigate(componentAsString, propsToPass);      
    }
  };
}

export default connect(null, mapDispatchToProps)(SingleDeckViewLogic);
