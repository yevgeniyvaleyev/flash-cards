import React from 'react';
import { View, Platform, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { Animated } from 'react-native';
import { main } from '../utils/colors';
import { Styles } from '../utils/common-styles';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

export const SuccessMessage = ({bounceValue}) => (
  <Animated.Text style={[Styles.successMessage, {opacity: bounceValue}]}>
    {Platform.OS === 'ios' ?
      <FontAwesome name='check-circle-o' size={60} color={main} /> :
      <Ionicons name='md-checkmark-circle-outline' size={60} color={main} />
    }
  </Animated.Text>
)