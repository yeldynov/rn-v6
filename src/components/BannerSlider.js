import { View, Text, Image } from 'react-native';
import React from 'react';

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Error: ViewPropTypes']);

export default function BannerSlider({ data }) {
  return (
    <View>
      <Image
        source={data.image}
        style={{ height: 150, width: 300, borderRadius: 10 }}
      />
    </View>
  );
}
