import React from "react";
import { useTheme } from "styled-components";
import { BackButton } from "../../components/BackButton";
import { StatusBar } from "react-native";
import {useNavigation} from '@react-navigation/native';

import ArrowSvg from "../../assets/arrow.svg";
import { Button } from "../../components/Button";
import { Calendar } from "../../components/Calendar";
import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DataInfo,
  DataTitle,
  DataValue,
  Content,
  Footer,
} from "./styles";


export function Scheduling() {
  const theme = useTheme();
  const navigation = useNavigation();
  

  function handleConfirmRental(){
    navigation.navigate('SchedulingDetails')
  }

  return (
    <Container>
      <Header>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <BackButton 
        onPress={() => {}} 
        color={theme.colors.shape} />
        <Title>
         Escolha uma{"\n"}
         data de início e{"\n"}
         fim de aluguel
        </Title>
        <RentalPeriod>
          <DataInfo>
            <DataTitle>DE</DataTitle>
            <DataValue selected={false}>18/06/2022</DataValue>
          </DataInfo>
          <ArrowSvg />
          <DataInfo>
            <DataTitle>ATÉ</DataTitle>
            <DataValue selected={false}>18/06/2022</DataValue>
          </DataInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar/>
      </Content>
      <Footer>
        <Button title="Confirmar" onPress={handleConfirmRental}/>
      </Footer>
    </Container>
  );
}
