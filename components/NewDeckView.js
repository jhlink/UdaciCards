import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import TextButton from './TextButton';
import { white, black } from '../utils/colors';

const CenterView = styled.View`
  align-items: center;
  justify-content: space-between;
`;

const styles = StyleSheet.create({
  strtBtn: {
    backgroundColor: black,
    color: white,
    marginTop: 200
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
        { /*  <TextBoxInput deckName={ deckName } /> */  }
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

