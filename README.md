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

## 📅 Histórico de Desenvolvimento (Cronológico)

### 🔹 **Experiência Prática 01 - HTML Semântico**
**Branch:** `Experiencia-pratica-01`  
**Período:** Outubro 2024  
**Versão:** v1.0.0

#### **Requisitos Implementados:**

**Estrutura HTML5:**
- ✅ Tags semânticas (`<header>`, `<nav>`, `<main>`, `<footer>`, `<article>`, `<section>`)
- ✅ Hierarquia de headings (h1-h6)
- ✅ DOCTYPE e lang="pt-BR"

**Páginas Criadas:**
- ✅ `index.html` - Home com hero, quem somos, impacto, áreas, depoimentos, contato
- ✅ `projetos.html` - Projetos sociais, voluntariado, doações
- ✅ `cadastro.html` - Formulário completo de cadastro

**Formulário (cadastro.html):**
- ✅ 10+ campos (nome, email, telefone, CPF, endereço, etc)
- ✅ Inputs variados (text, email, tel, select, textarea, radio, checkbox)
- ✅ Labels associados corretamente
- ✅ Atributos required, placeholder, pattern

**Multimídia e Links:**
- ✅ Imagens com alt text
- ✅ Links internos entre páginas
- ✅ Links externos (redes sociais)
- ✅ Botões e CTAs

**SEO:**
- ✅ Meta tags (description, keywords)
- ✅ Title único por página
- ✅ Estrutura otimizada para buscadores

---

### 🔹 **Experiência Prática 02 - CSS Avançado**
**Branch:** `Experiencia-pratica-02`  
**Período:** Outubro 2024  
**Versão:** v2.0.0

#### **Requisitos Implementados:**

**Design System:**
- ✅ CSS Variables (20+ cores)
- ✅ Paleta de cores (primária, secundária, acento, neutras)
- ✅ 10 tamanhos de fonte (0.75rem a 3.5rem)
- ✅ Sistema de espaçamento modular (11 níveis)
- ✅ Sombras e bordas padronizadas

**Layouts Responsivos:**
- ✅ CSS Grid (sistema 12 colunas)
- ✅ Flexbox para componentes
- ✅ 7 breakpoints (320px, 576px, 768px, 992px, 1200px, 1400px, print)
- ✅ Mobile-first approach
- ✅ Imagens responsivas

**Navegação:**
- ✅ Menu principal desktop com dropdown
- ✅ Menu hambúrguer mobile **100% CSS puro** (checkbox hack)
- ✅ Header sticky
- ✅ Overlay/backdrop
- ✅ Animações suaves

**Componentes UI:**
- ✅ Cards (padrão, horizontal, com imagem)
- ✅ Botões (6 variantes: primary, secondary, outline, danger, success, info)
- ✅ Badges (7 cores)
- ✅ Alerts (success, danger, warning, info)
- ✅ Toasts para notificações
- ✅ Modals
- ✅ Progress bars
- ✅ Stats cards
- ✅ Testimonials

**Formulários:**
- ✅ Inputs estilizados
- ✅ Selects customizados
- ✅ Checkboxes e radios personalizados
- ✅ Validação visual (estados de erro)
- ✅ Form groups organizados

**Arquivos CSS Modulares:**
- ✅ `variables.css` - Design tokens
- ✅ `base.css` - Reset e tipografia
- ✅ `layout.css` - Grid e utilitários
- ✅ `navigation.css` - Menu e navegação
- ✅ `components.css` - Componentes reutilizáveis
- ✅ `forms.css` - Estilos de formulários
- ✅ `responsive.css` - Media queries
- ✅ `styles.css` - Arquivo principal (importa todos)

**Transições e Animações:**
- ✅ Hover effects em links e botões
- ✅ Transições suaves (0.3s)
- ✅ Transform em cards
- ✅ Fade in/out em modais

---

### 🔹 **Experiência Prática 03 - JavaScript Avançado**
**Branch:** `Experiencia-pratica-03`  
**Período:** Novembro 2024  
**Versão:** v3.0.0

#### **Requisitos Implementados:**

**REQUISITO OBRIGATÓRIO - Validação de Formulários:**
- ✅ **Sistema de verificação de consistência de dados**
- ✅ **Avisos visuais ao usuário sobre erros**

**Validação em Tempo Real:**
- ✅ Validação ao sair do campo (evento blur)
- ✅ Validação enquanto digita (evento input com debounce)
- ✅ Remove erro automaticamente ao corrigir
- ✅ Validação no submit do formulário

**Tipos de Validação:**
- ✅ Campos obrigatórios (required)
- ✅ E-mail (regex: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`)
- ✅ **CPF com algoritmo completo** (dígitos verificadores)
- ✅ Telefone (formato: `(XX) XXXXX-XXXX`)
- ✅ CEP (formato: `XXXXX-XXX`)
- ✅ Tamanho mínimo/máximo (minlength/maxlength)
- ✅ Pattern customizado (regex)

**Máscaras Automáticas:**
- ✅ CPF: formata para `000.000.000-00` enquanto digita
- ✅ Telefone: formata para `(00) 00000-0000`
- ✅ CEP: formata para `00000-000`

**Feedback Visual:**
- ✅ Borda vermelha em campos com erro
- ✅ Mensagem de erro abaixo do campo
- ✅ Toast de notificação no topo da página
- ✅ Scroll automático para o primeiro erro
- ✅ Foco no campo inválido

**Toasts de Notificação:**
- ✅ Toast de erro (validação falhou)
- ✅ Toast de sucesso (formulário enviado)
- ✅ Toast de informação (enviando...)
- ✅ Auto-fechamento após 5 segundos
- ✅ Botão de fechar manual

**Manipulação do DOM:**
- ✅ `querySelector` / `getElementById`
- ✅ `addEventListener` (DOMContentLoaded, submit, blur, input)
- ✅ Criação dinâmica de elementos (toasts)
- ✅ Modificação de classes CSS
- ✅ Estilos inline dinâmicos

**Arquivo JavaScript:**
- ✅ `js/script.js` (~250 linhas)
- ✅ Código modular com funções específicas
- ✅ Comentários explicativos
- ✅ Zero dependências externas

**Funções Implementadas:**
```javascript
validarCampo(campo)           // Valida campo individual
validarEmail(email)           // Valida formato de e-mail
validarCPF(cpf)              // Validação algorítmica de CPF
mostrarErro(campo, mensagem) // Exibe erro no campo
removerErro(campo)           // Remove erro do campo
limparTodosErros()           // Limpa todos os erros
mostrarToast(tipo, mensagem) // Exibe toast de notificação
setupMascaras()              // Configura máscaras automáticas
```

---

### 🔹 **Experiência Prática 04 - Acessibilidade e Otimização**
**Branch:** `Experiencia-pratica-04`  
**Período:** Novembro 2024  
**Versão:** v4.0.0

#### **Requisitos Implementados:**

**WCAG 2.1 Nível AA - Navegação por Teclado:**
- ✅ Tab/Shift+Tab para navegação entre elementos
- ✅ Enter/Space para ativar botões e links
- ✅ Escape para fechar modais e menus
- ✅ Setas para navegar em menus dropdown
- ✅ **Skip links** (`Alt+1` - pular para conteúdo principal)
- ✅ Focus visível em todos os elementos interativos

**WCAG 2.1 - Estrutura Semântica:**
- ✅ Landmarks ARIA: `role="banner"`, `role="main"`, `role="navigation"`, `role="contentinfo"`
- ✅ ARIA labels: `aria-label="Menu principal"`, `aria-label="Menu mobile"`
- ✅ Headings hierárquicos mantidos
- ✅ Labels corretos em formulários
- ✅ Alt text em todas as imagens

**WCAG 2.1 - Contraste de Cores:**
- ✅ Texto normal: mínimo 4.5:1
- ✅ Texto grande: mínimo 3:1
- ✅ Componentes UI: mínimo 3:1
- ✅ Função `checkContrast()` para verificação

**WCAG 2.1 - Leitores de Tela:**
- ✅ ARIA live regions para anúncios dinâmicos
- ✅ Classe `.sr-only` para conteúdo apenas para leitores
- ✅ Anúncios de mudança de tema
- ✅ Função `announce()` para notificações

**Modo Escuro e Alto Contraste:**
- ✅ **Modo claro** (padrão) - `Alt+L`
- ✅ **Modo escuro** - `Alt+D` com cores otimizadas
- ✅ **Alto contraste** - `Alt+H` (preto/branco/amarelo/ciano)
- ✅ Detecção automática via `prefers-color-scheme: dark`
- ✅ Persistência em localStorage
- ✅ Botões de toggle fixos (☀️ 🌙 ⚫)

**Preferências do Usuário:**
- ✅ `prefers-reduced-motion` (animações reduzidas)
- ✅ `prefers-color-scheme` (tema do sistema)
- ✅ Respeito às configurações do navegador

**Focus Trap:**
- ✅ Foco mantido dentro de modais abertos
- ✅ Loop entre primeiro e último elemento focável

**Atalhos de Teclado:**
```
Alt+1  → Skip to main content
Alt+L  → Tema claro
Alt+D  → Tema escuro  
Alt+H  → Alto contraste
Tab    → Próximo elemento
Esc    → Fechar modal/menu
```

**Arquivos de Acessibilidade:**
- ✅ `css/accessibility.css` (~300 linhas)
- ✅ `js/accessibility.js` (~400 linhas)

**Classes de Acessibilidade:**
```css
.skip-link          // Link para pular navegação
.sr-only            // Apenas leitores de tela
[data-theme]        // Temas (light, dark, high-contrast)
.theme-toggle       // Botões de tema
[aria-live]         // Regiões dinâmicas
```

**Otimização:**
- ✅ Código já otimizado (~90 KB total)
- ✅ CSS modular e reutilizável
- ✅ JavaScript sem dependências
- ✅ Guia de minificação documentado
- ✅ `docs/OTIMIZACAO.md` com ferramentas recomendadas

**GitFlow e Versionamento:**
- ✅ Commits semânticos (feat, fix, docs, style, refactor)
- ✅ Histórico organizado
- ✅ 4 branches por experiência prática
- ✅ README profissional completo

**Documentação Completa:**
- ✅ `README.md` - Documentação principal (este arquivo)
- ✅ `docs/README.md` - Documentação técnica detalhada
- ✅ `docs/OTIMIZACAO.md` - Guia de otimização
- ✅ `EXPERIENCIA-04-PLANEJAMENTO.md` - Planejamento da Exp. 04

---

## 📚 Documentação Adicional

- **[docs/README.md](docs/README.md)** - Documentação técnica completa
- **[docs/OTIMIZACAO.md](docs/OTIMIZACAO.md)** - Guia de otimização
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
