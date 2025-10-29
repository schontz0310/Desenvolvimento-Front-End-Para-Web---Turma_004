# ✅ Checklist da Primeira Entrega

## 📋 Requisitos Obrigatórios

### Estrutura HTML5 Semântica ✅
- [x] Mínimo 3 páginas HTML com estrutura semântica completa
- [x] Hierarquia de títulos lógica e consistente
- [x] Uso de elementos semânticos apropriados

### Páginas Obrigatórias ✅
- [x] **index.html** - Página inicial sobre a organização com informações de contato
- [x] **projetos.html** - Projetos sociais, voluntariado e doações
- [x] **cadastro.html** - Formulário de cadastro de voluntários

### Formulário (cadastro.html) ✅
- [x] Nome Completo
- [x] E-mail
- [x] CPF com máscara (000.000.000-00)
- [x] Telefone com máscara ((00) 00000-0000)
- [x] Data de Nascimento
- [x] Endereço
- [x] CEP com máscara (00000-000)
- [x] Cidade
- [x] Estado
- [x] Validação nativa HTML5
- [x] Agrupamento lógico com fieldset

### Código Fonte ✅
- [x] Estrutura de pastas organizada
- [x] Pastas: css/, js/, img/, assets/fonts/, assets/icons/
- [ ] Arquivos HTML validados no W3C Validator

### Assets e Recursos ⚠️
- [ ] Imagens otimizadas em múltiplos formatos (32 imagens - veja lista no README)

## 📝 Para Fazer Antes da Entrega

### 1. Adicionar Imagens
Você precisa adicionar 32 imagens na pasta `img/`. Consulte o arquivo README.md para ver a lista completa e as dimensões recomendadas.

Fontes sugeridas:
- https://unsplash.com/
- https://pexels.com/
- https://pixabay.com/

### 2. Validar HTMLs no W3C
Acesse https://validator.w3.org/ e valide os 3 arquivos HTML:
- [ ] index.html validado
- [ ] projetos.html validado
- [ ] cadastro.html validado

**Como validar:**
1. Acesse https://validator.w3.org/#validate_by_upload
2. Faça upload de cada arquivo HTML
3. Corrija eventuais erros ou warnings
4. Repita até todos os arquivos passarem sem erros

### 3. Preparar Repositório GitHub
- [ ] Criar repositório público no GitHub
- [ ] Adicionar todos os arquivos
- [ ] Configurar repositório como PÚBLICO (muito importante!)
- [ ] Adicionar descrição clara no repositório
- [ ] Verificar se todos os arquivos foram enviados

**Comandos Git:**
```bash
git init
git add .
git commit -m "Primeira entrega - HTML5 semântico com formulários"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/ong-esperanca-solidaria.git
git push -u origin main
```

### 4. Testar Links
- [ ] Testar navegação entre as 3 páginas
- [ ] Verificar se todos os links internos funcionam
- [ ] Verificar âncoras (#voluntariado, #doacoes, etc.)

### 5. Testar Formulário
- [ ] Testar validação de campos obrigatórios
- [ ] Testar máscaras de input (CPF, telefone, CEP)
- [ ] Testar validação de e-mail
- [ ] Verificar se todos os checkboxes e radios funcionam

## 📤 Forma de Entrega

**O que entregar:**
- Link PÚBLICO do repositório GitHub

**Observações Importantes:**
- ⚠️ O link do GitHub DEVE estar configurado como PÚBLICO
- ⚠️ Se estiver como privado, a atividade não será corrigida e a nota será zerada
- ✅ Certifique-se de que o repositório contém:
  - Todos os arquivos HTML
  - Estrutura de pastas organizada
  - Imagens otimizadas
  - README.md atualizado

## 🎯 Checklist Final Antes de Entregar

- [ ] Todos os 3 arquivos HTML estão funcionando
- [ ] Navegação entre páginas funciona corretamente
- [ ] Formulário valida campos corretamente
- [ ] Máscaras de CPF, telefone e CEP estão aplicadas
- [ ] Imagens foram adicionadas (ou placeholders com dimensões corretas)
- [ ] HTMLs foram validados no W3C
- [ ] Repositório GitHub está PÚBLICO
- [ ] README.md está atualizado e claro
- [ ] Todos os arquivos foram commitados e enviados ao GitHub
- [ ] Link do repositório foi copiado e está pronto para entrega

## 📊 Pontos de Atenção

### Estrutura HTML5 Semântica
- Uso correto de `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Hierarquia de títulos (`<h1>` a `<h6>`) lógica
- Elementos semânticos específicos: `<figure>`, `<figcaption>`, `<blockquote>`, `<address>`

### Formulário
- Todos os campos obrigatórios da especificação foram incluídos
- Validação HTML5 nativa implementada
- Máscaras seguem o padrão brasileiro
- Agrupamento lógico facilita compreensão

### Boas Práticas Aplicadas
- Meta tags para SEO em todas as páginas
- Atributo `alt` em todas as imagens
- Links externos com `target="_blank"` e `rel="noopener"`
- Labels associados aos inputs
- Estrutura consistente entre as páginas

## 💡 Dicas

1. **Teste em diferentes navegadores** (Chrome, Firefox, Safari)
2. **Verifique a acessibilidade** (navegação por teclado, leitores de tela)
3. **Revise o código** antes da entrega
4. **Mantenha backup** de todos os arquivos
5. **Documente** qualquer decisão importante no README

---

**Data de criação:** Outubro 2024  
**Disciplina:** Desenvolvimento Front-End para Web  
**Curso:** Análise e Desenvolvimento de Sistemas
