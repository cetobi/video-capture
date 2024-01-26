import React from 'react';
import { SafeAreaView, View, Button } from 'react-native';

import { Video } from 'expo-av'

import { VideoPlayerProps } from './props'
import { styles } from './styles';

export function VideoPlayer({ video, onShare, onSave, onDiscard }: VideoPlayerProps) {
  return (
    <SafeAreaView style={styles.container}>
      <Video
        style={styles.video}
        source={{ uri: video.uri }}
        useNativeControls
        isLooping
      />

      <View style={styles.menuButton}>
        <Button title='Share' onPress={onShare} />
        <Button title='Save' onPress={onSave} />
        <Button title='Discard' onPress={onDiscard} />
      </View>
    </SafeAreaView>
  );
}