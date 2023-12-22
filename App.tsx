import { StyleSheet, View } from 'react-native';
import styled from 'styled-components/native';

export default function App() {
  const TextNew = styled.Text`
    font-size: 24px;
  `;

  return (
    <View style={styles.container}>
      <TextNew>teste</TextNew>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
