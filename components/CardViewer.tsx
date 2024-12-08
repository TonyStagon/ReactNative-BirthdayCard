import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

interface CardViewerProps {
  cardData: {
    readerName: string;
    message: string;
    imageUri: string | null;
  };
  onEdit: () => void;
}

const CardViewer: React.FC<CardViewerProps> = ({ cardData, onEdit }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.cardTitle}>Happy Birthday, {cardData.readerName}!</Text>
      <Text style={styles.cardMessage}>{cardData.message}</Text>
      {cardData.imageUri && <Image source={{ uri: cardData.imageUri }} style={styles.image} />}
      <Button title="Edit Card" onPress={onEdit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardMessage: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
});

export default CardViewer;
