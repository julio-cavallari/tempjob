import React from 'react';
import { Divider, Title, Paragraph, useTheme } from 'react-native-paper';

import { Container, RowContainer, DetailsContainer, ButtonContainer, Button } from './styles';

function JobCard({data, onButtonPress}){
  const theme = useTheme();
  return (
    <Container>
      <RowContainer>
        <DetailsContainer>
          <Title>{data.name}</Title>
          <Paragraph>{data.company.name}</Paragraph>
        </DetailsContainer>
        <ButtonContainer>
          <Button
            icon="eye"
            onPress={onButtonPress}
            size={32}
            backgroundColor={theme.colors.primary}
            color={theme.colors.background}
          />
        </ButtonContainer>
      </RowContainer>
      <Divider />
    </Container>
  );
}

export default React.memo(JobCard);
