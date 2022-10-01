import React from 'react';
import { StatusBar } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import { RFValue } from 'react-native-responsive-fontsize';
import Logo from '../../assets/logo.svg';

import {
  Container,
  Header,
  TotalCars,
  HeaderContent,
  CarList,
} from './styles';
import { Car } from '../../components/Car';

export function Home(){
  const navigation = useNavigation();
  const carData = {
      brand: 'Audi',
      name: 'RS 5 Coupé',
      rent:{
        period: 'AO DIA',
        price: 120,
      },
      thumbnail: "https://png.monster/wp-content/uploads/2020/11/2018-audi-rs5-4wd-coupe-angular-front-5039562b.png" ,
    }

    function handleCarDetails(){
      navigation.navigate('CarDetails')
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

      <CarList
      data={[1,2,3]}
      keyExtractor={item => String (item) }
      renderItem={({item})=> <Car data={carData} onPress={handleCarDetails}/>}
      />
     </Container>
  );
}