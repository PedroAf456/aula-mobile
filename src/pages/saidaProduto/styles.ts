import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F4F7F5' }, content: { padding: 20, paddingBottom: 36 },
  intro: { marginBottom: 22 }, iconBox: { width: 52, height: 52, borderRadius: 16, backgroundColor: '#FFF0E4', alignItems: 'center', justifyContent: 'center', marginBottom: 15 },
  heading: { fontSize: 25, fontWeight: '700', color: '#1D2B24' }, subtitle: { fontSize: 14, color: '#758078', marginTop: 6 },
  card: { backgroundColor: '#FFFFFF', borderRadius: 18, padding: 18, elevation: 2 }, fieldGroup: { marginBottom: 18 }, label: { fontSize: 11, fontWeight: '700', color: '#59665E', letterSpacing: 0.7, marginBottom: 8 },
  input: { height: 48, borderWidth: 1, borderColor: '#E2E8E3', borderRadius: 10, paddingHorizontal: 13, color: '#27352C', backgroundColor: '#FBFCFB' },
  select: { height: 48, borderWidth: 1, borderColor: '#E2E8E3', borderRadius: 10, paddingHorizontal: 13, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#FBFCFB' }, selectText: { color: '#9299A5', fontSize: 14 },
  options: { flexDirection: 'row', gap: 9, marginTop: 10 }, option: { backgroundColor: '#F1F5F2', color: '#536158', paddingVertical: 8, paddingHorizontal: 12, borderRadius: 8, fontSize: 12, overflow: 'hidden' },
  info: { backgroundColor: '#FFF7EC', padding: 12, borderRadius: 10, flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 18 }, infoText: { color: '#805A32', fontSize: 12, flex: 1 },
  button: { height: 50, backgroundColor: '#C16A2B', borderRadius: 11, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: 9 }, buttonText: { color: '#FFFFFF', fontSize: 15, fontWeight: '700' }
});
