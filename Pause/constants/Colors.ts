/* colors.ts

  Props:  none

  Export: color palette as named colors

  Functions:  allow access to standard colors by name

  Usage: add import statement in any other file and reference colors by name
    import colors from '../constants/Colors'
    style={{ backgroundColor: colors.yellow }}

  References:
    Altered from Expo-initialized Colors.ts
    Referenced ChatGPT for layout and export to other files
*/

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

const colors = {
  yellow: '#FAF0DA',
  green: '#C9E4DE',
  blue: 'A9D1D9',

  // dark and light full component styles
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
}; 
export default colors;
