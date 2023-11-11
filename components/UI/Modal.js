
import React from 'react';
import { Text, Modal } from 'react-native';

const CustomModal = (props) => {
    return(
        <Modal visible={props.modalVisible} transparent>
            <Text>Enjoy this awesome to-do app? Upgrade to premium!</Text>
        </Modal>
    );
};

export default CustomModal;