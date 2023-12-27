import { ActivityIndicator, TouchableOpacityProps } from 'react-native';
import { ButtonContainer, ButtonContainerSecondary } from './button.style';
import Text from '../Text';
import { theme } from '../../themes/theme';
import { textTypes } from '../Text/textTypes';

interface ButtonContainerProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
  type?: string;
  disabled?: boolean;
  loading?: boolean;
  onPress?: () => void;
}

const Button = ({
  title,
  type,
  margin,
  loading,
  disabled,
  onPress,
  ...props
}: ButtonContainerProps) => {
  const handleOnPress = () => {
    if (!loading && !disabled && onPress) {
      onPress();
    }
  };

  switch (type) {
    case theme.buttons.buttonsThemes.secondary:
      return (
        <ButtonContainerSecondary
          {...props}
          type={type}
          margin={margin}
          onPress={handleOnPress}
          disabled={disabled}
        >
          {loading ? (
            <ActivityIndicator color={theme.colors.neutralTheme.white} />
          ) : (
            <Text
              type={textTypes.BUTTON_BOLD}
              color={theme.colors.neutralTheme.white}
            >
              {title}
            </Text>
          )}
        </ButtonContainerSecondary>
      );

    case theme.buttons.buttonsThemes.primary:
    default:
      return (
        <ButtonContainer
          {...props}
          type={type}
          margin={margin}
          onPress={handleOnPress}
          disabled={disabled}
        >
          {loading ? (
            <ActivityIndicator color={theme.colors.neutralTheme.white} />
          ) : (
            <Text
              type={textTypes.BUTTON_BOLD}
              color={theme.colors.neutralTheme.white}
            >
              {title}
            </Text>
          )}
        </ButtonContainer>
      );
  }
};

export default Button;
