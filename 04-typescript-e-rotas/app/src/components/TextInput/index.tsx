import React from 'react';
import { TextInput } from "react-native"
import ComponentStyles from "../../styles/ComponentsStyles";


type DefaultTextInputProps = React.ComponentProps<typeof TextInput>;

type TextInputProps = DefaultTextInputProps & {
    style?: object
}

function DefaultTextInput({style, ...props}: TextInputProps) {
    return <TextInput style={{...ComponentStyles.textInput, ...style}} {...props} />
}

export default DefaultTextInput