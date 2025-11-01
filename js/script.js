/**
 * Script de Validação de Formulário - ONG Esperança Solidária
 * Experiência Prática 03 - JavaScript Avançado
 * 
 * REQUISITO OBRIGATÓRIO: Sistema de verificação de consistência de dados
 * em formulários, com aviso ao usuário de preenchimento incorreto.
 */

document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.querySelector('form');
    const statusMensagem = document.getElementById('toastContainer');
    
    // Cria container de mensagens se não existir
    if (!statusMensagem) {
        const container = document.createElement('div');
        container.id = 'toastContainer';
        container.className = 'toast-container';
        document.body.appendChild(container);
    }
    
    if (formulario) {
        // Validação em tempo real nos campos obrigatórios
        const camposRequired = formulario.querySelectorAll('[required]');
        
        camposRequired.forEach(campo => {
            // Validação ao sair do campo (blur)
            campo.addEventListener('blur', function() {
                validarCampo(this);
            });
            
            // Remove erro ao digitar
            campo.addEventListener('input', function() {
                if (this.value.trim()) {
                    removerErro(this);
                }
            });
        });
        
        // Máscaras de entrada
        setupMascaras();
        
        // Validação no submit
        formulario.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Valida todos os campos
            let temErro = false;
            const erros = [];
            
            camposRequired.forEach(campo => {
                if (!validarCampo(campo)) {
                    temErro = true;
                    erros.push(campo);
                }
            });
            
            // Validações específicas
            const email = formulario.querySelector('#email');
            if (email && email.value) {
                if (!validarEmail(email.value)) {
                    mostrarErro(email, 'E-mail inválido');
                    temErro = true;
                    if (!erros.includes(email)) erros.push(email);
                }
            }
            
            const cpf = formulario.querySelector('#cpf');
            if (cpf && cpf.value) {
                if (!validarCPF(cpf.value)) {
                    mostrarErro(cpf, 'CPF inválido');
                    temErro = true;
                    if (!erros.includes(cpf)) erros.push(cpf);
                }
            }
            
            if (temErro) {
                mostrarToast('erro', `Por favor, preencha todos os campos corretamente. ${erros.length} erro(s) encontrado(s).`);
                // Foca no primeiro campo com erro
                if (erros.length > 0) {
                    erros[0].focus();
                    erros[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
                return;
            }
            
            // Se passou na validação
            mostrarToast('sucesso', 'Mensagem enviada com sucesso!');
            setTimeout(() => {
                formulario.reset();
                limparTodosErros();
            }, 1500);
        });
    }
});

/**
 * Valida um campo individual
 */
function validarCampo(campo) {
    const valor = campo.value.trim();
    
    // Campo obrigatório vazio
    if (campo.hasAttribute('required') && !valor) {
        mostrarErro(campo, 'Este campo é obrigatório');
        return false;
    }
    
    // Validação de minlength
    if (campo.hasAttribute('minlength')) {
        const min = parseInt(campo.getAttribute('minlength'));
        if (valor.length < min) {
            mostrarErro(campo, `Mínimo de ${min} caracteres`);
            return false;
        }
    }
    
    // Validação de pattern
    if (campo.hasAttribute('pattern') && valor) {
        const pattern = new RegExp(campo.getAttribute('pattern'));
        if (!pattern.test(valor)) {
            mostrarErro(campo, 'Formato inválido');
            return false;
        }
    }
    
    // Campo válido
    removerErro(campo);
    return true;
}

/**
 * Mostra erro no campo
 */
function mostrarErro(campo, mensagem) {
    // Remove erro anterior
    removerErro(campo);
    
    // Adiciona classe de erro
    campo.classList.add('campo-erro');
    campo.style.borderColor = '#e74c3c';
    
    // Cria elemento de erro
    const erro = document.createElement('div');
    erro.className = 'mensagem-erro';
    erro.style.color = '#e74c3c';
    erro.style.fontSize = '14px';
    erro.style.marginTop = '4px';
    erro.textContent = mensagem;
    
    // Insere após o campo
    campo.parentNode.insertBefore(erro, campo.nextSibling);
}

/**
 * Remove erro do campo
 */
function removerErro(campo) {
    campo.classList.remove('campo-erro');
    campo.style.borderColor = '';
    
    // Remove mensagem de erro
    const proximoElemento = campo.nextElementSibling;
    if (proximoElemento && proximoElemento.classList.contains('mensagem-erro')) {
        proximoElemento.remove();
    }
}

/**
 * Limpa todos os erros
 */
function limparTodosErros() {
    const camposErro = document.querySelectorAll('.campo-erro');
    camposErro.forEach(campo => removerErro(campo));
    
    const mensagensErro = document.querySelectorAll('.mensagem-erro');
    mensagensErro.forEach(msg => msg.remove());
}

/**
 * Valida e-mail
 */
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

/**
 * Valida CPF
 */
function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]/g, '');
    
    if (cpf.length !== 11) return false;
    if (/^(\d)\1{10}$/.test(cpf)) return false;
    
    let soma = 0;
    let resto;
    
    for (let i = 1; i <= 9; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) return false;
    
    soma = 0;
    for (let i = 1; i <= 10; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(10, 11))) return false;
    
    return true;
}

/**
 * Mostra toast de notificação
 */
function mostrarToast(tipo, mensagem) {
    const container = document.getElementById('toastContainer') || document.body;
    
    const toast = document.createElement('div');
    toast.className = `toast toast-${tipo === 'erro' ? 'danger' : 'success'}`;
    toast.innerHTML = `
        <div class="toast-content">
            <div class="toast-message">${mensagem}</div>
        </div>
        <button class="toast-close" onclick="this.parentElement.remove()">×</button>
    `;
    
    container.appendChild(toast);
    
    // Anima entrada
    setTimeout(() => toast.classList.add('show'), 10);
    
    // Remove automaticamente
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 5000);
}

/**
 * Setup de máscaras de entrada
 */
function setupMascaras() {
    // Máscara de CPF
    const cpfInput = document.getElementById('cpf');
    if (cpfInput) {
        cpfInput.addEventListener('input', function(e) {
            let valor = e.target.value.replace(/\D/g, '');
            valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
            valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
            valor = valor.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
            e.target.value = valor;
        });
    }
    
    // Máscara de Telefone
    const telefoneInput = document.getElementById('telefone');
    if (telefoneInput) {
        telefoneInput.addEventListener('input', function(e) {
            let valor = e.target.value.replace(/\D/g, '');
            valor = valor.replace(/(\d{2})(\d)/, '($1) $2');
            valor = valor.replace(/(\d{4,5})(\d{4})$/, '$1-$2');
            e.target.value = valor;
        });
    }
    
    // Máscara de CEP
    const cepInput = document.getElementById('cep');
    if (cepInput) {
        cepInput.addEventListener('input', function(e) {
            let valor = e.target.value.replace(/\D/g, '');
            valor = valor.replace(/(\d{5})(\d)/, '$1-$2');
            e.target.value = valor;
        });
    }
}
