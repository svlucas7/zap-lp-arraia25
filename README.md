# 🎪 Landing Page Arraiá da Personalização - Zap Gráfica

Esta é a documentação completa da landing page "Arraiá da Personalização", criada para a campanha de Festa Junina 2025 da Zap Gráfica. O projeto foi desenvolvido com foco em alta conversão, design moderno e uma experiência de usuário interativa.

**Link para o repositório:** [https://github.com/svlucas7/zap-lp-arraia25](https://github.com/svlucas7/zap-lp-arraia25)

## ✨ Funcionalidades Implementadas

- **Carrossel de Produtos Interativo:** Utilizando **Swiper.js**, o carrossel é responsivo, centralizado em telas menores e exibe os produtos de forma atraente.
- **Tags de Popularidade:** Destaques visuais como "🔥 Mais Vendido" e "👍 Popular" nos cards de produtos para guiar o cliente.
- **Seção "Monte seu Kit Arraiá":** Uma ferramenta interativa onde o usuário pode selecionar múltiplos produtos, ajustar quantidades com botões rápidos (+10, +50, +100, +500) e ver um resumo visual da sua "cesta".
- **Integração com Formulário RD Station:** O kit montado pelo usuário é automaticamente inserido no campo de mensagem do formulário de orçamento da RD Station, otimizando o processo de lead.
- **Múltiplos Pontos de Contato (CTAs):**
    - Botão de WhatsApp flutuante.
    - Botão de WhatsApp na hero section.
    - Botão de WhatsApp abaixo do formulário de orçamento.
- **Design Consistente e Moderno:** A interface foi refatorada para usar uma paleta de cores sólida e moderna, com foco no verde `#22B24C` da marca.
- **FAQ Interativo:** Seção de Perguntas Frequentes com um sistema de "acordeão" implementado com **Alpine.js** para uma navegação fluida.
- **Favicon Personalizado:** O site agora exibe o favicon da Zap Gráfica.
- **Rastreamento Completo:**
    - **Facebook Pixel**
    - **Google Ads**
    - **Google Analytics 4 (GA4)**

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estrutura semântica e acessível.
- **TailwindCSS:** Framework CSS para um desenvolvimento ágil e responsivo.
- **JavaScript (ES6+):** Para toda a lógica interativa da página.
- **Swiper.js:** Para o carrossel de produtos.
- **Alpine.js:** Para a interatividade da seção de FAQ.
- **RD Station Forms:** Para a captura e gerenciamento de leads.
- **Git & GitHub:** Para versionamento e hospedagem do código.

## 📁 Estrutura do Projeto

```
.
├── assets/
│   ├── css/
│   │   └── style.css       # Estilos personalizados
│   ├── images/
│   │   └── ...             # Todas as imagens de produtos e layout
│   └── js/
│       └── script.js       # Lógica do carrossel, kit e interações
├── .vscode/
│   └── tasks.json          # Configuração de tarefas do VS Code
├── CONFIG.md               # Documentação de configuração
├── index.html              # Estrutura principal da página
├── README.md               # Este arquivo
└── zap-lp-arraia25.code-workspace # Arquivo do workspace
```

## 🚀 Como Executar

1.  Clone o repositório:
    ```bash
    git clone https://github.com/svlucas7/zap-lp-arraia25.git
    ```
2.  Abra o arquivo `index.html` em seu navegador de preferência. Não há necessidade de um servidor local, pois todas as dependências são carregadas via CDN.

## 📝 Próximos Passos (Sugestões)

- **Otimização de Imagens:** Comprimir as imagens na pasta `assets/images` para um carregamento ainda mais rápido.
- **Testes A/B:** Testar diferentes headlines e CTAs para otimizar a taxa de conversão.
- **Deploy:** Publicar a página em um serviço como Netlify, Vercel ou GitHub Pages para torná-la acessível publicamente.
