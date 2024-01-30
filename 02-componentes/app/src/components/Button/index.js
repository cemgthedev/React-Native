import React from 'react';
import { Button } from "react-native"

function DefaultButton ({ title, color, ...props}) {
    return <Button color={color} title={title} {...props}/>
}

export default DefaultButton
