import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F4F7F5' }, content: { padding: 20, paddingBottom: 36 },
  intro: { marginBottom: 22 }, iconBox: { width: 52, height: 52, borderRadius: 16, backgroundColor: '#E1F1E8', alignItems: 'center', justifyContent: 'center', marginBottom: 15 },
  heading: { fontSize: 25, fontWeight: '700', color: '#1D2B24' }, subtitle: { fontSize: 14, color: '#758078', marginTop: 6 },
  card: { backgroundColor: '#FFFFFF', borderRadius: 18, padding: 18, elevation: 2 }, fieldGroup: { marginBottom: 17 }, label: { fontSize: 11, fontWeight: '700', color: '#59665E', letterSpacing: 0.7, marginBottom: 8 },
  input: { height: 48, borderWidth: 1, borderColor: '#E2E8E3', borderRadius: 10, paddingHorizontal: 13, color: '#27352C', backgroundColor: '#FBFCFB' },
  row: { flexDirection: 'row', gap: 12 }, half: { flex: 1 }, button: { height: 50, backgroundColor: '#287A55', borderRadius: 11, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: 9, marginTop: 4 }, buttonText: { color: '#FFFFFF', fontSize: 15, fontWeight: '700' }
});
