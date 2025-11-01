# 📋 Experiência Prática 04 - Planejamento

## 🎯 Objetivos da Entrega Final

Consolidar o projeto com práticas profissionais:
- **GitFlow** e versionamento semântico
- **Acessibilidade WCAG 2.1 Nível AA**
- **Otimização para produção**
- **Documentação técnica completa**

---

## ✅ Requisitos Obrigatórios

### 1️⃣ **Controle de Versão (GitFlow)**

**Branches:**
- ✅ `main` - Produção
- ✅ `Experiencia-pratica-01` - HTML
- ✅ `Experiencia-pratica-02` - CSS
- ✅ `Experiencia-pratica-03` - JavaScript
- 🔄 `Experiencia-pratica-04` - Acessibilidade + Otimização (atual)
- ⏳ `develop` - Branch de desenvolvimento
- ⏳ `feature/*` - Features específicas
- ⏳ `release/*` - Preparação para produção

**Commits Semânticos:**
```
feat: Nova funcionalidade
fix: Correção de bug
docs: Documentação
style: Formatação
refactor: Refatoração
perf: Performance
test: Testes
chore: Tarefas de build
```

**Releases:**
- v1.0.0 - Experiência Prática 01 (HTML)
- v2.0.0 - Experiência Prática 02 (CSS)
- v3.0.0 - Experiência Prática 03 (JavaScript)
- v4.0.0 - Experiência Prática 04 (Acessibilidade + Otimização)

---

### 2️⃣ **Acessibilidade WCAG 2.1 Nível AA**

#### **A. Navegação por Teclado**
- [ ] Tab/Shift+Tab para navegação
- [ ] Enter/Space para ativar elementos
- [ ] Escape para fechar modais
- [ ] Setas para navegar em menus
- [ ] Skip links (pular navegação)
- [ ] Focus visível em todos os elementos

#### **B. Estrutura Semântica**
- [ ] Landmarks ARIA (`main`, `nav`, `aside`, `footer`)
- [ ] Headings hierárquicos (h1-h6)
- [ ] Listas semânticas
- [ ] Formulários com labels corretos
- [ ] Alt text em todas as imagens

#### **C. Contraste de Cores**
- [ ] Texto normal: mínimo 4.5:1
- [ ] Texto grande: mínimo 3:1
- [ ] Componentes UI: mínimo 3:1
- [ ] Verificar com ferramenta de contraste

#### **D. Leitores de Tela**
- [ ] ARIA labels em ícones
- [ ] ARIA live regions para updates dinâmicos
- [ ] ARIA expanded/collapsed em menus
- [ ] ARIA hidden em decorativos
- [ ] Role attributes adequados

#### **E. Modo Escuro e Alto Contraste**
- [ ] CSS para dark mode (`prefers-color-scheme`)
- [ ] Toggle manual dark/light
- [ ] Modo alto contraste
- [ ] Persistência da preferência (localStorage)

---

### 3️⃣ **Otimização para Produção**

#### **A. Minificação**
- [ ] CSS minificado
- [ ] JavaScript minificado
- [ ] HTML minificado (opcional)
- [ ] Remover comentários e espaços

#### **B. Compressão de Imagens**
- [ ] Formatos modernos (WebP)
- [ ] Imagens otimizadas
- [ ] Lazy loading
- [ ] Responsive images

#### **C. Performance**
- [ ] Concatenação de arquivos
- [ ] Ordem de carregamento otimizada
- [ ] Async/defer em scripts
- [ ] Preload de recursos críticos

---

## 📦 Estrutura de Diretórios

```
ong-esperanca-solidaria/
├── index.html
├── projetos.html
├── cadastro.html
├── css/
│   ├── styles.css (desenvolvimento)
│   └── styles.min.css (produção) ⭐
├── js/
│   ├── script.js (desenvolvimento)
│   └── script.min.js (produção) ⭐
├── img/
│   ├── original/ (imagens originais)
│   └── optimized/ (imagens otimizadas) ⭐
├── docs/
│   ├── README.md
│   ├── CHECKLIST-ENTREGA.md
│   └── ACESSIBILIDADE.md ⭐
├── .github/
│   ├── workflows/ (CI/CD)
│   ├── ISSUE_TEMPLATE/
│   └── PULL_REQUEST_TEMPLATE.md ⭐
├── README.md (principal) ⭐
├── CHANGELOG.md ⭐
└── .gitignore
```

---

## 🎯 Cronograma de Implementação

### **Fase 1: GitFlow e Versionamento** (30min)
- [ ] Criar branches develop, release
- [ ] Configurar .github/
- [ ] Criar templates de PR
- [ ] Criar CHANGELOG.md
- [ ] Criar tags de release

### **Fase 2: Acessibilidade** (2h)
- [ ] Implementar navegação por teclado
- [ ] Adicionar ARIA attributes
- [ ] Criar modo escuro
- [ ] Criar modo alto contraste
- [ ] Testar com leitor de tela
- [ ] Verificar contraste de cores

### **Fase 3: Otimização** (1h)
- [ ] Minificar CSS
- [ ] Minificar JavaScript
- [ ] Otimizar imagens
- [ ] Configurar lazy loading
- [ ] Testar performance

### **Fase 4: Documentação** (1h)
- [ ] README completo
- [ ] Documentação de acessibilidade
- [ ] Guia de contribuição
- [ ] Documentação técnica

### **Fase 5: Deploy e Testes** (30min)
- [ ] GitHub Pages configurado
- [ ] Testes finais
- [ ] Validação WCAG
- [ ] Performance check

---

## 🛠️ Ferramentas Necessárias

### **Acessibilidade:**
- WAVE (Web Accessibility Evaluation Tool)
- axe DevTools
- Lighthouse (Chrome DevTools)
- Color Contrast Analyzer
- Screen reader (NVDA/JAWS)

### **Otimização:**
- CSS Minifier
- JavaScript Minifier
- ImageOptim / TinyPNG
- WebP Converter

### **Versionamento:**
- Git / GitHub
- Conventional Commits

---

## 📊 Critérios de Sucesso

| Critério | Meta |
|----------|------|
| Acessibilidade WCAG | 100% Nível AA |
| Contraste mínimo | 4.5:1 |
| Performance Lighthouse | 90+ |
| Navegação por teclado | 100% funcional |
| Leitores de tela | Totalmente compatível |
| CSS minificado | Redução 40%+ |
| JS minificado | Redução 30%+ |
| Imagens otimizadas | Redução 50%+ |

---

## 🚀 Começamos!

**Branch atual:** `Experiencia-pratica-04`

**Próximos passos:**
1. Implementar navegação por teclado
2. Adicionar ARIA attributes
3. Criar modo escuro
4. Minificar arquivos
5. Documentar tudo

---

**Status:** 🟡 Em Progresso
