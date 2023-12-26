import { Platform, SafeAreaView, StyleSheet } from 'react-native';

type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <SafeAreaView style={styles.adroidSafeArea}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  adroidSafeArea: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? 25 + 16 : 0,
    height: '100%',
    width: '100%',
  },
});

export default Container;
