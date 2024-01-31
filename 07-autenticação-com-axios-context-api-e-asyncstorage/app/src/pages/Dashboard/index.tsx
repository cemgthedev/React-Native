import { View, Text, Button, StyleSheet } from "react-native";
import { useContext } from "react";
import { useAuth } from "../../contexts/auth";

const styles = StyleSheet.create({
    container: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

function Dashboard() {
    const {signOut} = useAuth();

    async function handleSingOut() {
        signOut();
    }

    return (
        <View style={styles.container}>
            <Button title="Sing out" onPress={handleSingOut} />
        </View>
    );
}

export default Dashboard;