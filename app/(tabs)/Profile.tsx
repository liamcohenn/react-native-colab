import { Text, View } from 'react-native';
import ProfileCard from '../../components/ProfileCard';

export default function ProfileScreen() {
  return (
    <View style={{ flex: 1, gap: 16, alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <Text style={{ fontSize: 20 }}>Perfil</Text>
      <ProfileCard
        avatarUrl="https://i.pravatar.cc/150?img=3"
        name="Ada Lovelace"
        role="Developer"
        bio="Pionera en la programación."
      />
    </View>
  );
}
