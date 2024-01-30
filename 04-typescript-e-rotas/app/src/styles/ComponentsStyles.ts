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
    },
    textInput: {
        ...paddingSpaces.md,
        borderWidth: 2,
        borderRadius: 4,

    },
    button: {
        width: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        borderWidth: 2,
        borderColor: 'black',
        ...paddingSpaces.md
    }
});

export default ComponentsStyles