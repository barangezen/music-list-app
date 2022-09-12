import React from 'react';
import {Pressable, Text, View} from 'react-native';

export const CustomButton = ({
  title,
  buttonContainerStyle,
  buttonTextStyle,
  onPress,
  isDisabled,
}) => {
  return (
    <Pressable onPress={onPress} disabled={isDisabled}>
      <View style={buttonContainerStyle}>
        <Text style={buttonTextStyle}>{title}</Text>
      </View>
    </Pressable>
  );
};