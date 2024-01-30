import { View } from "react-native";
import ComponentsStyles from "../../styles/ComponentsStyles"
import { ReactNode } from "react";

type DefaultContainerProps = React.ComponentProps<typeof View>;
type ContainerProps = DefaultContainerProps & {
    children: ReactNode
    style?: object
}

function Container({children, style, ...props}: ContainerProps) {
    return (
        <View
            style={{...ComponentsStyles.container, ...style}}
            {...props}
        >
            {children}
        </View>
    );
}

export default Container