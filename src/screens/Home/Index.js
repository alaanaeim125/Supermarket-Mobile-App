import React, {useEffect} from 'react';
import {View, Text, FlatList, ScrollView, SafeAreaView} from 'react-native';
import Category from '../../components/Category/Index';
import Product from '../../components/Product/Index';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import styles from './Styles';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.home.products);
  const categories = useSelector((state) => state.home.categories);

  const getUserData = async () => {
    await axios
      .get('/user/get-data')
      .then((res) => {
        dispatch({type: 'SET_USER', payload: {user: res.data.userData}});
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getUserData();
  }, []);

  const renderCategories = () => {
    return (
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={categories}
        keyExtractor={(item, index) => item.name + index.toString()}
        renderItem={({item}) => {
          return <Category category={item} />;
        }}
      />
    );
  };

  const renderProducts = () => {
    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={products}
        keyExtractor={(item, index) => item.name + index.toString()}
        renderItem={({item, index}) => {
          return <Product product={item} />;
        }}
      />
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.titleCategory}>Categories</Text>
        {renderCategories()}
      </View>
      <View style={styles.productsList}>
        <Text style={styles.titleProduct}>Products</Text>
        {renderProducts()}
      </View>
    </ScrollView>
  );
};

export default Home;
