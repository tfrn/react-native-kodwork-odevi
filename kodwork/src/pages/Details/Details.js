import React from 'react';
import { Text, View, ScrollView, useWindowDimensions, Button, Alert } from 'react-native';
import Style from './Details.style';
import useFetch from '../../hooks/useFetch';
import { REACT_APP_API_URL } from '@env';
import RenderHTML from 'react-native-render-html';
import { useDispatch } from 'react-redux';
import { favoriteAdd } from '../../redux/favorite/favoriteRedux';
import { selectAdd } from '../../redux/selected/selectedRedux';

function Details({ route, navigation }) {
  const { id } = route.params;
  const { loading, error, data } = useFetch(`${REACT_APP_API_URL}/${id}`);
  const dispatch = useDispatch();
  const {width}= useWindowDimensions();
  const source = {
    html:`${data.contents}`,
  }

  const categoryName = data && data.categories && data.categories[0] && data.categories[0].name ? data.categories[0].name : "Unknown";
  const locationName = data && data.location && data.location[0] && data.location[0].name ? data.location[0].name : "Unknown";
  const levelName = data && data.levels && data.levels[0] && data.levels[0].name ? data.levels[0].name : "Unknown";
  const companyName = data && data.company && data.company[0] && data.company[0].name ? data.company[0].name : "Unknown";

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  const addF = (item) => {
    dispatch(favoriteAdd(item));
    Alert.alert("iş favorilere eklendi!");
  }
  const addS = (item) => {
    dispatch(selectAdd(item));
    Alert.alert("başvuru gönderildi!");
  }
  return (
    <ScrollView style={Style.container}>
      <View style={Style.body_container}>
        <Text style={Style.title}>
          {categoryName}
          </Text>
        <Text style={Style.location}>
          {locationName}
        </Text>
        <Text style={Style.levels}>
          {levelName}
        </Text>
        <Text style={Style.levels}>
        {companyName}
        </Text>
        <RenderHTML source={source} contentWidth={width} />
        <View style={{ marginTop: 10 }}>
          <Button title="baş vur" onPress={() => addS({ name: categoryName, company: companyName, location: locationName, level: levelName })}></Button>
        </View>
        <View style={{ marginTop: 10 }}>
          <Button title="takip et" onPress={() => addF({ name: categoryName, company: companyName, location: locationName, level: levelName })}></Button>
        </View>
      </View>      
    </ScrollView>
  );
}

export default Details;
