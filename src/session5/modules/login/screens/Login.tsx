import { View } from 'react-native';
import { ContainerLogin } from '../styles/login.style';
import Input from '../../../shared/components/Input';
import Button from '../../../shared/components/Button';

const Login = () => {
  return (
    <View>
      <ContainerLogin>
        <Input />
        <Button title="ENTRAR" margin="8px" />
      </ContainerLogin>
    </View>
  );
};

export default Login;
