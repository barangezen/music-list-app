import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setActiveUser } from "../../features/UserSlice/UserSlice";
import { useGetsyncStorageValue } from "./hooks/getAsyncStorageValue";

export const Home = () => {
    const asyncStorageValue = useGetsyncStorageValue('registeredUser');
    console.log('asyncStorageValue', asyncStorageValue);
    const dispatch = useDispatch();
    const activeUser = useSelector(state => state.user)
    console.log('activeUser',activeUser)
    useEffect(() => {
        if (asyncStorageValue?.length > 0) {
          dispatch(setActiveUser(asyncStorageValue));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [asyncStorageValue]);
    return (
        <View><Text>Home</Text></View>
    )
}