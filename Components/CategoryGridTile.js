import { Pressable, View, Text, StyleSheet, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function CategoryGridTile({ title, color, onPress }) {
  return (
    <View
      style={{
        ...styles.gridItem,
        backgroundColor: color,
      }}
    >
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{
          color: '#ccc',
        }}
      >
        <View style={styles.innerContainer}>
          <Text
            style={{
              ...styles.title,
              color: 'white',
            }}
          >
            {title}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
