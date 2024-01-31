# Passo a Passo
- Instale o eas build, um serviço de build de aplicações react native para padrões de loja
- Faça log in na sua conta expo com o seguinte comando: npx eas login
- Cheque se está logado com o seguinte comando: npx eas whoami

# Configurações de Variáveis Locais para Diferentes Ambientes
- Antes de tudo siga boas práticas usando EXPO_PUBLIC_ apenas para variáveis utilizadas no código
- Há três ambientes que são o local, o de testes e o de produção
- Para o ambiente local guarde as variáveis em .env como em qualquer aplicação react native que utiliza variáveis locais
- Para os ambientes de teste e de produção criamos um arquivo eas.json onde configuramos as variáveis de ambiente (link)[https://docs.expo.dev/build-reference/variables/]