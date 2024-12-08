import React, { useState } from 'react';
import { View } from 'react-native';
import CardEditor from './components/CardEditor';
import CardViewer from './components/CardViewer';

const App: React.FC = () => {
  const [isEditing, setIsEditing] = useState(true);
  const [cardData, setCardData] = useState({
    readerName: '',
    message: '',
    imageUri: null,
  });

  const handleSave = (data: typeof cardData) => {
    setCardData(data);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <View style={{ flex: 1 }}>
      {isEditing ? (
        <CardEditor onSave={handleSave} />
      ) : (
        <CardViewer cardData={cardData} onEdit={handleEdit} />
      )}
    </View>
  );
};

export default App;
