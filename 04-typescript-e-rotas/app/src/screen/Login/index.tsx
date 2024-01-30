import Button from '../../components/Button';
import Container from '../../components/Container';
import Heading from '../../components/Heading';
import Label from '../../components/Label';
import Text from '../../components/Text';
import { View } from 'react-native';
import TextInput from '../../components/TextInput';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppProps } from '../../../App';
import { useState } from 'react';

type SobreProps = NativeStackNavigationProp<AppProps, 'Login'>

function Login() {
  const navigation = useNavigation<SobreProps>();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <Container style={{padding: 16, alignItems: 'center', justifyContent: 'center'}}>
      <View style={{borderWidth: 2, borderColor: 'black', borderRadius: 4, padding: 16, gap: 8, width: '80%'}}>
        <View style={{gap: 4}}>
          <Label>Email</Label>
          <TextInput onChangeText={setEmail} style={{padding: 8}} placeholder="Digite seu email"/>
        </View>
        <View style={{gap: 4}}>
          <Label>Senha</Label>
          <TextInput onChangeText={setSenha} style={{padding: 8}} placeholder="Digite sua senha" />
        </View>
        <Button onPress={() => navigation.navigate('Home', {email: email, senha: senha})}>
          Entrar
        </Button>
      </View>
    </Container>
  );
}

export default Login;