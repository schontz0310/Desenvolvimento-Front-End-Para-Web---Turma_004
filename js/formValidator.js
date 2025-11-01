/**
 * Sistema de Validação Avançada de Formulários
 * REQUISITO OBRIGATÓRIO: Verificação de consistência de dados
 * com aviso ao usuário de preenchimento incorreto
 */

import { ERROR_MESSAGES, REGEX } from './config.js';
import { validarCPF, debounce } from './utils.js';
import { $, $$, addClass, removeClass, hasClass } from './dom.js';

class FormValidator {
    constructor(formSelector, options = {}) {
        this.form = $(formSelector);
        if (!this.form) {
            console.error(`Formulário não encontrado: ${formSelector}`);
            return;
        }

        this.options = {
            validateOnBlur: true,
            validateOnInput: true,
            showErrorsImmediately: false,
            debounceTime: 300,
            ...options
        };

        this.fields = new Map();
        this.customRules = new Map();
        this.isSubmitting = false;
        
        this.init();
    }

    /**
     * Inicializa o validador
     */
    init() {
        // Desabilita validação HTML5 nativa
        this.form.setAttribute('novalidate', '');
        
        // Encontra todos os campos com validação
        this.findFields();
        
        // Adiciona listeners de eventos
        this.attachEventListeners();
        
        console.log(`✅ Validador inicializado para ${this.fields.size} campos`);
    }

    /**
     * Encontra e registra campos do formulário
     */
    findFields() {
        const inputs = $$('input, select, textarea', this.form);
        
        inputs.forEach(field => {
            const rules = this.getFieldRules(field);
            if (rules.length > 0 || field.hasAttribute('required')) {
                this.fields.set(field.name || field.id, {
                    element: field,
                    rules: rules,
                    valid: null,
                    touched: false,
                    errorElement: null
                });
            }
        });
    }

    /**
     * Extrai regras de validação do campo
     */
    getFieldRules(field) {
        const rules = [];
        
        // Required
        if (field.hasAttribute('required')) {
            rules.push({ type: 'required' });
        }
        
        // Type-based validation
        const type = field.type;
        if (type === 'email') {
            rules.push({ type: 'email' });
        }
        
        // Pattern
        if (field.hasAttribute('pattern')) {
            rules.push({ 
                type: 'pattern', 
                pattern: new RegExp(field.getAttribute('pattern'))
            });
        }
        
        // MinLength
        if (field.hasAttribute('minlength')) {
            rules.push({ 
                type: 'minLength', 
                min: parseInt(field.getAttribute('minlength'))
            });
        }
        
        // MaxLength
        if (field.hasAttribute('maxlength')) {
            rules.push({ 
                type: 'maxLength', 
                max: parseInt(field.getAttribute('maxlength'))
            });
        }
        
        // Min/Max (para números e datas)
        if (field.hasAttribute('min')) {
            rules.push({ 
                type: 'min', 
                min: field.getAttribute('min')
            });
        }
        
        if (field.hasAttribute('max')) {
            rules.push({ 
                type: 'max', 
                max: field.getAttribute('max')
            });
        }
        
        // Data attributes personalizados
        if (field.dataset.validate) {
            rules.push({ 
                type: 'custom', 
                validator: field.dataset.validate 
            });
        }
        
        // Validações específicas por ID
        if (field.id === 'cpf') {
            rules.push({ type: 'cpf' });
        }
        
        if (field.id === 'telefone' || field.id === 'celular') {
            rules.push({ type: 'telefone' });
        }
        
        if (field.id === 'cep') {
            rules.push({ type: 'cep' });
        }
        
        return rules;
    }

    /**
     * Adiciona event listeners
     */
    attachEventListeners() {
        // Submit do formulário
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmit(e);
        });
        
        // Validação em tempo real
        this.fields.forEach((fieldData, fieldName) => {
            const field = fieldData.element;
            
            // Blur - valida quando campo perde foco
            if (this.options.validateOnBlur) {
                field.addEventListener('blur', () => {
                    fieldData.touched = true;
                    this.validateField(fieldName);
                });
            }
            
            // Input - valida enquanto usuário digita (com debounce)
            if (this.options.validateOnInput) {
                const debouncedValidation = debounce(() => {
                    if (fieldData.touched || this.isSubmitting) {
                        this.validateField(fieldName);
                    }
                }, this.options.debounceTime);
                
                field.addEventListener('input', debouncedValidation);
            }
            
            // Focus - remove erro ao focar
            field.addEventListener('focus', () => {
                if (fieldData.valid === false) {
                    this.clearFieldError(fieldName);
                }
            });
        });
    }

    /**
     * Valida um campo específico
     */
    async validateField(fieldName) {
        const fieldData = this.fields.get(fieldName);
        if (!fieldData) return true;
        
        const field = fieldData.element;
        const value = field.value.trim();
        
        // Limpa erro anterior
        this.clearFieldError(fieldName);
        
        // Executa validações
        for (const rule of fieldData.rules) {
            const result = await this.executeRule(value, rule, field);
            
            if (!result.valid) {
                this.showFieldError(fieldName, result.message);
                fieldData.valid = false;
                return false;
            }
        }
        
        // Campo válido
        this.markFieldValid(fieldName);
        fieldData.valid = true;
        return true;
    }

    /**
     * Executa uma regra de validação
     */
    async executeRule(value, rule, field) {
        switch (rule.type) {
            case 'required':
                if (!value) {
                    return { 
                        valid: false, 
                        message: ERROR_MESSAGES.required 
                    };
                }
                break;
                
            case 'email':
                if (value && !REGEX.email.test(value)) {
                    return { 
                        valid: false, 
                        message: ERROR_MESSAGES.email 
                    };
                }
                break;
                
            case 'cpf':
                if (value && !validarCPF(value)) {
                    return { 
                        valid: false, 
                        message: ERROR_MESSAGES.cpf 
                    };
                }
                break;
                
            case 'telefone':
                if (value && !REGEX.telefone.test(value)) {
                    return { 
                        valid: false, 
                        message: ERROR_MESSAGES.telefone 
                    };
                }
                break;
                
            case 'cep':
                if (value && !REGEX.cep.test(value)) {
                    return { 
                        valid: false, 
                        message: ERROR_MESSAGES.cep 
                    };
                }
                break;
                
            case 'pattern':
                if (value && !rule.pattern.test(value)) {
                    return { 
                        valid: false, 
                        message: ERROR_MESSAGES.pattern 
                    };
                }
                break;
                
            case 'minLength':
                if (value && value.length < rule.min) {
                    return { 
                        valid: false, 
                        message: ERROR_MESSAGES.minLength.replace('{min}', rule.min) 
                    };
                }
                break;
                
            case 'maxLength':
                if (value && value.length > rule.max) {
                    return { 
                        valid: false, 
                        message: ERROR_MESSAGES.maxLength.replace('{max}', rule.max) 
                    };
                }
                break;
                
            case 'min':
                if (field.type === 'number' && value && parseFloat(value) < parseFloat(rule.min)) {
                    return { 
                        valid: false, 
                        message: `Valor mínimo: ${rule.min}` 
                    };
                }
                if (field.type === 'date' && value && new Date(value) < new Date(rule.min)) {
                    return { 
                        valid: false, 
                        message: `Data mínima: ${rule.min}` 
                    };
                }
                break;
                
            case 'max':
                if (field.type === 'number' && value && parseFloat(value) > parseFloat(rule.max)) {
                    return { 
                        valid: false, 
                        message: `Valor máximo: ${rule.max}` 
                    };
                }
                if (field.type === 'date' && value && new Date(value) > new Date(rule.max)) {
                    return { 
                        valid: false, 
                        message: `Data máxima: ${rule.max}` 
                    };
                }
                break;
                
            case 'custom':
                const customValidator = this.customRules.get(rule.validator);
                if (customValidator) {
                    const result = await customValidator(value, field);
                    if (!result.valid) {
                        return result;
                    }
                }
                break;
        }
        
        return { valid: true };
    }

    /**
     * Mostra erro no campo
     */
    showFieldError(fieldName, message) {
        const fieldData = this.fields.get(fieldName);
        if (!fieldData) return;
        
        const field = fieldData.element;
        
        // Adiciona classe de erro
        addClass(field, 'invalid');
        field.setAttribute('aria-invalid', 'true');
        
        // Cria elemento de erro se não existir
        if (!fieldData.errorElement) {
            const errorId = `error-${fieldName}`;
            const errorElement = document.createElement('div');
            errorElement.id = errorId;
            errorElement.className = 'field-error';
            errorElement.setAttribute('role', 'alert');
            
            // Insere após o campo
            field.parentNode.insertBefore(errorElement, field.nextSibling);
            field.setAttribute('aria-describedby', errorId);
            
            fieldData.errorElement = errorElement;
        }
        
        // Define mensagem de erro
        fieldData.errorElement.textContent = message;
        fieldData.errorElement.style.display = 'block';
        
        // Borda vermelha
        field.style.borderColor = '#e74c3c';
    }

    /**
     * Limpa erro do campo
     */
    clearFieldError(fieldName) {
        const fieldData = this.fields.get(fieldName);
        if (!fieldData) return;
        
        const field = fieldData.element;
        
        removeClass(field, 'invalid');
        field.removeAttribute('aria-invalid');
        field.style.borderColor = '';
        
        if (fieldData.errorElement) {
            fieldData.errorElement.style.display = 'none';
            fieldData.errorElement.textContent = '';
        }
    }

    /**
     * Marca campo como válido
     */
    markFieldValid(fieldName) {
        const fieldData = this.fields.get(fieldName);
        if (!fieldData) return;
        
        const field = fieldData.element;
        addClass(field, 'valid');
        field.removeAttribute('aria-invalid');
        field.style.borderColor = '#2ecc71';
    }

    /**
     * Valida todo o formulário
     */
    async validateForm() {
        let isValid = true;
        const errors = [];
        
        for (const [fieldName, fieldData] of this.fields) {
            fieldData.touched = true;
            const valid = await this.validateField(fieldName);
            
            if (!valid) {
                isValid = false;
                errors.push({
                    field: fieldName,
                    element: fieldData.element
                });
            }
        }
        
        return { isValid, errors };
    }

    /**
     * Handle submit do formulário
     */
    async handleSubmit(event) {
        this.isSubmitting = true;
        
        const { isValid, errors } = await this.validateForm();
        
        if (!isValid) {
            // Foca no primeiro campo com erro
            if (errors.length > 0) {
                errors[0].element.focus();
                errors[0].element.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center' 
                });
            }
            
            // Dispara evento de validação falhou
            this.form.dispatchEvent(new CustomEvent('validation-failed', {
                detail: { errors }
            }));
            
            this.isSubmitting = false;
            return false;
        }
        
        // Formulário válido - dispara evento
        this.form.dispatchEvent(new CustomEvent('validation-success', {
            detail: { data: this.getFormData() }
        }));
        
        this.isSubmitting = false;
        return true;
    }

    /**
     * Adiciona regra customizada
     */
    addRule(name, validator) {
        this.customRules.set(name, validator);
    }

    /**
     * Obtém dados do formulário
     */
    getFormData() {
        const formData = new FormData(this.form);
        const data = {};
        
        for (const [key, value] of formData.entries()) {
            // Suporte para múltiplos valores (checkboxes)
            if (data[key]) {
                if (Array.isArray(data[key])) {
                    data[key].push(value);
                } else {
                    data[key] = [data[key], value];
                }
            } else {
                data[key] = value;
            }
        }
        
        return data;
    }

    /**
     * Reseta formulário e validações
     */
    reset() {
        this.form.reset();
        this.fields.forEach((fieldData, fieldName) => {
            fieldData.touched = false;
            fieldData.valid = null;
            this.clearFieldError(fieldName);
            removeClass(fieldData.element, 'valid');
        });
    }

    /**
     * Destrói o validador
     */
    destroy() {
        this.fields.clear();
        this.customRules.clear();
    }
}

export { FormValidator };
