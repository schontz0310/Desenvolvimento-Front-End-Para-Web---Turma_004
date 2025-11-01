/**
 * Configurações Globais da Aplicação
 * ONG Esperança Solidária - Experiência Prática 03
 */

export const CONFIG = {
    appName: 'ONG Esperança Solidária',
    version: '3.0.0',
    
    // Configurações de API (futuro)
    api: {
        baseURL: 'https://formsubmit.co',
        timeout: 5000
    },
    
    // Configurações de Storage
    storage: {
        prefix: 'ong_',
        formDraftKey: 'form_draft',
        userPrefsKey: 'user_prefs'
    },
    
    // Configurações de Validação
    validation: {
        debounceTime: 300, // ms
        showErrorsOnBlur: true,
        showErrorsOnSubmit: true
    },
    
    // Configurações de UI
    ui: {
        toastDuration: 5000, // ms
        transitionDuration: 300, // ms
        loadingDelay: 200 // ms
    }
};

// Mensagens de erro padrão
export const ERROR_MESSAGES = {
    required: 'Este campo é obrigatório',
    email: 'Digite um e-mail válido',
    cpf: 'CPF inválido',
    telefone: 'Telefone inválido',
    cep: 'CEP inválido',
    minLength: 'Mínimo de {min} caracteres',
    maxLength: 'Máximo de {max} caracteres',
    pattern: 'Formato inválido',
    date: 'Data inválida',
    url: 'URL inválida'
};

// Expressões regulares
export const REGEX = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    cpf: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
    telefone: /^\(\d{2}\) \d{4,5}-\d{4}$/,
    cep: /^\d{5}-\d{3}$/,
    url: /^https?:\/\/.+/
};
