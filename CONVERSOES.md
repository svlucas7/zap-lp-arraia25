# 📊 Configuração de Rastreamento de Conversões - Zap Gráfica

## 🎯 Conversões e Eventos Configurados

Este projeto está configurado para rastrear os seguintes eventos:

### 🔥 **CONVERSÕES** (Google Ads + Facebook Lead):
1. **📞 Clique em botões do WhatsApp** - Valor: R$ 50,00
2. **📝 Envio do formulário de orçamento** - Valor: R$ 100,00
3. **🛒 Solicitação de orçamento do Kit personalizado** - Valor variável

### 📊 **EVENTOS DE ENGAJAMENTO** (Facebook + Analytics):
1. **🚀 InitiateCheckout** - Quando usuário **começar a preencher** o formulário
2. **📈 Eventos de Analytics** - Scroll, interações, etc.

## 🔧 Como Configurar o Google Ads

### Passo 1: Criar Ações de Conversão
1. Acesse sua conta do Google Ads
2. Vá em **Ferramentas** > **Conversões**
3. Clique em **+ Nova ação de conversão**
4. Escolha **Website**

### Passo 2: Configurar Conversão WhatsApp
- **Nome**: "WhatsApp Click - Festa Junina"
- **Categoria**: "Lead"
- **Valor**: R$ 50,00
- **Contagem**: "Uma"
- **Janela de conversão**: 30 dias

### Passo 3: Configurar Conversão Formulário
- **Nome**: "Form Submit - Orçamento"
- **Categoria**: "Lead" 
- **Valor**: R$ 100,00
- **Contagem**: "Uma"
- **Janela de conversão**: 30 dias

### Passo 4: ✅ **IDs Configurados Corretamente**

Os IDs das conversões já estão configurados no código:

```javascript
WHATSAPP_CONVERSION: 'AW-1001326878/ydbnCPygueQaEJ6SvN0D'  // WhatsApp Click
FORM_CONVERSION: 'AW-1001326878/jByTCP-gueQaEJ6SvN0D'      // Form Submit
```

**Status: ✅ CONFIGURADO**

## 📱 Facebook Pixel

O Facebook Pixel está configurado para rastrear:
- **InitiateCheckout** quando alguém **começar a preencher** o formulário (foco no primeiro campo)
- **Lead** quando alguém **clicar no WhatsApp** (conversão)
- **Lead** quando alguém **enviar o formulário** (conversão)

## ✅ Testes de Conversão

### Para testar se está funcionando:

1. **Arquivo de Teste**: 
   - Acesse `teste-conversoes.html` para testar manualmente
   - Verifique se as ferramentas estão carregadas
   - Execute os testes e monitore o console

2. **Google Ads**: 
   - Vá em Conversões > Ver detalhes da conversão
   - Verifique se aparecem conversões recentes

3. **Facebook**: 
   - Vá no Events Manager
   - Verifique eventos "Lead" sendo registrados

4. **Google Analytics**:
   - Relatórios > Eventos > generate_lead

5. **Console do Navegador**:
   - Procure por mensagens: "🎯 CONVERSÃO WHATSAPP" e "🎯 CONVERSÃO FORMULÁRIO"

## 🚨 Importante

- **Apenas** cliques no WhatsApp e envios de formulário são marcados como conversão
- **Não** são conversões: visualizações de página, scroll, foco em campos
- Os valores são simbólicos para ajudar na otimização das campanhas

## 📞 IDs Configurados

- **Google Ads ID**: AW-1001326878
- **WhatsApp Conversion**: AW-1001326878/ydbnCPygueQaEJ6SvN0D
- **Form Conversion**: AW-1001326878/jByTCP-gueQaEJ6SvN0D  
- **Facebook Pixel ID**: 487696269435926

---

**Status**: ✅ **TOTALMENTE CONFIGURADO**
**Última atualização**: 27/06/2025
