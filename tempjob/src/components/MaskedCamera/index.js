import React, {useRef, useState} from 'react';
import { Dimensions, Image } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { BackHandler } from 'react-native';
import Svg, { Circle, Defs, Rect, Mask } from 'react-native-svg';
import { Portal, Title, Caption } from 'react-native-paper';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect'
import {Creators as JobApplicationsActions} from '../../store/ducks/jobApplication';

import { Container, Camera, CameraOverlayContainer, CameraButton, CameraBackButton, TitleContainer, PictureModal } from './styles';


const jobApplicationSelector = createSelector(
  state => state.jobApplication,
  jobApplication => jobApplication
);

function MaskedCamera({maskType, onTakePicture}){
  const jobApplication = useSelector(jobApplicationSelector);
  const dispatch = useDispatch();
  const toggleCamera = () => dispatch(JobApplicationsActions.jobApplicationToggleCamera());
  const cameraRef = useRef(null);

  const takePicture = async () => {
    if (cameraRef) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      onTakePicture(data);
    }
  };
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (jobApplication.cameraIsVisible) {
          toggleCamera();
          return true;
        }else {
          return false;
        }
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [jobApplication.cameraIsVisible, toggleCamera])
  );
  const CameraOverlay = ({maskType}) => {
    const { height, width } = Dimensions.get('window');
    const circleRadius = width / 2.5;
    const viewBox = `0 0 ${width} ${height}`
    return (
      <CameraOverlayContainer>
        <Svg
          height={height}
          viewBox={viewBox}
        >
          <Defs>
            <Mask id="mask">
              {/* <Rect height={height} width={width} opacity={0.2} fill="#ffffff" /> */}
              {maskType === 'circle' ? (
                <Circle r={circleRadius} cx={width / 2} cy={height / 3} />
              ) : (
                <>
                  <Rect height={height} width={width * 0.1} fill="#ffffff" opacity={0.4} />
                  <Rect x={width * 0.900} height={height} width={width * 0.1} fill="#ffffff" opacity={0.4} />

                  <Rect x={width * 0.1} height={height * 0.2} width={width * 0.8} fill="#ffffff" opacity={0.4} />
                  <Rect x={width * 0.1} y={height * 0.8} height={height * 0.2} width={width * 0.8} fill="#ffffff" opacity={0.4} />
                </>
              )}
            </Mask>
          </Defs>
          <Rect
            height={height}
            width={width}
            fill="#ffffff"
            mask="url(#mask)"
          />
        </Svg>
      </CameraOverlayContainer>
    );
  };

  CameraOverlay.propTypes = {
    maskType: PropTypes.oneOf(['circle', 'rect'])
  };

  return (
    <Portal>
      <Container>
        <Camera
          ref={cameraRef}
          type={Camera.Constants.Type.back}
          captureAudio={false}
          androidCameraPermissionOptions={{
            title: 'Permissão para usar a câmera',
            message: 'Precisamos de sua permissão para utilizar a câmera do seu smartphone',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancelar',
          }}
        />
        <CameraOverlay maskType={maskType} />
        <TitleContainer>
          <Title style={{fontSize: 32, lineHeight: 32, color: "#FFF", marginBottom: 15}}>{jobApplication.documentName}</Title>
          <Caption style={{fontSize: 18, lineHeight: 18, color: "#FFF"}}>TIRE UMA FOTO LEGÍVEL</Caption>
        </TitleContainer>
        <CameraButton
          onPress={takePicture}
        />
        <CameraBackButton
          onPress={toggleCamera}
        />
      </Container>
    </Portal>
  );
}

MaskedCamera.propTypes = {
  maskType: PropTypes.oneOf(['circle', 'rect']),
  onTakePicture: PropTypes.func.isRequired,
  documentName: PropTypes.string.isRequired
};

MaskedCamera.defaultProps = {
  maskType: 'rect',
  onTakePicture: () => {},
  documentName: "Documento"
};

export default MaskedCamera;
