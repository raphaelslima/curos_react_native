import { TouchableOpacityProps } from 'react-native';
import { ButtonContainer } from './button.style';
import Text from '../Text';
import { theme } from '../../themes/theme';
import { textTypes } from '../Text/textTypes';

interface ButtonContainerProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
}

const Button = ({ title, margin, ...props }: ButtonContainerProps) => {
  return (
    <ButtonContainer margin={margin} {...props}>
      <Text
        type={textTypes.BUTTON_BOLD}
        color={theme.colors.neutralTheme.white}
      >
        {title}
      </Text>
    </ButtonContainer>
  );
};

export default Button;
