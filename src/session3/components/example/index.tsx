import { View, Text } from 'react-native';

type Props = {
  text: string;
};

const Example = ({ text }: Props) => {
  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
};

export default Example;
