// Natanael Vieira Guilherme

import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Image 
        style={styles.logo}
        source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7C0NlbHXsMpd67_3fP8sauaf7Xy2cDkCNMVcN6imz158sgpE0eFyx_5xK&s=10'}}
        />
        <Text style={styles.title}>Centro Ninja</Text>
        <Text style={styles.paragraph}>Seu lugar para se tornar um ninja</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.paragraph}>v1.0 - Natanael Vieira</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  body: {
    flex:6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 70,
    height: 70,
    borderRadius: 10
  },
  title: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  },
  paragraph: {
    color: 'white',
  }
});
