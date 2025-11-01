# 🎨 ONG Esperança Solidária - Experiência Prática III

## 📋 Informações do Projeto

**Disciplina:** Desenvolvimento Front-End Para Web  
**Turma:** 004  
**Entrega:** Experiência Prática III - JavaScript Avançado  
**Branch:** `Experiencia-pratica-03`

---

## 🎯 Objetivos da Entrega

Implementar JavaScript avançado para adicionar interatividade e validação de formulários, demonstrando domínio de:

- **Sistema de verificação de consistência de dados** (REQUISITO OBRIGATÓRIO)
- Validação avançada de formulários em tempo real
- Manipulação do DOM
- Eventos e listeners
- Feedback visual ao usuário

---

## 🚀 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica (Exp. 01)
- **CSS3** - Estilização completa (Exp. 02)
  - CSS Grid Layout
  - Flexbox
  - CSS Variables
  - Responsividade
- **JavaScript ES6+** - Interatividade e validação (Exp. 03) ⭐
  - Manipulação do DOM
  - Event Listeners
  - Validação em tempo real
  - RegEx para validações
  - Máscaras de entrada
- Git & GitHub

## 📁 Estrutura do Projeto

```
ong-esperanca-solidaria/
├── index.html                      # Página inicial
├── projetos.html                   # Projetos e voluntariado
├── cadastro.html                   # Formulário com validação JS ⭐
├── css/                            # Estilos (Exp. 02)
│   ├── variables.css
│   ├── base.css
│   ├── layout.css
│   ├── navigation.css
│   ├── components.css
│   ├── forms.css
│   ├── responsive.css
│   └── styles.css
├── js/                             # JavaScript (Exp. 03) ⭐
│   └── script.js                   # Validação avançada
├── img/                            # Imagens do projeto
├── docs/
│   ├── README.md                   # Este arquivo
│   └── CHECKLIST-ENTREGA.md
├── README-EXPERIENCIA-03.md        # Documentação detalhada
└── .gitignore
```

---

## ✅ Especificações Técnicas Implementadas

### 1️⃣ Sistema de Design (Exp. 02)
✅ Design system consistente com variáveis CSS customizadas  
✅ Paleta de cores com **20+ cores**  
✅ Tipografia hierárquica com **10 tamanhos de fonte**  
✅ Sistema de espaçamento modular

### 2️⃣ Layouts Responsivos (Exp. 02)
✅ Layout principal usando **CSS Grid** (12 colunas)  
✅ **Flexbox** para componentes internos  
✅ **7 breakpoints** responsivos (320px até 1400px+)  
✅ Menu hambúrguer **100% CSS puro**

### 3️⃣ Componentes de Interface (Exp. 02)
✅ Sistema de cards responsivos  
✅ Botões com estados visuais  
✅ Formulários estilizados  
✅ Componentes de feedback (alerts, toasts, modals)  
✅ Badges, tags, progress bars

### 4️⃣ **JavaScript Avançado (Exp. 03)** ⭐ NOVO

#### **REQUISITO OBRIGATÓRIO ATENDIDO:**
✅ **Sistema de verificação de consistência de dados em formulários**  
✅ **Avisos ao usuário sobre preenchimento incorreto**

#### **Funcionalidades Implementadas:**

**Validação em Tempo Real:**
- ✅ Validação ao sair do campo (blur)
- ✅ Validação enquanto digita (input)
- ✅ Remove erro automaticamente ao corrigir

**Tipos de Validação:**
- ✅ Campos obrigatórios
- ✅ E-mail (regex)
- ✅ CPF (algoritmo completo)
- ✅ Telefone (formato)
- ✅ CEP (formato)
- ✅ Tamanho mínimo/máximo
- ✅ Pattern customizado

**Máscaras Automáticas:**
- ✅ CPF: `000.000.000-00`
- ✅ Telefone: `(00) 00000-0000`
- ✅ CEP: `00000-000`

**Feedback Visual:**
- ✅ Borda vermelha em campos com erro
- ✅ Mensagem de erro abaixo do campo
- ✅ Toast de notificação no topo
- ✅ Scroll automático para erro
- ✅ Foco no primeiro campo inválido

**Toasts de Notificação:**
- ✅ Toast de erro (validação falhou)
- ✅ Toast de sucesso (formulário enviado)
- ✅ Auto-fechamento após 5 segundos
- ✅ Botão de fechar manual

---

## 📄 Arquivo JavaScript

### **js/script.js** ⭐
**Sistema completo de validação de formulários**

```javascript
// Funções principais:
validarCampo(campo)           // Valida campo individual
validarEmail(email)           // Valida formato de e-mail
validarCPF(cpf)              // Validação algorítmica de CPF
mostrarErro(campo, msg)      // Exibe erro no campo
removerErro(campo)           // Remove erro do campo
mostrarToast(tipo, msg)      // Exibe toast de notificação
setupMascaras()              // Configura máscaras automáticas
```

**Eventos implementados:**
- `DOMContentLoaded` - Inicialização
- `submit` - Validação no envio
- `blur` - Validação ao sair do campo
- `input` - Validação em tempo real

**~250 linhas** de código JavaScript puro, sem dependências externas.

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

### **Experiência Prática 02 (CSS)**
| Requisito | Status |
|-----------|--------|
| Design system com variáveis CSS | ✅ Implementado |
| 8+ cores na paleta | ✅ 20+ cores |
| 5+ tamanhos de fonte | ✅ 10 tamanhos |
| CSS Grid para estrutura | ✅ 12 colunas |
| Flexbox para componentes | ✅ Implementado |
| 5+ breakpoints | ✅ 7 breakpoints |
| Menu responsivo | ✅ Implementado |
| Menu hambúrguer mobile | ✅ CSS puro |
| Cards e componentes | ✅ Implementado |
| CSS modular | ✅ 7 arquivos |

### **Experiência Prática 03 (JavaScript)** ⭐
| Requisito | Status |
|-----------|--------|
| **Verificação de consistência de dados** | ✅ **Implementado** |
| **Avisos ao usuário** | ✅ **Implementado** |
| Código JavaScript modular | ✅ script.js |
| Validação em tempo real | ✅ blur + input |
| Validação de e-mail | ✅ RegEx |
| Validação de CPF | ✅ Algoritmo completo |
| Máscaras automáticas | ✅ CPF, Tel, CEP |
| Feedback visual | ✅ Bordas + mensagens |
| Toasts de notificação | ✅ Erro + Sucesso |
| JavaScript puro | ✅ Zero dependências |

**Status:** ✅ **TODOS OS REQUISITOS ATENDIDOS**

---

## 🚀 Diferenciais Implementados

### **CSS (Exp. 02)**
1. ✨ **Menu 100% CSS** - Hamburger menu sem JavaScript
2. 🎯 **Sistema Modular** - 7 arquivos CSS organizados
3. 🎨 **Design Profissional** - Cores e espaçamentos consistentes
4. 📱 **Mobile-First** - Responsivo desde o início
5. ♿ **Acessibilidade** - ARIA attributes, focus states

### **JavaScript (Exp. 03)** ⭐
6. ⚡ **Validação em Tempo Real** - Feedback instantâneo
7. 🔒 **Validação de CPF** - Algoritmo completo da Receita Federal
8. 🎭 **Máscaras Automáticas** - Formatação enquanto digita
9. 📢 **Toasts Elegantes** - Notificações não intrusivas
10. 🎯 **Zero Dependências** - JavaScript puro (vanilla JS)

---

## 📝 Como Usar

1. Clone o repositório na branch correta:
```bash
git clone -b Experiencia-pratica-03 https://github.com/schontz0310/Desenvolvimento-Front-End-Para-Web---Turma_004.git
```

2. Abra `cadastro.html` no navegador
3. Teste a validação:
   - Tente enviar formulário vazio → ❌ Erro
   - Digite CPF inválido (111.111.111-11) → ❌ Erro  
   - Digite e-mail sem @ → ❌ Erro
   - Preencha tudo correto → ✅ Sucesso!
4. Veja máscaras automáticas funcionando em tempo real

---

## 🎓 Aprendizados

### **CSS (Exp. 02)**
- CSS Grid (template areas, columns, rows)
- Flexbox (justify, align, direction, wrap)
- CSS Variables (custom properties)
- Responsividade (mobile-first, breakpoints)
- Componentização (BEM-like naming, utilities)

### **JavaScript (Exp. 03)** ⭐
- **Manipulação do DOM** (querySelector, addEventListener)
- **Event Listeners** (DOMContentLoaded, submit, blur, input)
- **Validação de dados** (RegEx, algoritmos, patterns)
- **Feedback visual** (classes dinâmicas, estilos inline)
- **Funções modulares** (reutilização, organização)
- **Algoritmo de CPF** (dígitos verificadores)
- **Máscaras dinâmicas** (replace com regex)
- **UX aprimorada** (scroll, focus, mensagens claras)

---

## 👨‍💻 Autor

**Turma:** 004  
**Disciplina:** Desenvolvimento Front-End Para Web  
**Entregas:**
- ✅ Experiência Prática I - HTML Semântico
- ✅ Experiência Prática II - CSS Avançado
- ✅ Experiência Prática III - JavaScript Avançado ⭐

---

## 📄 Licença

Projeto acadêmico - Todos os direitos reservados © 2024

---

## 📚 Documentação Adicional

- **README-EXPERIENCIA-03.md** - Documentação detalhada da Exp. 03
- **docs/CHECKLIST-ENTREGA.md** - Checklist completo de entrega

---

**Nota**: Esta é uma plataforma fictícia desenvolvida para fins educacionais.

**✅ Projeto completo e pronto para avaliação!**
