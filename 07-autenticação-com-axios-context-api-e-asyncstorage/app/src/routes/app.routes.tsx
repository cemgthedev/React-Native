import React from 'react';
import Dashboard from '../pages/Dashboard';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AppStack = createNativeStackNavigator();

function AppRoutes() {
    return (
        <AppStack.Navigator>
            <AppStack.Screen name="Dashboard" component={Dashboard} options={{headerTitleAlign: 'center'}}/>
        </AppStack.Navigator>
    );
}

export default AppRoutes;