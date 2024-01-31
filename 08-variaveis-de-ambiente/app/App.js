import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, Image, View, ScrollView } from 'react-native';
import getUsers from './src/routes/auth.routes';
import { useEffect, useState } from 'react';

export default function App() {
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await getUsers();
      if(data) {
        setUsers(data);
      }
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    loading ? <View>
                <ActivityIndicator size="large" color="cyan" />
              </View> :
              <ScrollView>
                <View style={styles.container}>
                {users && users.map(user => <View key={user.id} style={{gap: 8, padding: 16, borderWidth: 2, borderColor: 'black'}}>
                  <Image style={{ width: 128, height: 128, borderRadius: 100 }} source={{ uri: user.avatar_url }}/>
                  <Text style={{ textAlign: 'center' }}>{user.login}</Text>
                </View>)}
              </View>
              </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: 16
  },
});
