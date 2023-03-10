import React from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import Style from './JobCard.style';

function JobCard({job, onSelect}) {
  return (
<TouchableWithoutFeedback onPress={onSelect}>
    <View style={Style.container}>
        <View style={Style.body_container}>
        <Text style={Style.jobName}>{job.name}</Text>
        <Text style={Style.companyName}>{job.company.name}</Text>
        <Text style={Style.locationsName}>{job.locations[0].name}</Text>
        <Text style={Style.jobLevel}>{job.levels[0].short_name}</Text>
        </View>
    </View>
</TouchableWithoutFeedback>
  )
}

export default JobCard;
