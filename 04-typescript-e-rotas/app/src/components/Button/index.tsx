import React, { ReactNode } from 'react';
import { Pressable } from "react-native";
import ComponentStyles from "../../styles/ComponentsStyles";
import Text from '../Text';

type DefaultButtonProps = React.ComponentProps<typeof Pressable>;

type ButtonProps = DefaultButtonProps & {
    children: ReactNode
    style?: object,
    onPress?: () => void
}

function Button ({ children, style, onPress, ...props}: ButtonProps) {
    return (
        <Pressable style={{...ComponentStyles.button, ...style}} onPress={onPress} {...props}>
            <Text>{children}</Text>
        </Pressable>
    );
}

export default Button
