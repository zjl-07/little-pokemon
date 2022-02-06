import React from 'react';
import dynamic from 'next/dynamic';
import { CloseButton, ModalContainer, ModalContent } from './styles';

const Portal = dynamic(() => import('@components/portal'), { ssr: false });

const Modal = ({ visible, children, closeIcon = true, onCloseModal }) => {
	if (!visible) return <></>;

	return (
		<Portal selector={'#modal'}>
			<ModalContainer>
				<ModalContent>
					{closeIcon && <CloseButton onClick={onCloseModal}>X</CloseButton>}
					{children}
				</ModalContent>
			</ModalContainer>
		</Portal>
	);
};

export default Modal;
