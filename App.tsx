import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import Example from './src/components/example';
import { Button } from 'react-native';
import { useEffect, useState } from 'react';
import Callback from './src/components/callback';
import Memo from './src/components/memo';

export default function App() {
  const TextNew = styled.Text`
    color: red;
  `;

  const ViewMain = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
  `;

  const [newText, setNewText] = useState<string>('Bem vindo!');
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    setCount(count + 1);
  }, [newText]);

  const handleBtn = () => {
    if (newText === 'Bem vindo!') {
      setNewText('Novo Teste');
    } else {
      setNewText('Bem vindo!');
    }
  };

  return (
    <ViewMain>
      <TextNew>{newText}</TextNew>
      <TextNew>O texto foi alterado {count}</TextNew>
      <StatusBar style="auto" />
      <Example text={'Exemplo 1'} />
      <Example text={'Exemplo 2'} />
      <Button title="BOTÃO" onPress={() => handleBtn()} />
      <Callback />
      <Memo />
    </ViewMain>
  );
}
