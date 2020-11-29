import React from 'react';
import {Dimensions, Modal, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';

const ShowErrMsg = () => {
  const state = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  return (
    <View style={styles.modelContainer}>
      <Modal animationType="fade" visible={state.showError} transparent={true}>
        <View style={styles.contentModal}>
          <View style={styles.contentMsgError}>
            <Text style={styles.errMessage}>{state.errMessage}</Text>
          </View>
          <View style={styles.line} />
          <View style={styles.btn}>
            <TouchableOpacity
              onPress={() =>
                dispatch({
                  type: 'SHOW_ERROR',
                  payload: {
                    showError: false,
                    errMessage: '',
                  },
                })
              }>
              <Text style={styles.btnText}>Ok</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  contentModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentMsgError: {
    width: width * 0.8,
    alignItems: 'center',
    backgroundColor: '#BBC9DD',
    padding: 15,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  errMessage: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  line: {
    height: 2,
    backgroundColor: 'gray',
    width: width * 0.8,
    padding: 2,
  },
  btn: {
    width: width * 0.8,
    alignItems: 'center',
    backgroundColor: '#BBC9DD',
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  btnText: {fontWeight: 'bold', fontSize: 20},
});

export default ShowErrMsg;
