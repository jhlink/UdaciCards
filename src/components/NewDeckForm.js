import React from 'react';
import {
  Text,
  StyleSheet
} from 'react-native';
import TextBoxInput from './TextBoxInput';
import TextButton from './TextButton';
import { white, black } from '../utils/colors';
import styled from 'styled-components/native';

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

const NewDeckForm = ({ deckName, errorMsg, handleDeckName, handleSubmit }) => {
  return (
    <CenterView>
      <QuestionPrompt>
        What is the title of your new deck?
      </QuestionPrompt>
      <Text> 
        { errorMsg }
      </Text>
      <TextBoxInput
        placeholderText="Deck Title" 
        onChangeText={ handleDeckName }
        value={ deckName }
      />
      <TextButton
        onPress={ handleSubmit }
        style={styles.strtBtn} 
      >
      Create Deck
      </TextButton>
    </CenterView>
  );

};

export default NewDeckForm;
