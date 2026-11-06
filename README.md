# Mini Sistema de Gestão de Estoque

Aplicativo desenvolvido com Expo, React Native e TypeScript para a atividade de navegação e organização MVC.

## Telas

- **Login:** acesso demonstrativo (e-mail `a` e senha `a`).
- **Novo Produto:** tela visual de cadastro.
- **Saída:** tela visual para retirada de produtos, com os motivos Venda, Avarias e Uso Interno.
- **Estoque:** listagem demonstrativa com quantidade disponível e status do item.

As telas de produto, saída e estoque são estáticas, conforme permitido no enunciado. Não há persistência nem alteração real de quantidades.

## Organização

- `src/components`: componentes reutilizáveis.
- `src/pages`: páginas do aplicativo e seus estilos.
- `src/routes`: configuração de navegação Stack e Bottom Tabs.
- `src/global`: tema e cores globais.

## Como executar

1. Instale o Node.js LTS.
2. Na pasta do projeto, execute `npm install`.
3. Execute `npx expo start`.
4. Abra no Expo Go ou em um emulador Android/iOS.
5. Na tela de login, use e-mail `a` e senha `a`.

A navegação inferior apresenta as três telas e utiliza ícones do `@expo/vector-icons`. O cabeçalho exibe o nome da aba ativa, sem mostrar o título genérico `BottomRoutes`.
