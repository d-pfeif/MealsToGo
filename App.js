import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Text, View, Platform, StatusBar } from 'react-native';

const isAndroid = Platform.OS === 'android';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <View style={{ padding: 16, backgroundColor: "green" }}>
        <Text>Search</Text>
      </View>

      <View style={{ flex: 1, padding: 16, backgroundColor: "purple" }}>
        <Text>List</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
});
