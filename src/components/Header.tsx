import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { useAuthStore } from '../store/useAuthStore';

import { styles } from '../styles/headerStyles';

export default function Header() {

  const user = useAuthStore(
    (state) => state.user
  );

  const logout = useAuthStore(
    (state) => state.logout
  );

  return (

    <View style={styles.container}>

      <View>

        <Text style={styles.greeting}>
          Olá,
        </Text>

        <Text style={styles.userName}>
          {user?.name}
        </Text>

      </View>

      <TouchableOpacity
        onPress={logout}
      >

        <Ionicons
          name="log-out-outline"
          size={26}
          color="#EF4444"
        />

      </TouchableOpacity>

    </View>

  );
}