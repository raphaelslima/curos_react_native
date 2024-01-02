import styled from 'styled-components/native';

import { theme } from '../../themes/theme';

export const ContainerModal = styled.View`
  position: absolute;
  top: 50px;
  width: 100%;
  background-color: ${theme.colors.neutralTheme.white};
  height: 150px;

  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  padding: 16px;
  z-index: 9;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
