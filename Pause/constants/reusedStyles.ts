/*  reusedStyles.ts

  Props: none

  Export (default): styles for common app components
  - textInputStyle: text inside textInput components
  - headerStyle: header/title text
  - menuButton: menu buttons

  Functions: allow access to standard styles by name

  Usage: add import statement in any other file and reference styles by name:
    import reusedStyles from '../constants/reusedStyles'
      style={reusedStyles.menuButton} 
      OR style={[reusedStyles.menuButton, {backgroundColor: '#ffffff'}]}
      OR style={[reusedStyles.menuButton, differentStyle, {backgroundColor:'#ffffff'}]

  References:
    Altered from Expo-initialized Colors.ts
    Referenced ChatGPT for layout and export to other files
*/

import { StyleSheet } from 'react-native'; // Single StyleSheet import
import colors from '@/constants/Colors';
import Values from '@/constants/Values';

const reusedStyles = StyleSheet.create({
  headerTextStyle: {
    fontSize: 36,
    marginBottom: 48,
    color: colors.black,
  },
  textInputStyle: {
    backgroundColor: '#cedcf2',
    borderColor: '#ffffff',
    borderRadius: 20,
    borderWidth: 0,
    flex: 1,
    padding: 30,
    fontSize: 20,
  },
  textStyle: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: colors.black,
  },
  buttonTextStyle: {
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 40,
    fontWeight: '400',
    letterSpacing: 0.55,
    color: colors.black,
  },
  menuButton: {
    padding: 13,
    borderRadius: Values.borderRadius,
    backgroundColor: '#f0f0f0',
  },
  dateButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
    paddingHorizontal: 30,
    borderRadius: 20,
    elevation: 10,
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
