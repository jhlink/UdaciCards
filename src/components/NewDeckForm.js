import React from 'react';
import {
  Text,
  StyleSheet,
  KeyboardAvoidingView
} from 'react-native';
import TextBoxInput from './TextBoxInput';
import TextButton from './TextButton';
import { red, white, black } from '../utils/colors';
import styled from 'styled-components/native';

const CenterView = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
`;

const QuestionPrompt = styled.Text`
  fontSize: 32;
  margin-top: 10;
  textAlign: center;
  width: 300;
`;

const styles = StyleSheet.create({
  strtBtn: {
    backgroundColor: black,
    color: white,
    fontSize: 18,
    marginTop: 10,
  },
  errorText: {
    marginTop: 20,
    marginBottom: 10,
    color: red,
    fontSize: 20,
  },
  deckInput: {
    marginTop: 15,
    marginBottom: 20,
  }
});

const NewDeckForm = ({ deckName, errorMsg, handleDeckName, handleSubmit }) => {
  return (
    <CenterView behavior="padding" enabled>
      <QuestionPrompt>
        What is the title of your new deck?
      </QuestionPrompt>
      <Text style={styles.errorText}> 
        { errorMsg }
      </Text>
      <TextBoxInput
        placeholderText="Deck Title" 
        onChangeText={ handleDeckName }
        value={ deckName }
        style={ styles.deckInput }
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
