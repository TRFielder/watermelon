import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button } from "@chakra-ui/react";

interface ExplainerProps {
	isOpen: boolean;
	onClose: () => void;
}

const Explainer = ({ isOpen, onClose }: ExplainerProps) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader color="#1A202C">About Watermelon</ModalHeader>
				<ModalCloseButton />
				<ModalBody color="#1A202C">Watermelon allows you to track your personal stats in a user-friendly, low distraction format</ModalBody>

				<ModalFooter>
					<Button colorScheme="blue" mr={3} onClick={onClose}>
						Close
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default Explainer;
