import React from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './styles';

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return <View style={styles.fieldGroup}><Text style={styles.label}>{label}</Text><TextInput style={styles.input} placeholder={placeholder} placeholderTextColor="#9299A5" editable={false} /></View>;
}

export default function SaidaProduto() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.intro}>
        <View style={styles.iconBox}><MaterialCommunityIcons name="package-variant-minus" size={27} color="#C16A2B" /></View>
        <Text style={styles.heading}>Saída de produto</Text>
        <Text style={styles.subtitle}>Registre a retirada de itens do estoque.</Text>
      </View>
      <View style={styles.card}>
        <Field label="NOME DO PRODUTO" placeholder="Selecione ou informe o produto" />
        <Field label="QUANTIDADE DE SAÍDA" placeholder="Ex.: 2" />
        <View style={styles.fieldGroup}>
          <Text style={styles.label}>MOTIVO DA RETIRADA</Text>
          <View style={styles.select}><Text style={styles.selectText}>Selecione o motivo</Text><MaterialCommunityIcons name="chevron-down" size={23} color="#68746C" /></View>
          <View style={styles.options}><Text style={styles.option}>Venda</Text><Text style={styles.option}>Avarias</Text><Text style={styles.option}>Uso Interno</Text></View>
        </View>
        <View style={styles.info}><MaterialCommunityIcons name="information-outline" size={19} color="#9B642F" /><Text style={styles.infoText}>Confira a quantidade antes de registrar a retirada.</Text></View>
        <View style={styles.button}><MaterialCommunityIcons name="arrow-up-circle-outline" size={20} color="#FFFFFF" /><Text style={styles.buttonText}>Registrar saída</Text></View>
      </View>
    </ScrollView>
  );
}
