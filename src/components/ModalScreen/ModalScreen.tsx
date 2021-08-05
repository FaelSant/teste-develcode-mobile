import React, {ReactNode} from 'react';
import Modal from 'react-native-modal';

type ModalScreenProps = {
  children: ReactNode;
  isVisible: boolean;
  swipeDirection: 'down' | 'left' | 'right' | 'up';
  onSwipeComplete?: () => void;
  onBackdropPress?: () => void;
};
export const ModalScreen: React.FC<ModalScreenProps> = ({
  children,
  isVisible,
  swipeDirection,
  onBackdropPress,
  onSwipeComplete,
}) => {
  return (
    <Modal
      style={{justifyContent: 'flex-end', margin: 0}}
      onSwipeComplete={onSwipeComplete}
      onBackdropPress={onBackdropPress}
      swipeDirection={swipeDirection}
      animationOutTiming={750}
      isVisible={isVisible}>
      {children}
    </Modal>
  );
};
