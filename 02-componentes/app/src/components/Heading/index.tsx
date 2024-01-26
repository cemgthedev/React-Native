import React from 'react';
import { Text } from "react-native"

function DefaultHeading({children, ...props}) {
    return <Text {...props}>{children}</Text>
}

export {DefaultHeading as Heading}