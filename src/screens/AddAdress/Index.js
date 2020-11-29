import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AppButton from '../../components/AppButton/Index';
import Input from '../../components/Input/Input';
import axios from 'axios';
import styles from './Style';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

const AddAdress = () => {
  const [inputs, setInputs] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [selectedAddressId, setSelectedAddressId] = useState();

  const [addresToShip, setAddressToShip] = useState({
    name: '',
    phone: '',
    city: '',
    area: '',
    street: '',
    building: '',
  });
  const dispatch = useDispatch();
  const state = useSelector((state) => state.auth);

  const updateInputs = (key) => {
    return (value) => {
      setInputs({...inputs, [key]: value});
    };
  };

  const addAddress = () => {
    const {name, phone, city, area, street, building} = inputs;

    axios
      .post('/address', {name, phone, city, area, street, building})
      .then((res) => {
        axios.get('/user/get-data').then((res) => {
          dispatch({type: 'SET_USER', payload: {user: res.data.userData}});
          setAddresses(res.data.userData.addresses);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const selectAddresses = (addressId, index) => {
    setSelectedAddressId(addressId);
    setAddressToShip(state.user.addresses[index]);

    dispatch({
      type: 'SHIPPING_ADDRESS',
      payload: {shippingAddress: state.user.addresses[index]},
    });

    AsyncStorage.setItem(
      'shippingAddress',
      JSON.stringify(state.user.addresses[index]),
    );
  };

  useEffect(() => {
    if (state.shippingAddress) {
      const addressIdShipping = state.shippingAddress;
      setSelectedAddressId(addressIdShipping._id);
    }
  }, []);

  useEffect(() => {
    axios.get('/user/get-data').then((res) => {
      dispatch({type: 'SET_USER', payload: {user: res.data.userData}});
      setAddresses(res.data.userData.addresses);
    });
  }, []);

  useEffect(() => {
    setIsValid(
      inputs.name &&
        inputs.phone &&
        inputs.city &&
        inputs.area &&
        inputs.street &&
        inputs.building,
    );
  }, [inputs]);
  return (
    <View style={styles.container}>
      <ScrollView style={styles.Address}>
        <View style={styles.inputAddress}>
          <Input
            placeholder="Name"
            stacked
            inputStyleWrapper={styles.inputStyleWrapper}
            onChangeText={updateInputs('name')}
          />
        </View>

        <View style={styles.inputAddress}>
          <Input
            placeholder="Phone"
            stacked
            inputStyleWrapper={styles.inputStyleWrapper}
            onChangeText={updateInputs('phone')}
          />
        </View>

        <View style={styles.inputAddress}>
          <Input
            placeholder="City"
            stacked
            inputStyleWrapper={styles.inputStyleWrapper}
            onChangeText={updateInputs('city')}
          />
        </View>
        <View style={styles.inputAddress}>
          <Input
            placeholder="Area"
            stacked
            inputStyleWrapper={styles.inputStyleWrapper}
            onChangeText={updateInputs('area')}
          />
        </View>
        <View style={styles.inputAddress}>
          <Input
            placeholder="Street"
            stacked
            inputStyleWrapper={styles.inputStyleWrapper}
            onChangeText={updateInputs('street')}
          />
        </View>
        <View style={styles.inputAddress}>
          <Input
            placeholder="Building"
            stacked
            inputStyleWrapper={styles.inputStyleWrapper}
            onChangeText={updateInputs('building')}
          />
        </View>
        {addresses.map((address, index) => {
          return (
            <TouchableOpacity
              style={[
                styles.address,
                {
                  backgroundColor:
                    address._id === selectedAddressId ? 'darkgray' : 'white',
                },
              ]}
              key={address._id}
              onPress={() => selectAddresses(address._id, index)}>
              <Text style={styles.infoAddress}>City : {address.city}</Text>
              <Text style={styles.infoAddress}>Area : {address.area}</Text>
              <Text style={styles.infoAddress}>
                Building : {address.building}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <View style={styles.save}>
        <AppButton title="ADD" onPress={addAddress} disabled={!isValid} />
      </View>
    </View>
  );
};

export default AddAdress;
