import { NavigationContainer } from '@react-navigation/native';
import Login from './src/screen/Login';

import { createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screen/Home';

export type AppProps = {
  Login: undefined,
  Home: {
    email: string,
    senha: string
  },
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{headerTitleAlign: 'center'}}/>
        <Stack.Screen name="Home" component={Home} options={{headerTitleAlign: 'center'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
