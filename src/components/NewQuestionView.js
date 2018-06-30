import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import TextBoxInput from './TextBoxInput';
import TextButton from './TextButton';
import { white, black } from '../utils/colors';
import { NavigationActions } from 'react-navigation';

const CenterView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
`;

const styles = StyleSheet.create({
  strtBtn: {
    backgroundColor: black,
    color: white,
    marginTop: 50
  }
});

class NewQuestionView extends Component { 

  toDeckView = () => {
    const { goBack } = this.props.navigation;
    goBack();
  }

  render() {
    return (
      <CenterView>
        <TextBoxInput
          placeholderText="Question"  
        />
        <TextBoxInput
          placeholderText="Answer" 
        />
        <TextButton
          style={styles.strtBtn} 
          onPress={this.toDeckView}
        >
            Submit 
        </TextButton>
      </CenterView>
    ); 
  }
}

export default NewQuestionView;

