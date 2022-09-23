import {View, Text, Button, TextInput, StyleSheet} from 'react-native';
import React from 'react';

export default function Login({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Login Here</Text>
      <View
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'flex-start',
          height: 150,
          marginVertical: 30,
        }}>
        <Text>E-mail id</Text>
        <TextInput
          textContentType="emailAddress"
          placeholder="Enter Email"
          style={styles.input}
        />
        <Text>Password</Text>
        <TextInput
          textContentType="password"
          placeholder="Enter Email"
          style={styles.input}
          secureTextEntry={true}
        />
      </View>
      <View
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
          height: 90,
        }}>
        <Button
          title="Login"
          onPress={() => navigation.navigate('HomeScreen')}
        />
        <Text style={{marginTop: 30, marginBottom: 5}}>Sign Up Here</Text>
        <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 200,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
});
