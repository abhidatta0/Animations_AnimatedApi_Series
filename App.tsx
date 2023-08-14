import React from 'react';
import {
  SafeAreaView,
  Text,
} from 'react-native';
import SimpleTextMount from './src/components/SimpleTextMount';
import MovingCard from './src/components/MovingCard';

const App = () => {
  return (
    <SafeAreaView>
      {/* <SimpleTextMount /> */}
      <MovingCard />
    </SafeAreaView>
  );
};

export default App;