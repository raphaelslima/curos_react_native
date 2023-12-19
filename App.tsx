import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';

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
    </ViewMain>
  );
}
