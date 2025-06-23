# ⚙️ Configurações da Landing Page - Festa Junina 2025

Este arquivo contém todas as configurações necessárias para personalizar e otimizar a landing page da Zap Gráfica.

## 📞 Informações de Contato (ALTERAR OBRIGATÓRIO)

### WhatsApp Business
```javascript
// No arquivo assets/js/script.js, linha ~85, altere:
const whatsappLink = `https://wa.me/5511999999999?text=${encodeURIComponent(whatsappMessage)}`;

// Para seu número real (formato: 55 + DDD + número):
const whatsappLink = `https://wa.me/5511987654321?text=${encodeURIComponent(whatsappMessage)}`;
```

### E-mail e Redes Sociais
```html
<!-- No arquivo index.html, seção do rodapé, altere: -->
<a href="mailto:contato@zapgrafica.com.br">contato@zapgrafica.com.br</a>
<a href="https://instagram.com/zapgrafica">@zapgrafica</a>

<!-- Para suas informações reais: -->
<a href="mailto:seuemail@empresa.com.br">seuemail@empresa.com.br</a>
<a href="https://instagram.com/suaconta">@suaconta</a>
```

### Endereço e Localização
```html
<!-- No rodapé do index.html, altere: -->
<p class="text-gray-300">
    📍 São Paulo, SP<br>
    Atendemos toda a região metropolitana
</p>

<!-- Para sua localização: -->
<p class="text-gray-300">
    📍 Sua Cidade, Estado<br>
    Área de atendimento
</p>
```

## 🎨 Personalização Visual

### Cores da Marca
Se quiser alterar as cores, edite no arquivo `assets/css/style.css`:
```css
:root {
    --junino-yellow: #FFD700;    /* Amarelo principal */
    --junino-orange: #FF8C00;    /* Laranja */
    --junino-red: #DC143C;       /* Vermelho */
    --junino-green: #228B22;     /* Verde */
    --junino-blue: #4169E1;      /* Azul */
}
```

### Logo da Empresa
```html
<!-- No index.html, substitua as imagens: -->
<img src="assets/images/LOGO-ZAP-VERDE-FUNDO-TRANSPARENTE.png.png" alt="Zap Gráfica">
<img src="assets/images/LOGO-ZAP-BRANCA-FUNDO-TRANSPARENTE.png" alt="Zap Gráfica">

<!-- Por suas logos (mantenha os nomes ou altere os caminhos): -->
<img src="assets/images/sua-logo-colorida.png" alt="Sua Empresa">
<img src="assets/images/sua-logo-branca.png" alt="Sua Empresa">
```

## 📊 Integrações de Marketing (Opcional)

### 1. Google Analytics 4
Adicione antes do fechamento da tag `</head>` no `index.html`:
```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 2. Meta Pixel (Facebook/Instagram)
```html
<!-- Meta Pixel -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'SEU_PIXEL_ID');
fbq('track', 'PageView');
</script>
```

### 3. RD Station (Automação de Marketing)
Para integrar o formulário com RD Station, substitua o JavaScript do formulário:
```javascript
// No assets/js/script.js, substitua a função de envio do formulário por:
const formData = {
    // dados do formulário...
};

// Enviar para RD Station
fetch('https://api.rd.services/platform/conversions', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        event_type: 'CONVERSION',
        event_family: 'CDP',
        payload: {
            conversion_identifier: 'festa-junina-orcamento',
            email: formData.email,
            name: formData.nome,
            mobile_phone: formData.whatsapp,
            custom_fields: {
                produto_interesse: formData.produto,
                mensagem: formData.mensagem
            }
        }
    })
});
```

## 🛍️ Gerenciamento de Produtos

### Adicionar Novo Produto
1. **Adicione a imagem** em `assets/images/`
2. **Inclua na galeria** (index.html):
```html
<div class="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-4 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
    <img src="assets/images/SEU_PRODUTO.png" alt="Seu Produto" class="w-full h-40 object-contain mb-4">
    <h3 class="text-lg font-semibold text-gray-800 text-center">Nome do Produto</h3>
</div>
```
3. **Adicione no formulário** (select de produtos):
```html
<option value="seu-produto">Seu Novo Produto</option>
```

### Remover Produto
1. Delete a div correspondente na galeria
2. Remova a opção do select no formulário

## 🚀 Otimizações de Performance

### Compressão de Imagens
Antes de fazer upload, otimize as imagens:
- **Formato:** WebP ou PNG
- **Tamanho:** Máximo 500KB por imagem
- **Dimensões:** 400x400px para produtos
- **Ferramentas:** TinyPNG, Squoosh, ImageOptim

### Cache e CDN
Para melhor performance no Netlify:
1. Crie arquivo `_headers` na raiz:
```
/*
  Cache-Control: public, max-age=31536000
  
/*.html
  Cache-Control: public, max-age=0, must-revalidate

/*.css
  Cache-Control: public, max-age=31536000

/*.js
  Cache-Control: public, max-age=31536000
```

## 🔒 Configurações de Segurança

### Formulário Anti-Spam
O JavaScript já inclui proteções básicas:
- Rate limiting (previne spam)
- Validação client-side
- Sanitização de dados

### HTTPS
O Netlify automaticamente fornece HTTPS. Para domínio customizado:
1. Configure DNS para apontar para Netlify
2. Ative SSL/TLS nas configurações do site

## 📈 Métricas e Monitoramento

### KPIs Importantes
- **Taxa de conversão** (formulários preenchidos / visitantes)
- **Tempo na página**
- **Taxa de rejeição**
- **Origem do tráfego**
- **Dispositivos mais usados**

### URLs com UTM para Campanhas
Use estes padrões para rastrear origens:
```
# Google Ads
?utm_source=google&utm_medium=cpc&utm_campaign=festa_junina_2025

# Facebook/Instagram
?utm_source=facebook&utm_medium=social&utm_campaign=festa_junina_2025

# Email Marketing
?utm_source=email&utm_medium=newsletter&utm_campaign=festa_junina_2025
```

## ⚡ Checklist de Publicação

### Antes de Publicar:
- [ ] Alterar todas as informações de contato
- [ ] Testar formulário em dispositivos móveis
- [ ] Verificar todas as imagens carregam corretamente
- [ ] Testar integração WhatsApp
- [ ] Validar responsividade
- [ ] Verificar performance (PageSpeed Insights)

### Após Publicar:
- [ ] Configurar domínio personalizado (se necessário)
- [ ] Adicionar Google Analytics
- [ ] Testar formulário com dados reais
- [ ] Configurar backup automático
- [ ] Monitorar métricas iniciais

---

**💡 Dica:** Mantenha este arquivo atualizado sempre que fizer alterações na configuração da landing page.
// No arquivo index.html, substitua:
gtag('config', 'GA_MEASUREMENT_ID');

// Por seu Measurement ID real:
gtag('config', 'G-XXXXXXXXXX');
```

**Como obter o Measurement ID:**
1. Acesse Google Analytics
2. Vá em "Administrador" > "Fluxos de dados"
3. Clique no fluxo da web e copie o ID

### 3. Google Ads Conversion Tracking
```javascript
// No arquivo script.js, substitua:
gtag('event', 'conversion', {
    send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL'
});

// Por seus IDs reais:
gtag('event', 'conversion', {
    send_to: 'AW-123456789/AbC-D_efG-h_ifG-jk'
});
```

**Como obter os IDs de conversão:**
1. Acesse Google Ads
2. Vá em "Ferramentas" > "Medição" > "Conversões"
3. Crie ou edite uma conversão
4. Copie o ID e label da conversão

### 4. RD Station Integration
```javascript
// No arquivo script.js, substitua:
fetch('https://api.rd.services/platform/conversions?api_key=SEU_TOKEN_RD', {

// Por sua URL e token reais:
fetch('https://api.rd.services/platform/conversions?api_key=abc123def456', {
```

**Como obter o token da RD Station:**
1. Acesse RD Station
2. Vá em "Integrações" > "Tokens de acesso"
3. Gere um novo token para conversões
4. Configure os campos personalizados (cf_interesse, cf_volume_mensal, etc.)

## 🚀 Configurações de Deploy

### Arquivos de Configuração para Hospedagem

#### .htaccess (Apache)
```apache
# Compressão GZIP
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Cache
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
</IfModule>

# Redirecionamento HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

#### robots.txt
```
User-agent: *
Allow: /

Sitemap: https://seudominio.com.br/sitemap.xml
```

### CDN e Performance
- **Cloudflare**: Recomendado para CDN e proteção
- **Google PageSpeed**: Teste de performance
- **GTmetrix**: Análise de velocidade

## 📊 Configurações de Tracking

### Eventos Personalizados Configurados
1. **page_load** - Carregamento da página
2. **scroll_depth** - Profundidade de scroll (25%, 50%, 75%, 100%)
3. **time_on_page** - Tempo na página (30s, 1min, 2min, 5min)
4. **cta_click** - Cliques em botões CTA
5. **form_submit** - Envio do formulário
6. **product_interest** - Interesse em produtos específicos

### Conversões Configuradas
1. **hero_cta_click** - Clique no CTA do hero
2. **urgencia_cta_click** - Clique no CTA de urgência
3. **produtos_cta_click** - Clique no CTA de produtos
4. **form_submit** - Submissão do formulário

## 🎯 URLs e Domínios Recomendados

### Subdomínio Sugerido
- **festa-junina.zapgrafica.com.br**
- **junina2025.zapgrafica.com.br**
- **arraia.zapgrafica.com.br**

### URLs de Campanha (UTM)
```
https://festa-junina.zapgrafica.com.br?utm_source=google&utm_medium=cpc&utm_campaign=festa-junina-2025&utm_content=canecas-personalizadas

https://festa-junina.zapgrafica.com.br?utm_source=facebook&utm_medium=social&utm_campaign=festa-junina-2025&utm_content=produtos-juninos
```

## 📧 Configurações de Email

### SMTP para Notificações (opcional)
```javascript
// Configuração para envio de email de notificação
const emailConfig = {
    service: 'gmail', // ou outro provedor
    auth: {
        user: 'parceiros@zapgrafica.com.br',
        pass: 'sua-senha-app'
    }
};
```

## 🔐 Configurações de Segurança

### Headers de Segurança
```apache
# Security Headers
Header always set X-Content-Type-Options nosniff
Header always set X-Frame-Options DENY
Header always set X-XSS-Protection "1; mode=block"
Header always set Strict-Transport-Security "max-age=63072000; includeSubDomains; preload"
Header always set Referrer-Policy "strict-origin-when-cross-origin"
```

### SSL/TLS
- Certificado SSL obrigatório
- Redirecionamento automático para HTTPS
- HSTS habilitado

## 📱 Configurações de PWA (Opcional)

### manifest.json
```json
{
  "name": "Zap Gráfica - Festa Junina 2025",
  "short_name": "Zap Junina",
  "description": "Produtos personalizados para Festa Junina",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#D2691E",
  "theme_color": "#D2691E",
  "icons": [
    {
      "src": "/assets/images/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ]
}
```

## 🧪 Testes A/B Sugeridos

### Elementos para Testar
1. **Headline do Hero**
   - Versão A: "Festa Junina 2025 - Produtos Personalizados que Vendem Mais!"
   - Versão B: "Arraiá 2025 - Lucre Mais com Produtos Personalizados!"

2. **CTA Principal**
   - Versão A: "Quero Ser Parceiro Agora!"
   - Versão B: "Garantir Produtos Agora!"

3. **Cores do Botão**
   - Versão A: Laranja (#D2691E)
   - Versão B: Verde (#228B22)

### Ferramentas de Teste A/B
- Google Optimize
- Hotjar
- Crazy Egg

## 📈 KPIs para Monitorar

### Métricas de Conversão
- Taxa de conversão do formulário
- Custo por lead (CPL)
- Valor por lead (VPL)
- ROAS (Return on Ad Spend)

### Métricas de Engajamento
- Tempo médio na página
- Taxa de rejeição
- Profundidade de scroll
- Cliques em CTAs

### Métricas de Performance
- Velocidade de carregamento
- Core Web Vitals
- Taxa de erro
- Disponibilidade

## 🔄 Checklist de Go-Live

- [ ] Configurar Meta Pixel
- [ ] Configurar Google Analytics
- [ ] Configurar Google Ads Conversion
- [ ] Configurar RD Station
- [ ] Adicionar todas as imagens
- [ ] Testar formulário
- [ ] Testar responsividade
- [ ] Testar velocidade
- [ ] Configurar SSL
- [ ] Configurar redirects
- [ ] Testar tracking
- [ ] Configurar backup
- [ ] Criar sitemap.xml
