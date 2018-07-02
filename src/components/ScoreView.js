import React from 'react';
import { Text, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import TextButton from './TextButton';
import { white, black } from '../utils/colors';

const ScoreView = ({ score, handleQuizRestart, handleDeckViewNav  }) => {  
  return (
    <CenterView>
      <Text>
        Well done! You answered { score } correctly!
      </Text>
      <ButtonView>
        <TextButton
          onPress={ handleQuizRestart } >
            Restart Quiz 
        </TextButton>
        <TextButton
          onPress={ handleDeckViewNav }
          style={styles.blkBtn}>  
            Back to Deck 
        </TextButton>
      </ButtonView>
    </CenterView>
  ); 
};

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
  blkBtn: {
    backgroundColor: black,
    color: white
  }
});

export default ScoreView;

