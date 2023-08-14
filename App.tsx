import React from 'react';
import {
  SafeAreaView,
  Text,
} from 'react-native';
import SimpleTextMount from './src/components/SimpleTextMount';
import MovingCard from './src/components/MovingCard';
import SequenceVsParallel from './src/components/SequenceVsParallel';

const App = () => {
  return (
    <SafeAreaView>
      {/* <SimpleTextMount /> */}
      {/* <MovingCard /> */}
      <SequenceVsParallel />
    </SafeAreaView>
  );
};

export default App;