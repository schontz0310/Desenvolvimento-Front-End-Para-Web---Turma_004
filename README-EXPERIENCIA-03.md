# 📋 Experiência Prática 03 - JavaScript Avançado

## 🎯 Objetivo

Implementar JavaScript avançado com foco em **validação de formulários**, atendendo ao requisito obrigatório de **verificação de consistência de dados com avisos ao usuário**.

---

## ✅ Requisito Obrigatório Atendido

### **Sistema de Verificação de Consistência de Dados**

✅ **Validação em tempo real** (blur + input)
✅ **Avisos visuais** ao usuário sobre erros
✅ **Feedback imediato** em campos incorretos
✅ **Mensagens descritivas** de erro
✅ **Prevenção de envio** com dados inválidos

---

## 📁 Estrutura do Projeto

```
ong-esperanca-solidaria/
├── css/                      # Estilos (Experiência 02)
│   ├── variables.css
│   ├── base.css
│   ├── layout.css
│   ├── navigation.css
│   ├── components.css
│   ├── forms.css
│   └── responsive.css
│
├── js/                       # JavaScript (Experiência 03)
│   └── script.js            ⭐ ARQUIVO PRINCIPAL
│
├── index.html               # Página inicial
├── projetos.html            # Projetos e voluntariado
├── cadastro.html            # Formulário com validação
└── README-EXPERIENCIA-03.md # Este arquivo
```

---

## 🚀 Funcionalidades Implementadas

### **1. Validação em Tempo Real** ⚡

- Validação **ao sair do campo** (evento blur)
- Validação **enquanto digita** (evento input)
- Remove erro automaticamente ao corrigir

### **2. Tipos de Validação** ✅

| Tipo | Descrição |
|------|-----------|
| **Campos obrigatórios** | Verifica se campo está preenchido |
| **E-mail** | Valida formato de e-mail |
| **CPF** | Validação algorítmica completa |
| **Telefone** | Valida formato (XX) XXXXX-XXXX |
| **CEP** | Valida formato XXXXX-XXX |
| **Tamanho mínimo** | Verifica minlength |
| **Padrão (pattern)** | Valida regex customizado |

### **3. Máscaras Automáticas** 🎭

- **CPF:** `000.000.000-00`
- **Telefone:** `(00) 00000-0000`
- **CEP:** `00000-000`

### **4. Feedback Visual** 👁️

- Borda vermelha em campos com erro
- Mensagem de erro abaixo do campo
- Toast de notificação no topo
- Scroll automático para erro
- Foco no primeiro campo inválido

### **5. Toasts de Notificação** 📢

- **Erro:** Campos inválidos ou vazios
- **Sucesso:** Formulário enviado com sucesso
- Auto-fechamento após 5 segundos
- Botão de fechar manual

---

## 💻 Como Usar

### **1. Abrir o Projeto**

```bash
cd ong-esperanca-solidaria
open cadastro.html
```

### **2. Testar Validação**

1. Acesse a página **Cadastro de Voluntário**
2. Tente enviar formulário vazio → **❌ Erro**
3. Preencha um campo → **✅ Borda verde**
4. Digite CPF inválido → **❌ Erro "CPF inválido"**
5. Digite e-mail sem @ → **❌ Erro "E-mail inválido"**
6. Preencha tudo correto → **✅ Sucesso!**

---

## 🔍 Detalhes Técnicos

### **Validação de CPF**

```javascript
function validarCPF(cpf) {
    // Remove formatação
    cpf = cpf.replace(/[^\d]/g, '');
    
    // Verifica tamanho
    if (cpf.length !== 11) return false;
    
    // Verifica CPFs inválidos conhecidos
    if (/^(\d)\1{10}$/.test(cpf)) return false;
    
    // Valida primeiro dígito verificador
    let soma = 0;
    for (let i = 1; i <= 9; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    let resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) return false;
    
    // Valida segundo dígito verificador
    soma = 0;
    for (let i = 1; i <= 10; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(10, 11))) return false;
    
    return true;
}
```

### **Validação de E-mail**

```javascript
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
```

### **Máscaras Automáticas**

```javascript
// CPF
cpfInput.addEventListener('input', function(e) {
    let valor = e.target.value.replace(/\D/g, '');
    valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
    valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
    valor = valor.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    e.target.value = valor;
});
```

---

## 📊 Comparativo: Antes vs Depois

### **Antes (Experiência 02)**

- ❌ Validação básica HTML5
- ❌ Sem feedback visual específico
- ❌ Sem máscaras de entrada
- ❌ Sem validação de CPF

### **Depois (Experiência 03)**

- ✅ Validação avançada JavaScript
- ✅ Feedback visual completo
- ✅ Máscaras automáticas
- ✅ Validação algorítmica de CPF
- ✅ Toasts de notificação
- ✅ Scroll para erro
- ✅ Mensagens descritivas

---

## 🎨 Casos de Teste

### **Teste 1: Campos Vazios**
1. Clique em "Enviar" sem preencher
2. **Esperado:** Toast de erro + campos com borda vermelha
3. **Status:** ✅ Passa

### **Teste 2: E-mail Inválido**
1. Digite `teste` no campo e-mail
2. Clique em enviar
3. **Esperado:** Mensagem "E-mail inválido"
4. **Status:** ✅ Passa

### **Teste 3: CPF Inválido**
1. Digite `111.111.111-11`
2. Clique em enviar
3. **Esperado:** Mensagem "CPF inválido"
4. **Status:** ✅ Passa

### **Teste 4: CPF Válido**
1. Digite CPF válido (ex: `123.456.789-09`)
2. Preencha outros campos
3. **Esperado:** Formulário enviado
4. **Status:** ✅ Passa

### **Teste 5: Máscaras**
1. Digite apenas números no CPF
2. **Esperado:** Formatação automática
3. **Status:** ✅ Passa

---

## 🏆 Diferenciais Implementados

✅ **Validação 100% JavaScript** (não depende de HTML5)
✅ **Feedback visual rico** (bordas, mensagens, toasts)
✅ **UX otimizada** (scroll, foco, mensagens claras)
✅ **Código organizado** e comentado
✅ **Sem dependências externas**
✅ **Compatível** com todos navegadores

---

## 📝 Código Modular

### **Funções Principais**

```javascript
// Validação
validarCampo(campo)           // Valida campo individual
validarEmail(email)           // Valida e-mail
validarCPF(cpf)              // Valida CPF

// Feedback Visual
mostrarErro(campo, mensagem) // Mostra erro no campo
removerErro(campo)           // Remove erro do campo
mostrarToast(tipo, mensagem) // Mostra toast

// Máscaras
setupMascaras()              // Configura máscaras
```

---

## 🚦 Status do Projeto

| Requisito | Status |
|-----------|--------|
| Validação de consistência | ✅ Completo |
| Avisos ao usuário | ✅ Completo |
| Feedback visual | ✅ Completo |
| JavaScript modular | ✅ Completo |
| Sem dependências | ✅ Completo |

---

## 📖 Referências

- **Validação de CPF:** Algoritmo oficial da Receita Federal
- **Regex de E-mail:** RFC 5322 simplificado
- **Máscaras:** Baseado em padrões brasileiros

---

## 👤 Autor

**Eliverto Moraes**
- Curso: Análise e Desenvolvimento de Sistemas
- Disciplina: Desenvolvimento Front-End Para Web
- Experiência Prática 03

---

## 📅 Versão

- **v3.0.0** - Experiência Prática 03
- **Data:** Novembro 2024
- **Branch:** `Experiencia-pratica-03`

---

**✅ Projeto finalizado e pronto para avaliação!**
