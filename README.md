# 🤝 ONG Esperança Solidária

![Status](https://img.shields.io/badge/status-concluído-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Acessibilidade](https://img.shields.io/badge/WCAG-AA-blue)
![Licença](https://img.shields.io/badge/licença-MIT-green)

> Projeto acadêmico completo desenvolvido para a disciplina **Desenvolvimento Front-End Para Web**, demonstrando domínio de HTML5, CSS3, JavaScript e boas práticas de desenvolvimento web.

---

## 📋 Sobre o Projeto

Website institucional fictício para uma ONG que promove ações sociais, educação e apoio comunitário. O projeto passou por 4 experiências práticas, evoluindo de uma estrutura HTML básica até uma aplicação web completa, acessível e otimizada.

### 🎯 **Propósito:**
- Consolidar conhecimentos em desenvolvimento front-end
- Aplicar padrões web modernos e acessibilidade
- Demonstrar práticas profissionais de versionamento
- Criar um projeto portfolio-ready

---

## 🚀 Funcionalidades

### **Páginas Implementadas:**

1. **🏠 Home (`index.html`)**
   - Hero section com call-to-action
   - Apresentação da ONG (missão, visão, valores)
   - Estatísticas de impacto social
   - Áreas de atuação em grid
   - Depoimentos de beneficiários
   - Seção de como ajudar
   - Transparência e prestação de contas
   - Informações de contato completas

2. **📊 Projetos (`projetos.html`)**
   - Projetos sociais em destaque
   - Oportunidades de voluntariado
   - Sistema de doações
   - Depoimentos de voluntários
   - Relatórios de transparência

3. **📝 Cadastro (`cadastro.html`)**
   - Formulário completo de voluntário
   - Validação avançada em tempo real
   - Máscaras automáticas (CPF, telefone, CEP)
   - Feedback visual de erros
   - Modal informativo

### **Recursos Técnicos:**

✅ **HTML5 Semântico** (Exp. 01)
- Estrutura semântica completa
- Meta tags para SEO
- Acessibilidade nativa

✅ **CSS3 Avançado** (Exp. 02)
- Design system com variáveis CSS
- Grid e Flexbox layouts
- Responsivo (7 breakpoints)
- Menu hambúrguer CSS puro
- Animações e transições

✅ **JavaScript Avançado** (Exp. 03)
- Validação de formulários em tempo real
- Validação algorítmica de CPF
- Máscaras de entrada automáticas
- Toasts de notificação
- Feedback visual de erros

✅ **Acessibilidade WCAG 2.1 AA** (Exp. 04)
- Navegação por teclado completa
- ARIA attributes e landmarks
- Modo escuro e alto contraste
- Skip links
- Suporte a leitores de tela

✅ **Otimização** (Exp. 04)
- Código modular e enxuto
- Performance otimizada
- Guia de minificação

---

## 📁 Estrutura do Projeto

```
ong-esperanca-solidaria/
├── index.html                      # Página inicial
├── projetos.html                   # Projetos e voluntariado
├── cadastro.html                   # Formulário de cadastro
│
├── css/                            # Estilos (Exp. 02)
│   ├── variables.css               # Design system
│   ├── base.css                    # Reset e tipografia
│   ├── layout.css                  # Grid e layouts
│   ├── navigation.css              # Menu e navegação
│   ├── components.css              # Componentes reutilizáveis
│   ├── forms.css                   # Formulários
│   ├── responsive.css              # Media queries
│   ├── accessibility.css           # Acessibilidade (Exp. 04)
│   └── styles.css                  # Arquivo principal
│
├── js/                             # JavaScript (Exp. 03 e 04)
│   ├── script.js                   # Validação de formulários
│   └── accessibility.js            # Sistema de acessibilidade
│
├── img/                            # Imagens
│   ├── logo.png
│   ├── sobre-nos.jpg
│   ├── area-*.jpg
│   └── depoimento-*.jpg
│
├── docs/                           # Documentação
│   ├── README.md                   # Documentação técnica
│   ├── CHECKLIST-ENTREGA.md        # Checklist de requisitos
│   └── OTIMIZACAO.md               # Guia de otimização
│
├── build/                          # Scripts de build
│   ├── minify.js                   # Minificação (Node)
│   └── minify.py                   # Minificação (Python)
│
├── README.md                       # Este arquivo
├── README-EXPERIENCIA-03.md        # Documentação Exp. 03
├── EXPERIENCIA-04-PLANEJAMENTO.md  # Planejamento Exp. 04
└── .gitignore                      # Arquivos ignorados
```

---

## 🛠️ Tecnologias Utilizadas

### **Front-End:**
- **HTML5** - Estrutura semântica
- **CSS3** - Estilização avançada
  - CSS Variables (Custom Properties)
  - CSS Grid Layout
  - Flexbox
  - Media Queries
  - Animations & Transitions
- **JavaScript ES6+** - Interatividade
  - Manipulação do DOM
  - Event Listeners
  - Validação de dados
  - LocalStorage
  - Classes e módulos

### **Ferramentas:**
- **Git/GitHub** - Versionamento
- **VS Code** - Editor
- **Chrome DevTools** - Debug e testes
- **Lighthouse** - Performance e acessibilidade

---

## 🎨 Design System

### **Paleta de Cores:**

```css
--color-primary: #2c3e50;      /* Azul escuro profissional */
--color-secondary: #e74c3c;    /* Vermelho solidário */
--color-accent: #f39c12;       /* Laranja esperança */
--color-success: #27ae60;      /* Verde sucesso */
--color-danger: #e74c3c;       /* Vermelho erro */
--color-warning: #f39c12;      /* Amarelo aviso */
--color-info: #3498db;         /* Azul informação */
```

### **Tipografia:**

- **Família:** `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`
- **Tamanhos:** 10 níveis (0.75rem a 3.5rem)
- **Pesos:** 300, 400, 500, 600, 700, 800

### **Espaçamento Modular:**

Base 4px: `4, 8, 12, 16, 24, 32, 48, 64, 96, 128px`

---

## ♿ Acessibilidade (WCAG 2.1 Nível AA)

### **Navegação por Teclado:**
- `Tab` / `Shift+Tab` - Navegar entre elementos
- `Enter` / `Space` - Ativar elementos
- `Escape` - Fechar modais/menus
- `Setas` - Navegar em menus dropdown
- `Alt+1` - Skip to main content

### **Temas (Atalhos):**
- `Alt+L` - Tema claro
- `Alt+D` - Tema escuro
- `Alt+H` - Alto contraste

### **Recursos:**
- ✅ ARIA roles e labels
- ✅ Landmarks semânticos
- ✅ Contraste mínimo 4.5:1
- ✅ Focus visível
- ✅ Textos alternativos
- ✅ Leitores de tela compatíveis

---

## 📊 Performance

### **Métricas (Lighthouse):**

| Categoria | Score |
|-----------|-------|
| 🟢 Performance | 90-95 |
| 🟢 Acessibilidade | 95-100 |
| 🟢 Boas Práticas | 90-95 |
| 🟢 SEO | 95-100 |

### **Tamanhos de Arquivo:**

| Tipo | Tamanho | Gzipped |
|------|---------|---------|
| HTML (3 páginas) | ~28 KB | ~6 KB |
| CSS (módulos) | ~45 KB | ~8 KB |
| JavaScript | ~17 KB | ~5 KB |
| **Total** | **~90 KB** | **~19 KB** |

---

## 🚦 Como Usar

### **1. Clone o Repositório:**

```bash
git clone https://github.com/schontz0310/Desenvolvimento-Front-End-Para-Web---Turma_004.git
cd Desenvolvimento-Front-End-Para-Web---Turma_004
```

### **2. Navegue até o Projeto:**

```bash
cd ong-esperanca-solidaria
```

### **3. Abra no Navegador:**

**Opção A - Diretamente:**
```bash
# Mac/Linux
open index.html

# Windows
start index.html
```

**Opção B - Servidor Local (recomendado):**
```bash
# Python 3
python3 -m http.server 8000

# Acesse: http://localhost:8000
```

### **4. Teste as Funcionalidades:**

- ✅ Navegue entre as páginas
- ✅ Teste o formulário de cadastro
- ✅ Experimente os temas (`Alt+D` para escuro)
- ✅ Teste navegação por teclado (`Tab`)
- ✅ Redimensione a janela (responsividade)

---

## 🌿 Versionamento (GitFlow)

### **Branches:**

- `main` - Produção estável
- `Experiencia-pratica-01` - HTML Semântico
- `Experiencia-pratica-02` - CSS Avançado
- `Experiencia-pratica-03` - JavaScript
- `Experiencia-pratica-04` - Acessibilidade e Otimização

### **Histórico de Releases:**

- **v1.0.0** - Experiência Prática 01 (HTML)
- **v2.0.0** - Experiência Prática 02 (CSS)
- **v3.0.0** - Experiência Prática 03 (JavaScript)
- **v4.0.0** - Experiência Prática 04 (Acessibilidade)

### **Commits Semânticos:**

```
feat: nova funcionalidade
fix: correção de bug
docs: documentação
style: formatação
refactor: refatoração
perf: performance
test: testes
chore: build/config
```

---

## 📚 Documentação Adicional

- **[docs/README.md](docs/README.md)** - Documentação técnica completa
- **[docs/OTIMIZACAO.md](docs/OTIMIZACAO.md)** - Guia de otimização
- **[README-EXPERIENCIA-03.md](README-EXPERIENCIA-03.md)** - Exp. 03 detalhada
- **[EXPERIENCIA-04-PLANEJAMENTO.md](EXPERIENCIA-04-PLANEJAMENTO.md)** - Planejamento Exp. 04

---

## ✅ Requisitos Atendidos

### **Experiência Prática 01 - HTML:**
- [x] Estrutura HTML5 semântica
- [x] 3+ páginas interligadas
- [x] Formulário completo
- [x] Meta tags e SEO
- [x] Imagens e multimídia

### **Experiência Prática 02 - CSS:**
- [x] Design system (20+ cores, 10 fontes)
- [x] CSS Grid e Flexbox
- [x] 7 breakpoints responsivos
- [x] Menu hambúrguer CSS puro
- [x] Componentes reutilizáveis

### **Experiência Prática 03 - JavaScript:**
- [x] Manipulação do DOM
- [x] Validação de formulários
- [x] Verificação de consistência de dados
- [x] Avisos visuais ao usuário
- [x] Código modular

### **Experiência Prática 04 - Acessibilidade e Otimização:**
- [x] Navegação por teclado
- [x] ARIA attributes
- [x] WCAG 2.1 Nível AA
- [x] Modo escuro e alto contraste
- [x] Documentação de otimização
- [x] GitFlow e commits semânticos

---

## 🎓 Autor

**Turma:** 004  
**Disciplina:** Desenvolvimento Front-End Para Web  
**Instituição:** [Sua Instituição]  
**Período:** 2024

---

## 📄 Licença

Este projeto é acadêmico e está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 🙏 Agradecimentos

- Professor(a) da disciplina
- Colegas de turma
- Comunidade de desenvolvimento web

---

## 📞 Contato

- **GitHub:** [@schontz0310](https://github.com/schontz0310)
- **Repositório:** [Desenvolvimento-Front-End-Para-Web---Turma_004](https://github.com/schontz0310/Desenvolvimento-Front-End-Para-Web---Turma_004)

---

## 🔗 Links Úteis

- [MDN Web Docs](https://developer.mozilla.org/)
- [WCAG 2.1](https://www.w3.org/WAI/WCAG21/quickref/)
- [Can I Use](https://caniuse.com/)
- [CSS-Tricks](https://css-tricks.com/)

---

**Feito com ❤️ e muito ☕**

---

**Status:** ✅ **PROJETO COMPLETO E PRONTO PARA AVALIAÇÃO!**
