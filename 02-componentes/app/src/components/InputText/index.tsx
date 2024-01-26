import React from 'react';
import { TextInput } from "react-native"

function DefaultTextInput({...props}) {
    return <TextInput {...props} />
}

export {DefaultTextInput as TextInput}