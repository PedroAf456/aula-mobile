import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { style } from './styles';

export default function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  return (
    <View style={style.tabArea}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel ?? options.title ?? route.name;
        const focused = state.index === index;
        const color = focused ? '#287A55' : '#929B94';
        let iconName: React.ComponentProps<typeof MaterialCommunityIcons>['name'] = 'circle-outline';
        if (route.name === 'Novo Produto') iconName = 'package-variant-plus';
        if (route.name === 'Saída') iconName = 'package-variant-minus';
        if (route.name === 'Estoque') iconName = 'warehouse';

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={focused ? { selected: true } : {}}
            onPress={() => {
              const event = navigation.emit({ type: 'tabPress', target: route.key, canPreventDefault: true });
              if (!focused && !event.defaultPrevented) navigation.navigate(route.name, route.params);
            }}
            onLongPress={() => navigation.emit({ type: 'tabLongPress', target: route.key })}
            style={style.tabItem}
          >
            <MaterialCommunityIcons name={iconName} size={23} color={color} />
            <Text style={[style.tabLabel, { color }]}>{typeof label === 'string' ? label : route.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
