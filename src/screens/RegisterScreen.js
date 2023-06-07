import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { MaterialIcons, Ionicons } from '@expo/vector-icons';

import RegisterSVG from '../../assets/images/misc/registration.svg';
import GoogleSVG from '../../assets/images/misc/google.svg';
import FacebookSVG from '../../assets/images/misc/facebook.svg';
import TwitterSVG from '../../assets/images/misc/twitter.svg';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';

const RegisterScreen = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingHorizontal: 25 }}
      >
        <View style={{ alignItems: 'center' }}>
          <RegisterSVG
            height={300}
            width={300}
            style={{ transform: [{ rotate: '-5deg' }] }}
          />
        </View>
        <Text
          style={{
            fontFamily: 'bitter-medium',
            fontSize: 28,
            color: '#333',
            marginBottom: 30,
          }}
        >
          Register
        </Text>

        <InputField
          label={'Full Name'}
          icon={<Ionicons name='person-outline' size={20} color='#666' />}
        />
        <InputField
          label={'Email ID'}
          icon={<MaterialIcons name='alternate-email' size={20} color='#666' />}
          keyboardType='email-address'
        />
        <InputField
          label={'Password'}
          icon={
            <Ionicons name='ios-lock-closed-outline' size={20} color='#666' />
          }
          inputType='password'
        />
        <InputField
          label={'Confirm Password'}
          icon={
            <Ionicons name='ios-lock-closed-outline' size={20} color='#666' />
          }
          inputType='password'
        />

        <CustomButton label='Register' onPress={() => {}} />
        <Text style={{ textAlign: 'center', color: '#666', marginBottom: 30 }}>
          Or register with ...
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 30,
          }}
        >
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}
          >
            <GoogleSVG height={24} width={24} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}
          >
            <FacebookSVG height={24} width={24} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}
          >
            <TwitterSVG height={24} width={24} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 5,
            justifyContent: 'center',
            marginBottom: 30,
          }}
        >
          <Text>Already have an account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login');
            }}
          >
            <Text
              style={{
                color: '#ad40af',
                fontFamily: 'noto-bold',
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
