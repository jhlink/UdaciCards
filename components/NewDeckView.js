import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import TextBoxInput from './TextBoxInput';
import TextButton from './TextButton';
import { white, black } from '../utils/colors';

const CenterView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const QuestionPrompt = styled.Text`
  fontSize: 32;
  textAlign: center;
  width: 300;
`;

const styles = StyleSheet.create({
  strtBtn: {
    backgroundColor: black,
    color: white,
    marginTop: 50
  }
});

class NewDeckView extends Component { 
  state = {
    deckName: 'Deck'
  }

  render() {
    const { deckName } = this.state;

    return (
      <CenterView>
        <QuestionPrompt>
        What is the title of your new deck?
        </QuestionPrompt>
        <TextBoxInput
          placeholderText="Deck Title" 
        />
        <TextButton
          style={styles.strtBtn} 
        >
            Submit 
        </TextButton>
      </CenterView>
    ); 
  }
}

export default NewDeckView;

