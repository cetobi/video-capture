import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { Camera } from 'expo-camera';

import { CameraViewProps } from './props'
import { styles } from './styles';

export function CameraView({ cameraRef, isRecording, onRecord, onStopRecording }: CameraViewProps) {
  return (
    <Camera style={styles.container} ref={cameraRef}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonRecord} onPress={isRecording ? onStopRecording : onRecord}>
          <Text style={styles.buttonText}>
            {isRecording ? 'Stop Recording' : 'Start Recording'}
          </Text>
        </TouchableOpacity>
      </View>
    </Camera>
  );
}