import React from 'react';
import { Button } from "react-native"

function DefaultButton({title, ...props}) {
    return <Button title={title} {...props}/>
}

export {DefaultButton as Button}