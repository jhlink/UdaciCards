import React from 'react';
import { Text, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import TextButton from './TextButton';
import { white, black, blue } from '../utils/colors';

const ScoreView = ({ score, handleQuizRestart, handleDeckViewNav  }) => {  
  return (
    <CenterView>
      <Text style={ styles.congrats }>
        Well done! 
      </Text>
      <Text style={ [styles.congrats, styles.bling]}>
        You answered { score } correctly!
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
  flex: 1
  align-content: center;
  justify-content: flex-start;
`;

const ButtonView = styled.View`
  marginTop: 75;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const styles = StyleSheet.create({
  blkBtn: {
    backgroundColor: black,
    color: white
  },
  congrats: {
    marginTop: 20,
    fontSize: 32,
    textAlign: 'center',
  },
  bling: {
    marginTop: 5,
    color: blue
  }
});

export default ScoreView;

