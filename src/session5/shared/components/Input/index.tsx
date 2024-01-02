import { TextInputProps } from 'react-native';
import { ContainerInput } from './input.style';
import { DisplayFlexColumn } from '../globalStyles/GlobalView.style';
import Text from '../Text';
import { theme } from '../../themes/theme';
import { textTypes } from '../Text/textTypes';

interface InputProps extends TextInputProps {
  title?: string;
  errorMsg?: string;
  secureTextEntry?: boolean;
  margin?: string;
}

const Input = ({
  secureTextEntry,
  title,
  errorMsg,
  margin,
  ...props
}: InputProps) => {
  return (
    <DisplayFlexColumn margin={margin}>
      {title && (
        <Text margin="4px" color={theme.colors.grayTheme.gray100}>
          {title}
        </Text>
      )}
      <ContainerInput
        secureTextEntry={secureTextEntry}
        isError={!!errorMsg}
        {...props}
      />
      {errorMsg && (
        <Text
          color={theme.colors.orangeTheme.orange80}
          type={textTypes.SUB_TITLE_REGULAR}
          margin="4px"
        >
          {errorMsg}
        </Text>
      )}
    </DisplayFlexColumn>
  );
};

export default Input;
