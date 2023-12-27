import styled from 'styled-components/native';
import { theme } from '../../themes/theme';

interface ButtonContainerProps {
  margin?: string;
  disabled?: boolean;
}

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  width: 100%;
  height: 48px;
  border-radius: 4px;
  background-color: ${(props: { disabled: boolean }) =>
    props.disabled
      ? theme.colors.grayTheme.gray100
      : theme.colors.mainTheme.primary};
  justify-content: center;
  align-items: center;
  ${(props: { margin?: string }) =>
    props.margin ? `margin: ${props.margin};` : ''}
`;

export const ButtonContainerSecondary = styled(
  ButtonContainer,
)<ButtonContainerProps>`
  ${(props: { margin?: string }) =>
    props.margin ? `margin: ${props.margin};` : ''}

  background-color: ${theme.colors.neutralTheme.white};
  border: 1px solid ${theme.colors.mainTheme.primary};
`;
