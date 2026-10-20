import React, { useState } from 'react';
import { Button, Image, Modal, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native Modal Demo</Text>
      <Text style={styles.subtitle}>Tap the button below to view an image inside a Modal</Text>

      <Button
        title="Open Image Modal"
        onPress={() => setModalVisible(true)}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Image in Modal</Text>

            <Image
              source={require('./assets/icon.png')}
              style={styles.modalImage}
              resizeMode="contain"
            />

            <View style={styles.buttonContainer}>
              <Button
                title="Close Modal"
                onPress={() => setModalVisible(false)}
              />
            </View>
          </View>
        </View>
      </Modal>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    width: '90%',
    maxWidth: 320,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  modalImage: {
    width: 200,
    height: 200,
    marginBottom: 16,
  },
  buttonContainer: {
    width: '100%',
  },
});

