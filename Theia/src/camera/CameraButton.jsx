import React from 'react';
import { TouchableOpacity, View } from 'react-native';

export const CameraButton = ({children, onPress}) => (
    <TouchableOpacity
        style={{
            top: -30,
            justifyContent: 'center', 
            alignItems: 'center',
        }}
    >
        <View style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: 'white'
        }}>
            {children}
        </View>
    </TouchableOpacity>
)