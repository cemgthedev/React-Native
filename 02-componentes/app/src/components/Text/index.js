import React from 'react';
import { Text } from "react-native"
import ComponentStyles from "../../styles/ComponentsStyles";

function DefaultText({children, style, ...props}) {
    return <Text style={{...ComponentStyles.text, ...style}} {...props}>{children}</Text>
}

export default DefaultText