/* 
    This button uses an arrow function to define the "return" value (the button that is sent to other functions to use).
    This approach can hadle more complexity and customization when called from other files, so we should use this one.

    Docs:
    https://medium.com/@prathiba2796/custom-button-component-in-react-native-c823dcbc4ed3
    https://reactnative.dev/docs/button
*/

import React from "react";
import {TouchableOpacity, Text, StyleSheet, ActivityIndicator, StyleProp, TextStyle, ViewStyle} from "react-native";

interface ButtonProps {
    onPress: () => void;
    onLongPress?: () => void;
    title: string;
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    disabled?: boolean;
    activeOpacity?: number;
    loading?: boolean;
  }
  
  const Button: React.FC<ButtonProps> = ({
    onPress,
    onLongPress,
    title,
    iconLeft,
    iconRight,
    style,
    textStyle,
    disabled = false,
    activeOpacity = 0.7,
    loading = false,
  }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      disabled={disabled}
      activeOpacity={activeOpacity}
      style={[disabled ? styles.disabledButton : styles.button, style]}
    >
      {iconLeft}
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      )}
      {iconRight}
    </TouchableOpacity>
  );
};

/*  Styling: what does the component look like?

    This part specifies appearances with multiple variables under a single name (here, "button" or "disabledButton") so that
    when you're making a component you can set the style = "button" or = "disabledButton" instead of changing each value. (So not 
    all of these named styles are in use at the same time).

    https://reactnative.dev/docs/style

    Common style variables:
    backgroundColor: "#FFFFFF"      uses hex code in quotes to set background color

    padding: 10                     uses number of pixels (no quotes) to set padding (space within element, like between text and the button's border)
                                    can also set paddingTop, paddingBottom, paddingLeft, paddingRight, paddingVertical, paddingHorizontal
    
    margin: 5                       uses number of pixels (no quotes quotes) to set minimum distance between this component and other components or screen edges

    
*/

const styles = StyleSheet.create({

  // specifies what the button should look like when not "disabled"
  button: {
    backgroundColor: "#42a5f5",
    paddingVertical: 10,
    margin: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },

  // Specifies what the button should look like when in the "disabled" state
  disabledButton: {
    backgroundColor: "grey",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    // Add any additional styles or override default styles here
  },
});

export default Button;