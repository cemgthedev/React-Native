import React, { useContext } from 'react';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import { ActivityIndicator, View } from 'react-native';
import { useAuth } from '../contexts/auth';

function Routes() {
    const {signed, loading} = useAuth();

    if(loading) {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size="large" color="cyan"/>
            </View>
        );
    }
    
    return (
        signed ? <AppRoutes /> : <AuthRoutes />
    );
}

export default Routes;