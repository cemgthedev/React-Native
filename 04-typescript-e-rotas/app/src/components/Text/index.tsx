import React, { ReactNode } from 'react';
import { Text } from "react-native"
import ComponentStyles from "../../styles/ComponentsStyles";

type DefaultTextProps = React.ComponentProps<typeof Text>;

type TextProps = DefaultTextProps & {
    children: ReactNode
    style?: object
}

function DefaultText({children, style, ...props}: TextProps) {
    return <Text style={{...ComponentStyles.text, ...style}} {...props}>{children}</Text>
}

export default DefaultText