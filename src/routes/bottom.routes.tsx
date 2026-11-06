import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import NovoProduto from '../pages/novoProduto';
import SaidaProduto from '../pages/saidaProduto';
import ControleEstoque from '../pages/controleEstoque';

const Tab = createBottomTabNavigator();

export default function BottomRoutes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: true,
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: '#FFFFFF' },
        headerTintColor: '#26352B',
        headerTitleStyle: { fontWeight: '700', fontSize: 17 },
        tabBarActiveTintColor: '#287A55',
        tabBarInactiveTintColor: '#929B94',
        tabBarStyle: { height: 66, paddingTop: 7, paddingBottom: 8, borderTopColor: '#E8EDE9', backgroundColor: '#FFFFFF' },
        tabBarLabelStyle: { fontSize: 10, fontWeight: '600' },
        tabBarIcon: ({ color, size }) => {
          let iconName: React.ComponentProps<typeof MaterialCommunityIcons>['name'] = 'package-variant';
          if (route.name === 'Novo Produto') iconName = 'package-variant-plus';
          if (route.name === 'Saída') iconName = 'package-variant-minus';
          if (route.name === 'Estoque') iconName = 'warehouse';
          return <MaterialCommunityIcons name={iconName} size={size + 2} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Novo Produto" component={NovoProduto} />
      <Tab.Screen name="Saída" component={SaidaProduto} />
      <Tab.Screen name="Estoque" component={ControleEstoque} />
    </Tab.Navigator>
  );
}
