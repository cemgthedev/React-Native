import { StyleSheet } from "react-native";
import paddingSpaces from "./guide/spaces";

const ComponentsStyles = StyleSheet.create({
    heading: {
        fontSize: 32
    },
    label: {
        fontSize: 24
    },
    text: {
        fontSize: 16
    },
    container: {
        marginTop: 32,
        height: '100%',
        justifyContent: 'start',
        alignItems: 'start',
    },
    textInput: {
        ...paddingSpaces.md,
        borderWidth: 2,
        borderRadius: 4,

    },
    button: {
        ...paddingSpaces.md
    }
});

export default ComponentsStyles