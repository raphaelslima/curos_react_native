import styled from 'styled-components/native';

interface TextProps {
  color?: string;
  fontSize: string;
  margin?: string;
}

export const TextContainer = styled.Text<TextProps>`
  font-size: ${(props: { fontSize: string }) => props.fontSize};
  ${(props: { color: string }) =>
    props.color ? `color: ${props.color};` : ''};
  ${(props: { margin: string }) =>
    props.margin ? `margin: ${props.margin};` : ''}
`;
