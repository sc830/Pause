/*  
  reusedStyles.ts

  Export (default): styles for common app components
  - textInputStyle: text inside textInput components
  - headerStyle:  header/title text

*/

import { StyleSheet } from 'react-native';

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
  textStyle: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  menuButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#f0f0f0', 
  },

  dateButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
    paddingHorizontal: 30,
    borderRadius: 20,
    elevation: 20,
    backgroundColor: '#4f7bbd', // Same color as original DateButton
    top: 100,
  },

  settingsButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 20,
    elevation: 3,
    height: 50,
    width: 50,
    //backgroundColor: '#4f7bbd', 
  },

   journalButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 20,
    elevation: 3,
    height: 50,
    width: 50,
    //backgroundColor: '#4f7bbd', 
  },

   monthlyProgressButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 20,
    elevation: 3,
    height: 50,
    width: 50,
   // backgroundColor: '#4f7bbd', 
  },

  continueButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    elevation: 3,
    height: 50,
    width: 200,
    marginVertical: 10,
  },
});

export default reusedStyles;
