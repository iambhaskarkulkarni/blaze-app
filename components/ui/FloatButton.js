import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function FloatButton({ icon, color, size, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Ionicons name={icon} color={color} size={size} />
    </Pressable>
  );
}



export default FloatButton;

const styles = StyleSheet.create({

                  borderWidth: 1,
                  borderColor: 'blue',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 70,
                  position: 'absolute',
                  top: 1000,
                  right: 20,
                  height: 70,
                  backgroundColor: 'blue',
                  borderRadius: 100,
                },
            
 
);