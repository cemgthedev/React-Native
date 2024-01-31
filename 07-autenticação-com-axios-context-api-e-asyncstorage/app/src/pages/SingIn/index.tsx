import { View, Button, StyleSheet } from "react-native";
import { useAuth } from "../../contexts/auth";

const styles = StyleSheet.create({
    container: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

function SingIn() {
    const {singIn} = useAuth();

    async function handleSingIn() {
        singIn();
    }

    return (
        <View style={styles.container}>
            <Button title="Sing in" onPress={handleSingIn} />
        </View>
    );
}

export default SingIn;