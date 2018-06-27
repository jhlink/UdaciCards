import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import TextButton from './TextButton';
import { white, green, red } from '../utils/colors';

const CenterView = styled.View`
  align-content: center;
  justify-content: space-between;
`;

const ButtonView = styled.View`
  paddingTop: 200;
  justify-content: center;
  align-items: center;
`;

const styles = StyleSheet.create({
  corBtn: {
    backgroundColor: green,
    color: white,
    borderWidth: 0
  },
  incorBtn: {
    backgroundColor: red,
    color: white,
    borderWidth: 0
  }
});

const dummyData = {
  prompt: 'Who loves ice cream?',
  answer: 'Me.' 
};

class QuizView extends Component { 
  state = {
    prompt: '?',
    answer: '-'
  }

  componentDidMount() {
    this.setState(dummyData);
  }

  render() {

    return (
      <CenterView>
        <ButtonView>
          <TextButton
            style={styles.corBtn}  
          >
            Correct 
          </TextButton>
          <TextButton
            style={styles.incorBtn}  
          >
            Incorrect 
          </TextButton>
        </ButtonView>
      </CenterView>
    ); 
  }
}

export default QuizView;

