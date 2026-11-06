import { StyleSheet } from 'react-native';
export const style = StyleSheet.create({
  tabArea: { flexDirection: 'row', height: 66, justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#FFFFFF', borderTopWidth: 1, borderTopColor: '#E8EDE9', paddingBottom: 5, paddingTop: 5 },
  tabItem: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 3 },
  tabLabel: { fontSize: 10, fontWeight: '600' },
});
