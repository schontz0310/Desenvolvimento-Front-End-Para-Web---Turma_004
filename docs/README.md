# 🎨 ONG Esperança Solidária - Experiência Prática II

## 📋 Informações do Projeto

**Disciplina:** Desenvolvimento Front-End Para Web  
**Turma:** 004  
**Entrega:** Experiência Prática II - Estilização e Layouts  
**Branch:** `Experiencia-pratica-02`

---

## 🎯 Objetivos da Entrega

Aplicar CSS3 para transformar a estrutura HTML da Entrega I em uma interface visual profissional, responsiva e acessível, demonstrando domínio de:

- Sistema de Design com variáveis CSS customizadas
- Layouts modernos com CSS Grid e Flexbox
- Técnicas de estilização avançadas
- Responsividade em múltiplos dispositivos

---

## 🚀 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização completa
  - CSS Grid Layout
  - Flexbox
  - CSS Variables (Custom Properties)
  - Media Queries
  - Transitions & Transforms
  - Pseudo-classes e Pseudo-elementos
- **Checkbox Hack** - Menu hambúrguer sem JavaScript
- Git & GitHub

## 📁 Estrutura do Projeto

```
ong-esperanca-solidaria/
├── index.html
├── projetos.html
├── cadastro.html
├── css/
│   ├── variables.css      → Design System (cores, fontes, espaçamentos, shadows)
│   ├── base.css          → Reset básico + tipografia fundamental
│   ├── layout.css        → Grid 12 colunas + Flexbox + utilitários
│   ├── navigation.css    → Menu responsivo + hambúrguer CSS puro
│   ├── components.css    → Cards, botões, badges, alerts, modals
│   ├── forms.css         → Formulários estilizados + validação
│   ├── responsive.css    → 7 breakpoints + media queries
│   └── styles.css        → Arquivo principal (importa todos)
├── img/                  → Imagens do projeto
├── docs/
│   ├── README.md         → Este arquivo
│   ├── CHECKLIST-ENTREGA.md
│   └── TEXTO-ENTREGA.md
└── .gitignore
```

---

## ✅ Especificações Técnicas Implementadas

### 1️⃣ Sistema de Design
✅ Design system consistente com variáveis CSS customizadas  
✅ Paleta de cores com **20+ cores** (primárias, secundárias, neutras, destaque)  
✅ Tipografia hierárquica com **10 tamanhos de fonte** (0.75rem a 3.5rem)  
✅ Sistema de espaçamento modular (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px, 128px)

### 2️⃣ Layouts Responsivos
✅ Layout principal usando **CSS Grid** para estrutura geral (12 colunas)  
✅ **Flexbox** para componentes internos e alinhamentos  
✅ **7 breakpoints** responsivos:
- `320px` - Mobile extra small
- `576px` - Mobile
- `768px` - Tablet
- `992px` - Desktop small
- `1200px` - Desktop
- `1400px` - Desktop large
- Print media queries

✅ Sistema de grid customizado (12 colunas)  
✅ Layouts específicos para diferentes tipos de conteúdo

### 3️⃣ Navegação Sofisticada e Interativa
✅ Menu principal responsivo com submenu dropdown  
✅ Navegação mobile com menu hambúrguer **100% CSS puro** (checkbox hack)  
✅ Animações e transições suaves  
✅ Overlay/backdrop para menu mobile

### 4️⃣ Componentes de Interface
✅ Sistema de cards responsivos para projetos  
✅ Botões com estados visuais (hover, focus, active, disabled)  
✅ Formulários estilizados com validação visual  
✅ Componentes de feedback (alerts, toasts, modals)  
✅ Sistema de badges e tags para categorização  
✅ Progress bars e spinners  
✅ Testimonials (depoimentos)  
✅ Stats cards (cartões de estatísticas)

---

## 📁 Estrutura CSS Modular

### **variables.css**
- Paleta de cores completa (20+ cores)
- Tamanhos de fonte (10 níveis)
- Espaçamento modular (11 níveis)
- Bordas e sombras
- Transições e animações
- Z-index scale
- Breakpoints

### **base.css**
- Reset básico com box-sizing
- Tipografia base (h1-h6, p, listas)
- Links e estados
- Elementos semânticos
- Seleção customizada
- Scrollbar personalizada

### **layout.css**
- Container responsivo
- Sistema Grid 12 colunas
- Utilitários Flexbox
- Layouts específicos (hero, sidebar, cards grid)
- Utilitários de espaçamento
- Utilitários de display e alinhamento

### **navigation.css**
- Header sticky
- Menu principal desktop
- Dropdown menus
- Menu hambúrguer mobile (CSS puro)
- Overlay/backdrop
- Breadcrumb

### **components.css**
- Botões (6 variantes)
- Cards (padrão, horizontal)
- Badges (7 cores)
- Tags
- Alerts (4 tipos)
- Toasts
- Modals
- Progress bars
- Spinners

### **forms.css**
- Inputs estilizados
- Selects customizados
- Checkboxes e radios
- Toggle switches
- Fieldsets e legends
- Validação visual
- Input groups
- File inputs
- Range inputs

### **responsive.css**
- 7 breakpoints definidos
- Grid responsivo por tamanho
- Utilitários de visibilidade
- Text align responsivo
- Media queries para orientação
- Print styles

---

## 🎨 Design System

### Cores Principais
```css
--color-primary: #2c3e50;        /* Azul escuro profissional */
--color-secondary: #e74c3c;      /* Vermelho solidário */
--color-accent: #f39c12;         /* Laranja esperança */
--color-success: #27ae60;        /* Verde sucesso */
```

### Tipografia
```css
Família: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
Tamanhos: 0.75rem (12px) até 3.5rem (56px)
Pesos: 300, 400, 500, 600, 700, 800
```

### Espaçamento Modular
```css
Base: 4px
Escala: 0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px
```

---

## 🌐 Páginas Implementadas

### 📄 index.html
**Seções estilizadas:**
- Hero section com gradient overlay
- Quem Somos (grid de informações)
- Nosso Impacto (stats cards em grid)
- Áreas de Atuação (cards grid 4 colunas)
- Depoimentos (testimonials em 2 colunas)
- Como Ajudar (CTA section com cards)
- Transparência (botões de download)
- Contato (informações em grid)
- Footer profissional (3 colunas)

### 📄 projetos.html
**Seções estilizadas:**
- Hero de projetos
- Projeto em destaque (card com imagem)
- Lista de outros projetos
- Oportunidades de voluntariado (cards grid)
- Depoimento de voluntário
- Sistema de doações
- Transparência com tabela estilizada
- Relatórios (botões de download)
- CTA final
- Footer profissional

### 📄 cadastro.html
**Seções estilizadas:**
- Hero de cadastro
- Benefícios e Como Funciona (2 colunas)
- Formulário completo com form-groups
- Dúvidas Frequentes
- CTA de ajuda
- Footer profissional

---

## ✅ Checklist de Requisitos

| Requisito | Status |
|-----------|--------|
| Design system com variáveis CSS | ✅ Implementado |
| 8+ cores na paleta | ✅ 20+ cores |
| 5+ tamanhos de fonte | ✅ 10 tamanhos |
| Espaçamento modular | ✅ 11 níveis |
| CSS Grid para estrutura | ✅ 12 colunas |
| Flexbox para componentes | ✅ Implementado |
| 5+ breakpoints | ✅ 7 breakpoints |
| Menu responsivo com dropdown | ✅ Implementado |
| Menu hambúrguer mobile | ✅ CSS puro |
| Cards responsivos | ✅ Implementado |
| Botões com estados | ✅ 5 estados |
| Formulários estilizados | ✅ Implementado |
| Validação visual | ✅ Implementado |
| Alerts e feedback | ✅ Implementado |
| Badges e tags | ✅ Implementado |
| Estrutura organizada | ✅ Modular |
| CSS modular | ✅ 7 módulos |

**Status:** ✅ **TODOS OS REQUISITOS ATENDIDOS**

---

## 🚀 Diferenciais Implementados

1. ✨ **Menu 100% CSS** - Hamburger menu usando apenas CSS (checkbox hack)
2. 🎯 **Sistema Modular** - 7 arquivos CSS organizados por responsabilidade
3. 🎨 **Design Profissional** - Cores harmoniosas e espaçamentos consistentes
4. 📱 **Mobile-First** - Desenvolvimento responsivo desde o início
5. ♿ **Acessibilidade** - Labels corretos, ARIA attributes, focus states
6. 🔄 **Animações Suaves** - Transitions em todos os elementos interativos
7. 📊 **Componentes Reutilizáveis** - Classes utilitárias e components
8. ✅ **Validação Visual** - Estados de sucesso/erro em formulários

---

## 📝 Como Usar

1. Clone o repositório na branch correta:
```bash
git clone -b Experiencia-pratica-02 https://github.com/schontz0310/Desenvolvimento-Front-End-Para-Web---Turma_004.git
```

2. Abra qualquer arquivo HTML no navegador
3. Teste a responsividade redimensionando a janela
4. Teste o menu hambúrguer em dispositivos móveis (< 992px)

---

## 🎓 Aprendizados

### CSS Grid
- Grid template areas
- Grid template columns/rows
- Gap e grid-gap
- Auto-fit e auto-fill
- Minmax para responsividade

### Flexbox
- Justify-content e align-items
- Flex-direction e flex-wrap
- Flex-grow, flex-shrink, flex-basis
- Order para reordenação

### CSS Variables
- Definição de custom properties
- Reutilização de valores
- Manutenção facilitada
- Tematização

### Responsividade
- Mobile-first approach
- Breakpoints estratégicos
- Media queries
- Imagens responsivas
- Typography scale

### Componentização CSS
- Reutilização de classes
- BEM-like naming
- Utility classes
- Component states

---

## 👨‍💻 Autor

**Turma:** 004  
**Disciplina:** Desenvolvimento Front-End Para Web  
**Entrega:** Experiência Prática II - Estilização e Layouts

---

## 📄 Licença

Projeto acadêmico - Todos os direitos reservados © 2024

---

**Nota**: Esta é uma plataforma fictícia desenvolvida para fins educacionais.
