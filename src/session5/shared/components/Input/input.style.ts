import styled from 'styled-components/native';
import { theme } from '../../themes/theme';
import { TextInput } from 'react-native';

interface ContainerInputProps extends TextInput {
  isError?: boolean;
}

export const ContainerInput = styled.TextInput<ContainerInputProps>`
  width: 100%;
  height: 48px;
  padding: 16px;
  background-color: ${theme.colors.neutralTheme.white};
  color: #888;
  border-radius: 4px;
  ${(props: { isError: boolean }) =>
    props.isError
      ? `border: 1px solid ${theme.colors.orangeTheme.orange80};`
      : `border: 1px solid ${theme.colors.grayTheme.gray80};`}
`;
