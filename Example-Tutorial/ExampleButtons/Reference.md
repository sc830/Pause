This file is just snippets and examples of how to do relevant UI stuff.

# How to set sizes relative to the screen size/view size
    import React from 'react';
    import { View, Text, Dimensions } from 'react-native';

    const { width, height } = Dimensions.get('window');

    // Calculate 10vh and 10vw
    const tenVh = height * 0.1; // 10% of viewport height
    const tenVw = width * 0.1;   // 10% of viewport width

# Styling components
Styling specifies appearances with multiple variables under a single name so that
when you're making a component you can set the style = "style1" or = "style2" instead of changing each value.
https://reactnative.dev/docs/style

### Units/Sizes
Can define sizes either in integers (basically, pixels) or percentages. Percentages are percentages of ***PARENT CONTAINER'S size, not the
SCREEN'S size.*** Example of how to get percentages of screen size percentages above.
**Pixel numbers are defined without quotes, percentages are defined with quotes.
    height: 100     // results in height of 100px
    height: "100%"  // results in height 100% of parent container

### Common style variables (examples):
backgroundColor: uses hex code in quotes to set background color
    backgroundColor: "#FFFFFF"

**padding:** uses number of pixels (no quotes) or percentage (with quotes) to set padding (space within element, like between text and the button's border)
**Or use: paddingTop, paddingBottom, paddingLeft, paddingRight, paddingVertical, paddingHorizontal
    padding: 10
    paddingTop: 10
    padding: "100%"
    paddingBottom: 5%

**margin:** uses number of pixels (no quotes) or percentage (with quotes) to set minimum distance between this component and other components or screen edges

**height:** set height of this component
    height: 100
    height: "30%"

**width:** set width of this component
    width: 30
    width: "4%"

**borderRadius:** set width of border around this component
    borderRadius: 5
    borderRadius: "1%"

