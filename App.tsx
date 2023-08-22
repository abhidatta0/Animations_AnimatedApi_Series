import React from 'react';
import {
  SafeAreaView,
  Text,
} from 'react-native';
import SimpleTextMount from './src/components/SimpleTextMount';
import MovingCard from './src/components/MovingCard';
import SequenceVsParallel from './src/components/SequenceVsParallel';
import CardColorInterpolate from './src/components/CardColorInterpolate';
import MediumClapButton from './src/components/MediumClapButton';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <SimpleTextMount /> */}
      {/* <MovingCard /> */}
      {/* <SequenceVsParallel /> */}
      {/* <CardColorInterpolate /> */}
      <MediumClapButton maxCountPerUser={50} startCount={12}/>
    </SafeAreaView>
  );
};

export default App;