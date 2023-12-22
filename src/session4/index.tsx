import { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import styled from 'styled-components/native';

export default function Session4() {
  const TextNew = styled.Text`
    font-size: 24px;
  `;

  const [input, setInput] = useState<string>('');

  const handleChangeInput = (text: string) => {
    setInput(text);
  };

  const list = [1, 2, 3];

  return (
    <View style={styles.container}>
      <View style={styles.sec1}>
        <TextNew>teste</TextNew>
      </View>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={handleChangeInput}
      />
      <FlatList data={list} renderItem={({ item }) => <Text>{item}</Text>} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sec1: {
    backgroundColor: 'red',
    width: '100%',
  },
  input: {
    margin: 16,
    backgroundColor: '#ddd',
    width: '80%',
    padding: 16,
  },
});
