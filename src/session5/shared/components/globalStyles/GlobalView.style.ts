import styled from 'styled-components/native';

interface DisplayFlexColumnprops {
  margin?: string;
}

export const DisplayFlexColumn = styled.View<DisplayFlexColumnprops>`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${(props: { margin: string }) =>
    props.margin ? `margin: ${props.margin}` : '0px'}
`;
