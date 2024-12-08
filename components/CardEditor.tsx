import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

interface CardEditorProps {
  onSave: (cardData: CardData) => void;
}

interface CardData {
  readerName: string;
  message: string;
  imageUri: string | null;
}

const CardEditor: React.FC<CardEditorProps> = ({ onSave }) => {
  const [readerName, setReaderName] = useState('');
  const [message, setMessage] = useState('');
  const [imageUri, setImageUri] = useState<string | null>(null);

  const handleSave = () => {
    onSave({ readerName, message, imageUri });
  };

  const handleAddImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>To:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter reader's name"
        value={readerName}
        onChangeText={setReaderName}
      />

      <Text style={styles.label}>Message:</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Enter your message"
        value={message}
        onChangeText={setMessage}
        multiline
      />

      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}

      <Button title="Add Image" onPress={handleAddImage} />
      <Button title="Save Card" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 10,
  },
});

export default CardEditor;
