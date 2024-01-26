import React from 'react';
import { Text } from "react-native"

function DefaultText({children, ...props}) {
    return <Text {...props}>{children}</Text>
}

export {DefaultText as Text}