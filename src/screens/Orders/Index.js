import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import styles from './Style';
import Order from '../../components/Order/Index';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {dummyOrders} from '../../utils/dummyData';

const renderOrderList = (orders) => {
  const [allOrders, setAllOrders] = useState([]);
  const dispatch = useDispatch();
  const stateOrders = useSelector((state) => state.auth.orders);

  const getOrders = () => {
    axios.get('/order').then((res) => {
      dispatch({type: 'GET_ORDERS', payload: {orders: res.data.orders}});
    });
  };

  useEffect(() => {
    getOrders();
    setAllOrders(stateOrders);
  }, []);

  return (
    <FlatList
      data={orders}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item, index}) => <Order order={item} />}
    />
  );
};

const Orders = (props) => {
  return (
    <View style={styles.container}>
      <View>{renderOrderList(dummyOrders)}</View>
    </View>
  );
};

export default Orders;
