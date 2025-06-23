# 🎪 Arraiá da Personalização - Zap Gráfica

Landing page completa e moderna para campanha de Festa Junina 2025, desenvolvida para capturar leads interessados em produtos personalizados.

## 🎯 Objetivo

Capturar leads qualificados de potenciais clientes interessados em produtos personalizados para festas juninas, como canecas, copos, sacolas e outros brindes. A página é otimizada para conversão e preparada para publicação no Netlify via GitHub.

## ✨ Características da Landing Page

### 🎨 Design Temático e Moderno
- **Interface limpa** e alegre com temática junina
- **Paleta de cores** vibrantes (amarelo, laranja, vermelho, verde, azul)
- **Layout responsivo** mobile-first
- **Animações sutis** e efeitos visuais atraentes
- **Tipografia** Poppins para melhor legibilidade

### 📋 Estrutura da Página
- **Header fixo** com logo e botão "Fale Conosco"
- **Hero section** com título impactante e CTA principal
- **Galeria de produtos** com imagens dos produtos disponíveis
- **Seção de diferenciais** (entrega rápida, qualidade, atendimento)
- **Formulário de orçamento** com validação em tempo real
- **Rodapé completo** com informações de contato

### �️ Tecnologias Utilizadas
- **HTML5** semântico e acessível
- **Tailwind CSS** via CDN para estilização
- **JavaScript** vanilla para interatividade
- **CSS3** customizado para animações especiais
- **Responsive Design** para todos os dispositivos
- **Cross-browser** compatibility

### 🚀 Performance Otimizada
- **Lazy loading** de imagens
- **Minificação** de CSS/JS
- **Compressão GZIP**
- **Cache strategies**

### 📊 Tracking Avançado
- **Google Analytics 4** integration
- **Meta Pixel** (Facebook/Instagram)
- **Google Ads** conversion tracking
- **Custom events** e goals

### 🔧 Integrações
- **RD Station** form integration
- **WhatsApp** para contato direto
- **Google Tag Manager** ready
- **Email** notifications

## 📁 Estrutura do Projeto


## 🎨 Seções da Landing Page

### 1. **Header**
- Logo da Zap Gráfica
- CTA de parceria no header

### 2. **Hero Section**
- Headline impactante com texto animado
- Subtítulo explicativo
- Dois CTAs principais
- Imagem hero com elementos flutuantes
- Indicadores de benefícios

### 3. **Seção de Urgência**
- Barra de urgência temporal
- Messaging sobre a época (junho)
- CTA de ação imediata

### 4. **Produtos em Destaque**
- 16 produtos no total, 4 por linha (animação de carrossel e separados por categorias)
- Cards com hover effects
- Badges promocionais
- Lista de características

### 5. **Benefícios de Parceria**
- Ícones representativos
- Hover animations

### 6. **Depoimentos**
- 3 depoimentos reais
- Fotos dos clientes
- Avaliações 5 estrelas
- Informações da empresa

### 7. **Formulário de Conversão**
- Formulário integrado do RD Station
- Tracking automático de conversões
- Design responsivo e acessível
- Validação em tempo real

### 8. **Footer**
- Links úteis
- Informações de contato
- Redes sociais
- Copyright

## 🚀 Como Usar

### 1. Desenvolvimento Local
```bash
# Clone ou baixe o projeto
cd zap-lp-arraia25

# Abra o arquivo index.html em qualquer navegador
# Ou use um servidor local simples:
python -m http.server 8000
# ou
npx http-server
```

### 2. Publicação no Netlify via GitHub

#### Opção A: Via Interface do Netlify
1. Faça push do projeto para um repositório GitHub
2. Acesse [netlify.com](https://netlify.com) e faça login
3. Clique em "New site from Git"
4. Conecte seu GitHub e selecione o repositório
5. Configure:
   - **Build command:** (deixe vazio)
   - **Publish directory:** (deixe vazio ou `.`)
6. Clique em "Deploy site"

#### Opção B: Via Netlify CLI
```bash
# Instale o Netlify CLI
npm install -g netlify-cli

# Faça login
netlify login

# Deploy direto da pasta
netlify deploy --prod --dir .
```

### 3. Configurações Importantes

#### Editar Informações de Contato
No arquivo `index.html` e `assets/js/script.js`, altere:
- **Número WhatsApp:** Linha com `5511999999999`
- **E-mail:** `contato@zapgrafica.com.br`
- **Instagram:** `@zapgrafica`
- **Endereço:** Seção de localização no rodapé

#### Personalizar Produtos
- As imagens estão em `assets/images/`
- Edite a galeria de produtos no HTML conforme necessário
- Adicione/remova produtos no formulário select

## 📊 Funcionalidades Implementadas

### ✅ Formulário de Orçamento
- Validação em tempo real
- Formatação automática do WhatsApp
- Integração com WhatsApp Business
- Mensagem de sucesso após envio
- Preparado para integração com RD Station

### ✅ Experiência do Usuário
- Scroll suave entre seções
- Animações de entrada dos elementos
- Header com efeito de scroll
- Indicador de progresso de scroll
- Notificações toast
- Partículas flutuantes no background

### ✅ SEO e Performance
- Meta tags otimizadas
- Estrutura semântica
- Lazy loading de imagens
- Código limpo e comentado
- Preparado para Google Analytics

## 🎯 Próximos Passos

### Integrações Sugeridas
1. **Google Analytics 4** - Adicionar tracking ID
2. **RD Station** - Conectar formulário para automação
3. **Google Ads** - Implementar conversion tracking
4. **WhatsApp Business API** - Automatizar leads
5. **Chatbot** - Atendimento 24/7

### Melhorias Futuras
- [ ] PWA (Progressive Web App)
- [ ] Dark mode toggle
- [ ] Multi-idiomas
- [ ] Blog integrado
- [ ] Sistema de cupons
- [ ] Chat ao vivo

## 📁 Estrutura do Projeto

```
zap-lp-arraia25/
├── index.html              # Página principal
├── README.md               # Documentação
├── CONFIG.md              # Configurações
├── assets/
│   ├── css/
│   │   └── style.css      # Estilos customizados
│   ├── js/
│   │   └── script.js      # Funcionalidades JS
│   └── images/            # Imagens dos produtos
│       ├── ADESIVOS.png
│       ├── CANECA.png
│       ├── BANDEIRA.png
│       └── ... (outros produtos)
```

## 🎪 Créditos

Desenvolvido para **Zap Gráfica** - Campanha Festa Junina 2025
Landing page otimizada para conversão e geração de leads qualificados.

---

**🎯 Meta:** Transformar visitantes em clientes através de uma experiência digital envolvente e conversões otimizadas para o período junino 2025.
