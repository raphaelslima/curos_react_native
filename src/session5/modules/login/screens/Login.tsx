import { View } from 'react-native';
import { ContainerLogin } from '../styles/login.style';
import Input from '../../../shared/components/Input';
import Button from '../../../shared/components/Button';
import { theme } from '../../../shared/themes/theme';

const Login = () => {
  return (
    <View>
      <ContainerLogin>
        <Input title="Email:" placeholder="Digite seu email" margin="8px" />
        <Input
          title="Senha:"
          placeholder="Digite sua senha"
          secureTextEntry
          margin="8px"
        />
        <Button
          title="ENTRAR"
          margin="8px"
          type={theme.buttons.buttonsThemes.primary}
        />
      </ContainerLogin>
    </View>
  );
};

export default Login;
