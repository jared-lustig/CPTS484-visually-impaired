/*
reference(s): 
https://github.com/claysimps/RN-swiper-components/tree/FlatList
https://blog.logrocket.com/swiper-components-react-native/
*/ 

import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
};