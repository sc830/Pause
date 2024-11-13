/*  reusedStyles.ts

  Props: none

  Export (default): styles for common app components
  - textInputStyle: text inside textInput components
  - headerStyle:  header/title text
  - menuButton: menu buttons

  Functions:  allow access to standard styles by name

  Usage: add import statement in any other file and reference colors by name
    import reusedStyles from '../constants/reusedStyles'
      style={reusedStyles.menuButton} 
      OR style={[reusedStyles.menuButton, {backgroundColor: '#ffffff'}]}
      OR style={[reusedStyles.menuButton, differentStyle, {backgroundColor:'#ffffff'}]

  References:
    Altered from Expo-initialized Colors.ts
    Referenced ChatGPT for layout and export to other files
*/

import {StyleSheet} from 'react-native';
import colors from '@/constants/Colors'

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
    alignContent: 'center',
    justifyContent: 'center',
    lineHeight: 40,
    fontWeight: 400,
    letterSpacing: 0.55,
    color: colors.black,
  },
  menuButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 20,
    elevation: 3,
    height: 50,
    width: 50,
  },
});
export default reusedStyles;