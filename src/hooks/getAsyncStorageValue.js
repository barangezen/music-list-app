import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';

export const useGetsyncStorageValue = key => {
  const [asyncStorageValue, setAsyncStorageValue] = useState();
  // We use this hook for getting current async storage value
  const getRegisteredUser = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      setAsyncStorageValue(jsonValue);
    } catch (e) {
      // read error
    }
  };
  useEffect(() => {
    getRegisteredUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asyncStorageValue]);
  return asyncStorageValue;
};