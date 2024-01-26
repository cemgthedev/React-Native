import React from 'react';
import { Text } from "react-native"

function DefaultLabel({children, ...props}) {
    return <Text {...props}>{children}</Text>
}

export {DefaultLabel as Label}