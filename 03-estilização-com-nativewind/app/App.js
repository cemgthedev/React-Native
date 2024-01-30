import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './src/components/Button';
import TextInput from './src/components/TextInput';
import Heading from './src/components/Heading';
import Label from  './src/components/Label';
import Container from './src/components/Container';

export default function App() {
  return (
    <Container className="justify-center items-center">
      <View className="bg-[#f0f0f0] flex flex-col p-4 w-4/5">
        <Heading className="text-center">Tela de Login</Heading>
        <View className="mt-4">
          <Label>Email</Label>
          <TextInput placeholder="Digite seu email"/>
        </View>
        <View className="mt-4">
          <Label>Senha</Label>
          <TextInput placeholder="Digite sua senha" />
        </View>
        <View className="mt-4">
          <Button title="Entrar"/>
        </View>
      </View>
    </Container>
  );
}
