/*  reusedStyles.ts
    Export: styles for common app components
    - textInputStyle: text inside textInput components
    - headerStyle:  header/title text
*/

import {StyleSheet} from 'react-native';

const reusedStyles = StyleSheet.create({
    headerStyle: {
        fontSize: 36,
        marginBottom: 48,
    },
    textInputStyle: {
        backgroundColor: '#cedcf2',
        borderColor: '#ffffff',
        borderRadius: 20,
        borderWidth: 0,
        flex: 1,
        padding: 30,      
    },
  });
export default reusedStyles;