import React from 'react';
import { Text } from "react-native"
import ComponentStyles from "../../styles/ComponentsStyles";

function Label({children, style, ...props}) {
    return <Text style={{...ComponentStyles.label, ...style}} {...props}>{children}</Text>
}

export default Label