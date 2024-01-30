import React from 'react';
import { TextInput } from "react-native"
import ComponentStyles from "../../styles/ComponentsStyles";

function DefaultTextInput({style, ...props}) {
    return <TextInput style={{...ComponentStyles.textInput, ...style}} {...props} />
}

export default DefaultTextInput