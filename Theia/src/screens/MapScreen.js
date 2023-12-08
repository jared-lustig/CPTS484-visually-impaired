import React, { useState } from 'react';
import { StyleSheet, Image, View} from "react-native";

import DropdownComponent from "../components/DropDownComponent";

export default function MapScreen() {
  const maps = require.context('../../assets/maps/', true);
  const mapNames = maps.keys();
  const mapList = maps.keys().map(image => maps(image));

  let mapKeys = [];
  mapNames.map((map, index) => mapKeys.push({label: map.replace("./", "").replace("_", " ").replace(".png", ""), value: index.toString()}))

  const [value, setValue] = useState(mapKeys[0].value);

  console.log(value)

  const navigation = useNavigation();

  const handleNavigateToFalls = () => {
    navigation.navigate('FallScreen'); // Replace 'FallScreen' with the actual route name if it's different
  };

  return (
    <View>
      <Image 
      style={{width: 500, height: 300, 
              display: 'block', marginLeft: 'auto',
              marginRight:'auto'}} 
      source={mapList[value]} />
      <DropdownComponent data={mapKeys} value={value} setValue={setValue}/>
      <Button title="Report a Fall" onPress={handleNavigateToFalls} color="#841584"/>
    </View>
  );
}
