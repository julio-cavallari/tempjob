import styled from 'styled-components/native';
import img from './background.jpg';

export const Container = styled.ImageBackground`
  flex: 1;
`;

export const Overlay = styled.View`
  background-color: rgba(0,0,0,0.8);
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const Column = styled.View`
  padding: 30px;
  flex: ${props => props.size ? props.size: 1};
  flex-direction: row;
  justify-content: space-around;
  align-items: stretch;
`;

export const Row = styled.View`
  padding: 30px;
  flex: ${props => props.size ? props.size: 1};
  flex-direction: column;
  justify-content: space-around;
  align-items: stretch;
`;

export const TextBody = styled.Text`
  font-size: 32px;
  color: #fff;
`;
