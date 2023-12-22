import { useState } from 'react';
import { Button, Text } from 'react-native';
import { View } from 'react-native';

const Memo = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  return (
    <View>
      <Text>Memo</Text>

      <Button title={value1.toString()} onPress={() => setValue1(value1 + 1)} />
      <Button title={value2.toString()} onPress={() => setValue2(value2 + 1)} />
    </View>
  );
};

export default Memo;
