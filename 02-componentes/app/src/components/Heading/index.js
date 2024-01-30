import React from 'react';
import { Text } from "react-native"
import ComponentStyles from "../../styles/ComponentsStyles";

function DefaultHeading({children, style, ...props}) {
    return <Text style={{...ComponentStyles.heading, ...style}} {...props}>{children}</Text>
}

export default DefaultHeading