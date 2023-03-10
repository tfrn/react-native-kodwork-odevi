import React from 'react';
import { View, Text, Button, FlatList, TouchableWithoutFeedback } from 'react-native';
import Style from './FavoriteJobs.style';
import { useSelector, useDispatch } from 'react-redux';
import { favoriteDelete } from '../../redux/favorite/favoriteRedux';
function FavoriteJobs() {
  const favoriteJobs = useSelector((state)=>state.favorite.value);
  const dispatch = useDispatch();

  const deleteF = (item) => {
    dispatch(favoriteDelete(item));
  }

  const renderJobs = ({item}) => (
    <View>
      <View style={Style.body_container}>
        <View style={Style.toucableButon}>
          <TouchableWithoutFeedback>
            <View>
              <Text style={Style.jobName1}>{item.name}</Text>
              <Text style={Style.jobName2}>{item.company}</Text>
              <View style={{flex:1, flexDirection:"row"}}>
                <View style={{flex:2}}>
                  <Text style={Style.jobName3}>{item.location}</Text>
                </View>
                <View style={{flex:2}}>
                  <Text style={Style.jobName4}>{item.level}</Text>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={{ marginTop: 10 }}>
          <Button title="stop following" onPress={() => deleteF({ name: item.name, company: item.company, location: item.location, level: item.level })}></Button>
        </View>
      </View>
    </View>
  );

  const renderNoData = () => (
    <View style={Style.noDataContainer}>
      <Text style={Style.noData}>Hiç favori iş ilanı yok :( </Text>
    </View>  
  );

  return (
    favoriteJobs.length > 0 ?
    <View style={Style.container}>
      <FlatList data={favoriteJobs} renderItem={renderJobs}></FlatList>
    </View> :
    renderNoData()
  );
}


export default FavoriteJobs;
