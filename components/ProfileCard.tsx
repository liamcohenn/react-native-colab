import { Image, Text, View } from 'react-native';

type Props = {
  avatarUrl: string;
  name: string;
  role: string;
  bio?: string;
};

export default function ProfileCard({ avatarUrl, name, role, bio }: Props) {
  return (
    <View style={{ width: 280, borderWidth: 1, borderRadius: 16, padding: 16, alignItems: 'center', gap: 8 }}>
      <Image source={{ uri: avatarUrl }} style={{ width: 96, height: 96, borderRadius: 48 }} />
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{name}</Text>
      <Text style={{ opacity: 0.7 }}>{role}</Text>
      {bio ? <Text style={{ textAlign: 'center' }}>{bio}</Text> : null}
    </View>
  );
}

