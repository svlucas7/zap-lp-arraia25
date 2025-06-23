# ⚙️ Guia de Configuração - Landing Page Arraiá da Personalização

Este documento serve como um guia completo para configurar, personalizar e manter a landing page de Festa Junina da Zap Gráfica.

## 📊 IDs de Rastreamento (Já configurados)

Os seguintes IDs de rastreamento já estão implementados no `index.html`.

- **Facebook Pixel ID:** `487696269435926`
- **Google Ads ID:** `AW-1001326878`
- **Google Analytics 4 ID:** `G-2V46X0HB2M`

Caso precise alterá-los, procure por estes valores no `<head>` do arquivo `index.html`.

## 📞 Informações de Contato

Para alterar os dados de contato, edite as seguintes seções no `index.html`:

- **WhatsApp:** Encontre todos os links `<a>` que começam com `https://api.whatsapp.com/message/M3BDJVL2DGIMA1` e substitua pelo seu link de contato.
- **E-mail e Redes Sociais:** Altere os links no rodapé (`<footer>`):
  ```html
  <a href="mailto:atendimento@zapgrafica.com.br">...</a>
  <a href="https://instagram.com/zap_grafica">...</a>
  ```
- **Endereço e Horários:** Modifique o texto na seção de localização no rodapé.

## 🎨 Personalização Visual

- **Cores:** As cores são definidas diretamente no `tailwind.config` dentro do `<head>` do `index.html`. Você pode alterar os valores hexadecimais na chave `theme.extend.colors.junino`.
  ```javascript
  tailwind.config = {
      theme: {
          extend: {
              colors: {
                  'junino': {
                      'yellow': '#FFD700',
                      'orange': '#FF8C00',
                      'red': '#DC143C',
                      'green': '#22B24C', // Cor principal
                      'blue': '#4169E1',
                  }
              }
          }
      }
  }
  ```
- **Logos:** As logos da empresa estão no `index.html`. Para substituí-las, troque os caminhos nos atributos `src` das tags `<img>` no header e no rodapé.
- **Favicon:** O favicon é definido pela tag `<link rel="icon" ...>` no `<head>`. Altere o `href` para o caminho da sua nova imagem.

## 📦 Produtos e Kit Arraiá

- **Produtos do Carrossel:** Os produtos são definidos como `<div>` com a classe `swiper-slide` dentro da seção `product-swiper`. Para adicionar ou remover, copie ou delete um desses blocos.
- **Produtos do Kit:** A lista de produtos disponíveis para seleção no "Monte seu Kit Arraiá" é gerada dinamicamente pelo `assets/js/script.js`. Para modificar, edite o array `products` no início do arquivo:
  ```javascript
  const products = [
      { id: 'canecas', name: 'Canecas Personalizadas', image: 'assets/images/CANECA.png' },
      { id: 'adesivos', name: 'Adesivos', image: 'assets/images/ADESIVOS.png' },
      // ... adicione mais produtos aqui
  ];
  ```

## 📝 Formulário RD Station

O formulário está integrado na seção `orcamento`. O ID do formulário é `formulario-zap-arraia-51f62e0f9cd3842dfbfc`. Para usar um formulário diferente, substitua este ID e o ID da conta (`UA-26024689-3`) no script da RD Station no final do `index.html`.

## ❓ FAQ - Perguntas Frequentes

A seção de FAQ é controlada pelo Alpine.js. Para adicionar uma nova pergunta, copie um dos blocos `<div>` que contém um botão e um painel `x-show`, e altere o número do `active` para o próximo número sequencial.
