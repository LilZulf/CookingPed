import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, Pressable, PressableProps, View, ScrollView } from 'react-native';
import theme from '../theme';

interface TagItem {
  id: string;
  label: string;
  endpoint: string;
}

interface TagsSelectorAtomProps extends PressableProps {
  data: TagItem[];
  onSelect: (value: string) => void;
  onChange: (selectedTag: string, data? : TagItem) => void; // New prop for onChange
}

const TagsSelectorAtom: React.FC<TagsSelectorAtomProps> = ({ data, onSelect, onChange }) => {
  const [userOption, setUserOption] = useState<string>(data.length > 0 ? data[0].id : '');

  const selectHandler = (value: string) => {
    onSelect(value);
    setUserOption(value);
    const selectedItem = data.find(item => item.id === value);
    onChange(value, selectedItem);
  };

  useEffect(() => {
    onChange(userOption, data[0]); // Call onChange when the component initially mounts
  }, []);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false} // Hide the horizontal scrollbar
      contentContainerStyle={styles.scrollContainer}>
      {data.map((item) => (
        <Pressable
          key={item.id}
          style={item.id === userOption ? styles.selected : styles.unselected}
          onPress={() => selectHandler(item.id)}>
          <Text style={item.id === userOption ? styles.optionSelected : styles.option}> {item.label}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  option: {
    fontSize: 12,
    color: theme.colors.black,
    textAlign: 'center',
    fontFamily: 'Mulish-SemiBold'
  },
  optionSelected: {
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Mulish-SemiBold'
  },
  unselected: {
    backgroundColor: 'white',
    margin: 5,
    paddingHorizontal: 12, // Add padding to provide space between items
    borderRadius: 15,
    paddingVertical: 12,
  },
  selected: {
    backgroundColor: theme.colors.primary,
    margin: 5, // Adjust margin as needed
    paddingHorizontal: 12,
    borderRadius: 15,
    paddingVertical: 12,
  },
});

export default React.memo(TagsSelectorAtom);
