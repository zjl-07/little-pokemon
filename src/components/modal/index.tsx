import React from 'react';
import dynamic from 'next/dynamic';
import { ModalContainer, ModalContent } from './styles';

const Portal = dynamic(() => import('@components/portal'), { ssr: false });

const Modal = ({ visible, children, closeIcon = true, onCloseModal }) => {
	if (!visible) return <></>;

	return (
		<Portal selector={'#modal'}>
			<ModalContainer>
				<ModalContent>
					<div>{closeIcon && <div onClick={onCloseModal}>X</div>}</div>
					{children}
				</ModalContent>
			</ModalContainer>
		</Portal>
	);
};

export default Modal;
