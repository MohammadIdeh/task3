import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import CounterComponent from './CounterComponent';

const Home = () => {
  const [total, setTotal] = useState(0);

  const handleTotalChange = (value) => {
    setTotal(total + value);
  };

  const handleShowTotal = () => {
    alert(`Total Count: ${total}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <CounterComponent
          name="1"
          onChange={handleTotalChange}
        />
      </View>
      <View style={styles.box}>
        <CounterComponent
          name="2"
          onChange={handleTotalChange}
        />
      </View>
      <View style={styles.box}>
        <CounterComponent
          name="3"
          onChange={handleTotalChange}
        />
      </View>
      <Text style={styles.total}>Total Count: {total}</Text>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  box: {
    marginBottom: 20,
    width: '80%',
  },
  total: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Home;
