import React, { ReactNode } from 'react';
import { Text } from "react-native"
import ComponentStyles from "../../styles/ComponentsStyles";

type DefaultHeadingProps = React.ComponentProps<typeof Text>;

type HeadingProps = DefaultHeadingProps & {
    children: ReactNode
    style?: object
}

function DefaultHeading({children, style, ...props}: HeadingProps) {
    return <Text style={{...ComponentStyles.heading, ...style}} {...props}>{children}</Text>
}

export default DefaultHeading