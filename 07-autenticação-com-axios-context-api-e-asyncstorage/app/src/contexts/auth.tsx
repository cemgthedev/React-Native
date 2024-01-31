import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as auth from "../services/auth";
import { ActivityIndicator, View } from "react-native";
import api from "../services/api";

type User = {
    name: string,
    email: string
}
type AuthContextProps = {
    signed: boolean,
    user: User | null,
    loading: boolean,
    singIn(): Promise<void>,
    signOut(): void
}

type AuthProviderProps = {
    children: ReactNode
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadStorageData() {
            const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
            const storagedToken = await AsyncStorage.getItem('@RNAuth:token');

            if(storagedUser && storagedToken) {
                api.defaults.headers['Authorization'] = `Bearer ${storagedToken}`;

                setUser(JSON.parse(storagedUser));
            }
            setLoading(false);
        }

        loadStorageData();
    }, []);
    async function singIn() {
        const response = await auth.singIn();

        setUser(response.user);

        api.defaults.headers['Authorization'] = `Bearer ${response.token}`;

        await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
        await AsyncStorage.setItem('@RNAuth:token', response.token);
    }

    function signOut() {
        AsyncStorage.clear().then(() => {
            setUser(null);
        });
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, loading, singIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);

    return context;
}