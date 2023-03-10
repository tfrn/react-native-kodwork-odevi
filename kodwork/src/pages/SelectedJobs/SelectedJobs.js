import React from 'react';
import { View, Text, Button, FlatList, TouchableWithoutFeedback } from 'react-native';
import Style from './SelectedJobs.style';
import { useSelector, useDispatch } from 'react-redux';
import { selectDelete } from '../../redux/selected/selectedRedux';
function SelectedJobs() {
  const selectJobs = useSelector((state)=>state.select.value);
  const dispatch = useDispatch();

  const deleteS = (item) => {
    dispatch(selectDelete(item));
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
          <Button title="başvuru sil" onPress={() => deleteS({ name: item.name, company: item.company, location: item.location, level: item.level })}></Button>
        </View>
      </View>
    </View>
  );

  const renderNoData = () => (
    <View style={Style.noDataContainer}>
      <Text style={Style.noData}>Başvuru yaptığın ilan yok :( </Text>
    </View>  
  );

  return (
    selectJobs.length > 0 ?
    <View style={Style.container}>
      <FlatList data={selectJobs} renderItem={renderJobs}></FlatList>
    </View> :
    renderNoData()
  );
}


export default SelectedJobs;
