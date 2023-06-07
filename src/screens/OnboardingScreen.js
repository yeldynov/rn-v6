import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Bee from '../../assets/cartoon-bee.svg';

const OnboardingScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}
    >
      <Text
        style={{
          marginTop: 50,
          fontSize: 30,
          color: '#20315f',
          fontFamily: 'bitter-bold',
        }}
      >
        LET IT BEE
      </Text>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Bee width={200} height={200} />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={{
          backgroundColor: '#ad40af',
          marginBottom: 50,
          padding: 20,
          width: '90%',
          borderRadius: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Text
          style={{
            fontSize: 18,
            color: '#fff',
            fontFamily: 'noto-regular',
          }}
        >
          Let's begin
        </Text>
        <MaterialIcons name='arrow-forward-ios' size={24} color='#fff' />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
