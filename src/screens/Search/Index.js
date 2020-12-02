import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Input from '../../components/Input/Input';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './Style';
import Product from '../../components/Product/Index';
import {getSearchProduct} from '../../store/actions/SearchAction';
import EmptyData from '../../components/EmptyData/Index';

const Search = () => {
  const [query, setQuery] = useState();
  const [products, setProducts] = useState([]);
  const productSearch = useSelector((state) => state.search.products);
  const dispatch = useDispatch();

  useEffect(() => {
    setProducts(products.concat(productSearch));
  }, [productSearch]);

  const fetchProducts = () => {
    dispatch(getSearchProduct(query));
  };

  useEffect(() => {
    setProducts([]);
    dispatch({type: 'UPDATE_SEARCH_PAGE', payload: {page: 1}});
    if (query) {
      fetchProducts();
    }
  }, [query]);

  const renderIconRight = () => {
    return <Icon style={styles.icon} name="search" />;
  };
  return (
    <View style={styles.container}>
      <Input
        placeholder="Type Here ..... "
        bordered
        renderIconRight={renderIconRight}
        inputStyleWrapper={styles.inputStyleWrapper}
        onChangeText={(query) => setQuery(query)}
      />
      {products && products.length > 0 ? (
        <View style={{marginTop: 15}}>
          <FlatList
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={products}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => {
              return <Product product={item} />;
            }}
            onEndReachedThreshold={0.5}
            onEndReached={() => fetchProducts()}
          />
        </View>
      ) : (
        <EmptyData message="Data Not Found" nameIcon="flask-empty-outline" />
      )}
    </View>
  );
};

export default Search;
