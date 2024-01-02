import React from 'react';
import {
  Alert,
  ModalProps as ModalPropsReact,
  Modal as ModalReact,
} from 'react-native';
import { ContainerModal } from './modal.style';
import Text from '../Text';
import { theme } from '../../themes/theme';
import Button from '../Button';

interface ModalProps extends ModalPropsReact {
  title: string;
  text: string;
  onCloseModal: () => void;
}

const Modal = ({ title, text, onCloseModal, ...props }: ModalProps) => {
  return (
    <ModalReact
      animationType="slide"
      transparent={true}
      visible={false}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        onCloseModal();
      }}
      {...props}
    >
      <ContainerModal>
        <Text color={theme.colors.mainTheme.primary}>{title}</Text>
        <Text>{text}</Text>
        <Button title="Fechar" onPress={onCloseModal} />
      </ContainerModal>
    </ModalReact>
  );
};

export default Modal;
