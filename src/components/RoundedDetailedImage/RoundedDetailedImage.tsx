import React from 'react';
import {
  Image,
  Container,
  AddPhotoContainer,
  TouchableMainImage,
} from './styles';
import CameraIcon from '../../assets/icons/camera.svg';
type RoundedDetailedImageProps = {
  imageUri?: string;
  handleAddPhoto?: () => void;
  handleViewPhoto?: () => void;
};
export const RoundedDetailedImage: React.FC<RoundedDetailedImageProps> = ({
  imageUri,
  handleAddPhoto,
  handleViewPhoto,
}) => {
  return (
    <Container>
      <TouchableMainImage>
        <Image
          source={{
            uri: imageUri,
          }}
        />
      </TouchableMainImage>
      <AddPhotoContainer>
        <CameraIcon />
      </AddPhotoContainer>
    </Container>
  );
};
