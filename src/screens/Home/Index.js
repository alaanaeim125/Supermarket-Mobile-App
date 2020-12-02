import React, {useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
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

  const keyExtractor1 = (item, index) => item.name + index.toString();
  const renderItem1 = ({item}) => {
    return <Category category={item} />;
  };
  const renderCategories = () => {
    return (
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={categories}
        keyExtractor={keyExtractor1}
        renderItem={renderItem1}
      />
    );
  };

  const keyExtractor2 = (item, index) => item.name + index.toString();
  const renderItem2 = ({item, index}) => {
    return <Product product={item} />;
  };

  const renderProducts = () => {
    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={products}
        keyExtractor={keyExtractor2}
        renderItem={renderItem2}
      />
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.categories}>
        <Text style={styles.titleCategory}>Categories</Text>
        {categories.length > 0 ? (
          renderCategories()
        ) : (
          <View style={styles.loader}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )}
      </View>
      <View style={styles.productsList}>
        <Text style={styles.titleProduct}>Products</Text>
        {products.length > 0 ? (
          renderProducts()
        ) : (
          <View style={styles.loader}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default Home;
