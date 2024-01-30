import React, { ReactNode } from 'react';
import { Text } from "react-native"
import ComponentStyles from "../../styles/ComponentsStyles";

type DefaultLabelProps = React.ComponentProps<typeof Text>;

type LabelProps = DefaultLabelProps & {
    children: ReactNode
    style?: object
}

function Label({children, style, ...props}: LabelProps) {
    return <Text style={{...ComponentStyles.label, ...style}} {...props}>{children}</Text>
}

export default Label