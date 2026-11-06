import React from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './styles';

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <View style={styles.fieldGroup}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} placeholder={placeholder} placeholderTextColor="#9299A5" editable={false} />
    </View>
  );
}

export default function NovoProduto() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.intro}>
        <View style={styles.iconBox}><MaterialCommunityIcons name="package-variant-plus" size={27} color="#287A55" /></View>
        <Text style={styles.heading}>Cadastrar produto</Text>
        <Text style={styles.subtitle}>Adicione um novo item ao seu inventário.</Text>
      </View>
      <View style={styles.card}>
        <Field label="NOME DO PRODUTO" placeholder="Ex.: Teclado sem fio" />
        <Field label="CATEGORIA" placeholder="Ex.: Acessórios" />
        <View style={styles.row}>
          <View style={styles.half}><Field label="QUANTIDADE" placeholder="0" /></View>
          <View style={styles.half}><Field label="PREÇO UNITÁRIO" placeholder="R$ 0,00" /></View>
        </View>
        <View style={styles.button}><MaterialCommunityIcons name="plus-circle-outline" size={20} color="#FFFFFF" /><Text style={styles.buttonText}>Cadastrar produto</Text></View>
      </View>
    </ScrollView>
  );
}
