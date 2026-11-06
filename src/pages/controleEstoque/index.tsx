import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './styles';

const products = [
  { name: 'Teclado sem fio', category: 'Acessórios', quantity: 24, status: 'Em Estoque', low: false },
  { name: 'Mouse óptico', category: 'Acessórios', quantity: 3, status: 'Estoque Baixo', low: true },
  { name: 'Monitor 24 polegadas', category: 'Monitores', quantity: 12, status: 'Em Estoque', low: false },
  { name: 'Cabo HDMI', category: 'Cabos', quantity: 2, status: 'Estoque Baixo', low: true },
  { name: 'Headset USB', category: 'Áudio', quantity: 8, status: 'Em Estoque', low: false },
];

export default function ControleEstoque() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.intro}>
        <View style={styles.iconBox}><MaterialCommunityIcons name="warehouse" size={27} color="#287A55" /></View>
        <Text style={styles.heading}>Controle de estoque</Text>
        <Text style={styles.subtitle}>Acompanhe a disponibilidade dos seus produtos.</Text>
      </View>
      <View style={styles.summaryRow}>
        <View style={styles.summaryCard}><Text style={styles.summaryNumber}>05</Text><Text style={styles.summaryLabel}>Produtos</Text></View>
        <View style={styles.summaryCard}><Text style={[styles.summaryNumber, { color: '#C16A2B' }]}>02</Text><Text style={styles.summaryLabel}>Estoque baixo</Text></View>
      </View>
      <View style={styles.listHeader}><Text style={styles.sectionTitle}>Produtos cadastrados</Text><Text style={styles.count}>5 itens</Text></View>
      {products.map((product) => (
        <View key={product.name} style={styles.productCard}>
          <View style={styles.productIcon}><MaterialCommunityIcons name="package-variant" size={23} color="#287A55" /></View>
          <View style={styles.productInfo}><Text style={styles.productName}>{product.name}</Text><Text style={styles.category}>{product.category}</Text><View style={[styles.status, product.low ? styles.lowStatus : styles.okStatus]}><View style={[styles.dot, product.low ? styles.lowDot : styles.okDot]} /><Text style={[styles.statusText, product.low ? styles.lowText : styles.okText]}>{product.status}</Text></View></View>
          <View style={styles.quantityBox}><Text style={styles.quantity}>{product.quantity}</Text><Text style={styles.unit}>unidades</Text></View>
        </View>
      ))}
      <Text style={styles.footer}>Dados demonstrativos para visualização.</Text>
    </ScrollView>
  );
}
