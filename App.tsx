import { useState } from 'react';
import Login from './src/session5/modules/login';
import Container from './src/session5/shared/components/Container';
import Modal from './src/session5/shared/components/Modal';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Container>
      <Modal
        onCloseModal={() => setModalVisible(false)}
        visible={modalVisible}
        title="Bem vindo(o)"
        text="Teste"
      />
      <Login />
    </Container>
  );
}
