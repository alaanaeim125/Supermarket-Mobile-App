import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {styles} from './Style';
import ParentCategory from '../../components/ParentCategory/Index';
import Product from '../../components/Product/Index';

const Category = (props) => {
  const {category} = props.route.params;
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState(category);

  const categoryNextPage = useSelector(
    (state) => state.home.categoryProductNextPage[category._id],
  );
  const categoryProductNextPage =
    categoryNextPage === undefined ? 1 : categoryNextPage;

  const parentCategory = useSelector((state) => state.home.parentCategory);

  const categoryProducts =
    useSelector((state) => state.home.categoryProducts[selectedCategory._id]) ||
    [];

  const getParentCategory = async () => {
    await axios.get('/category/get-children/' + category._id).then((res) => {
      dispatch({
        type: 'GET_PARENT_CATEGORY',
        payload: {parentCategory: res.data.children},
      });
    });
  };

  const keyExtractor = (item, index) => item.name + index.toString();

  const renderParentCategory = (
    categories,
    selectedCategory,
    setSelectedCategory,
  ) => {
    const renderItem = React.useCallback(
      ({item}) => {
        return (
          <ParentCategory
            category={item}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        );
      },
      [selectedCategory, setSelectedCategory],
    );

    return (
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={categories}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    );
  };

  const fetchCategoryProduct = (selectedCategory) => {
    const endPoint = selectedCategory.parentId
      ? '/product/category/'
      : '/product/parent-category/';
    if (categoryProductNextPage) {
      axios
        .get(endPoint, {
          params: {id: selectedCategory._id, page: categoryProductNextPage},
        })
        .then((res) => {
          const {lastPage, nextPage} = res.data;
          const page = nextPage > lastPage ? null : nextPage;

          dispatch({
            type: 'CATEGORY_PRODUCT_NEXT_PAGE',
            payload: {
              categoryId: selectedCategory._id,
              nextPage: page,
            },
          });

          dispatch({
            type: 'APPEND_PRODUCTS_TO_CATEGORY',
            payload: {
              categoryId: selectedCategory._id,
              products: res.data.data,
            },
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    getParentCategory();
  }, []);

  useEffect(() => {
    categoryProducts.length === 0 && fetchCategoryProduct(selectedCategory);
  }, [selectedCategory]);

  const keyExtractor2 = (item, index) => item.title + index.toString();
  const renderItem2 = ({item}) => {
    return <Product product={item} />;
  };

  const renderProducts = () => {
    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={categoryProducts}
        keyExtractor={keyExtractor2}
        renderItem={renderItem2}
        onEndReachedThreshold={0.5}
        onEndReached={() => fetchCategoryProduct(selectedCategory)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.category}>
        {parentCategory &&
          renderParentCategory(
            [category, ...parentCategory],
            selectedCategory,
            setSelectedCategory,
          )}
      </View>
      {categoryProducts.length > 0 ? (
        <View style={styles.productsList}>
          <Text style={styles.titleProduct}>Products</Text>
          {renderProducts()}
        </View>
      ) : (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
    </View>
  );
};

export default Category;
