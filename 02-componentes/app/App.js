import { StatusBar } from 'expo-status-bar';
import Button from './src/components/Button';
import Container from './src/components/Container';
import Heading from './src/components/Heading';
import Label from './src/components/Label';
import { View } from 'react-native';
import TextInput from './src/components/TextInput';

export default function App() {
  return (
    <Container style={{padding: 16, aligtItems: 'center', justifyContent: 'center'}}>
      <View style={{backgroundColor: "#f0f0f0", padding: 16, gap: 12}}>
        <Heading style={{textAlign: 'center'}}>Tela de Login</Heading>
        <View style={{gap: 4}}>
          <Label>Email</Label>
          <TextInput style={{padding: 8}} placeholder="Digite seu email"/>
        </View>
        <View style={{gap: 4}}>
          <Label>Senha</Label>
          <TextInput style={{padding: 8}} placeholder="Digite sua senha" />
        </View>
        <Button title="Button"/>
      </View>
    </Container>
  );
}
