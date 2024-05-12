import {StyleSheet, Text, View} from 'react-native';
import React, { useEffect, useState} from 'react';

const HomeScreen = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data from the API endpoint
    fetch('http://192.168.1.7:3000/api/user')
      .then(response => response.json())
      .then(data => {
        setUser(data); // Update the state with fetched user data
      })
      .catch(error => console.log('Error fetching users', error));
  }, []);

  return (
    <View>
      {
        user && (
          <>
            <Text>{user.name}</Text>
            <Text>{user.age}</Text>
          </>
        )
      }
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
