import { Text, View } from 'react-native';
import { ContainerLogin } from '../styles/login.style';
import Input from '../../../shared/Input';
import Button from '../../../shared/Button';

const Login = () => {
  return (
    <View>
      <ContainerLogin>
        <Text>Login</Text>
        <Input />
        <Button title="ENTRAR" margin="8px" />
      </ContainerLogin>
    </View>
  );
};

export default Login;
