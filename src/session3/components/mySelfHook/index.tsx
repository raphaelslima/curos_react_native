import { Button, Text } from 'react-native';
import { View } from 'react-native';
import { useMyHook } from '../../myHook/useMyHook';

const MySelfHook = () => {
  const { value, handleChangeText } = useMyHook();

  return (
    <View>
      <Text>{value}</Text>
      <Button title="Botao" onPress={handleChangeText} />
    </View>
  );
};

export default MySelfHook;
