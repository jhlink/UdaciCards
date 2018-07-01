import { AsyncStorage } from 'react-native';
import { PARTIAL_QUESTION_KEY } from './storageKeys';

export const getAllQuestions = async () => {
  try {
    const questionKeys = await AsyncStorage.getAllKeys();
    const filteredKeys =  questionKeys.filter( (key) => key.includes( PARTIAL_QUESTION_KEY ) );

    const serializedQuestions =  await AsyncStorage.multiGet(filteredKeys);
    const formatted =  serializedQuestions.map( (arrayOfQuestionKeyAndValue) => {
      const questionValue = JSON.parse(arrayOfQuestionKeyAndValue[1]);
            
      return questionValue;
    });

    console.log(formatted);

    return formatted;
  } catch (error) {
    console.log('Error getAllQuestions: ', error);
  }
};

//  Note: QuestionData is unserialized, raw, JSON object. `questionId` is assumed to be a string.
export const addQuestion = async ( questionId, questionJSONData ) => {
  const questionAsyncStorageKey = PARTIAL_QUESTION_KEY + questionId;
  const serializedData = JSON.stringify( questionJSONData );
  try {
    const result = await AsyncStorage.setItem(questionAsyncStorageKey, serializedData);
  } catch (err) {
    console.error('addQuestion storage failure');
  }
};

//  Note: `questionId` is assumed to be a string.
export const deleteQuestion = ( questionId ) => {
  const questionAsyncStorageKey = PARTIAL_QUESTION_KEY + questionId;
  return AsyncStorage.removeItem(questionAsyncStorageKey)
    .then( (err) => {
      if (err) {
        console.error('deleteQuestion storage failure');
      } else {
        console.log('success');
      }
    });
};
