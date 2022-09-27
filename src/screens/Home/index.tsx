import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Logo from '../../assets/logo.svg';

import {
  Container,
  Header,
  TotalCars,
  HeaderContent,
} from './styles';
import { Car } from '../../components/Car';

export function Home(){
  const carDataOne = {
      brand: 'Audi',
      name: 'RS 5 Coupé',
      rent:{
        period: 'AO DIA',
        price: 120,
      },
      thumbnail: "https://png.monster/wp-content/uploads/2020/11/2018-audi-rs5-4wd-coupe-angular-front-5039562b.png" ,
    }
    const carDataTwo = {
      brand: 'Porsche',
      name: 'Panamera',
      rent:{
        period: 'AO DIA',
        price: 340,
      },
      thumbnail: "https://assets.stickpng.com/images/580b585b2edbce24c47b2cae.png" ,
    }
   return (
     <Container>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
      <Header>
        <HeaderContent>
        <Logo
        width={RFValue(108)}
        height={RFValue(12)}
        />
        <TotalCars>
          Total 12 Carros
        </TotalCars>
        </HeaderContent>
      </Header>
      <Car data={carDataOne}/>
      <Car data={carDataTwo}/>

     </Container>
  );
}