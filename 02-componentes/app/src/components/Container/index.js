import { View } from "react-native";
import ComponentsStyles from "../../styles/ComponentsStyles";

function Container({children, style, ...props}) {
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