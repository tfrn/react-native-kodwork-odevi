import React, {useState} from 'react'
import { SafeAreaView, FlatList } from 'react-native';
import {REACT_APP_API_URL, REACT_APP_API_CODE} from '@env';
import useFetch from '../../hooks/useFetch';
import JobCard from '../../components/JobCard';

function Jobs({navigation}) {

  const [page, setPage]= useState(1);
  const {error, loading, data} = useFetch(`${REACT_APP_API_URL}?page=${page}&api_key=${REACT_APP_API_CODE}`);
  const handleJobSelect=(id)=>{
    navigation.navigate("detailPage", {id});
  };
  const renderJobs = ({item}) => <JobCard job={item} onSelect={()=>handleJobSelect(item.id)}></JobCard>

  return (
    <SafeAreaView>
      <FlatList data={data.results} renderItem={renderJobs}></FlatList>
    </SafeAreaView>
  )
}

export default Jobs;
