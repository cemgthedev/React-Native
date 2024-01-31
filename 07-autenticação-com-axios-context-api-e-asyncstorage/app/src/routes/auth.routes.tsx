import React from 'react';
import SingIn from '../pages/SingIn';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AuthStack = createNativeStackNavigator();

function AuthRoutes() {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name="SingIn" component={SingIn} options={{headerTitleAlign: 'center'}}/>
        </AuthStack.Navigator>
    );
}

export default AuthRoutes;