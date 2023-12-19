import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import Example from './src/components/example';

export default function App() {
  const TextNew = styled.Text`
    color: red;
  `;

  const ViewMain = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
  `;

  return (
    <ViewMain>
      <TextNew>Open up App.tsx to start working on your app!</TextNew>
      <TextNew>teste</TextNew>
      <StatusBar style="auto" />
      <Example text={'Exemplo 1'} />
      <Example text={'Exemplo 2'} />
    </ViewMain>
  );
}
