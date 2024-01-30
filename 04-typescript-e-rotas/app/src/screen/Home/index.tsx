import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import Button from '../../components/Button';
import Container from '../../components/Container';
import Heading from '../../components/Heading';
import Label from '../../components/Label';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppProps } from '../../../App';

type RouteHomeProps = RouteProp<AppProps, "Home">

function Home() {
  const { params: { email, senha } } = useRoute<RouteHomeProps>();

  return (
    <Container style={{padding: 16, alignItems: 'center', justifyContent: 'center'}}>
      <Heading style={{textAlign: 'center'}}>Lets Go</Heading>
      <Label>Email: {email} e Senha: {senha}</Label>
    </Container>
  );
}

export default Home;