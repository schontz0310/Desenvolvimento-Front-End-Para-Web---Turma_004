/**
 * Sistema de Templates JavaScript
 * REQUISITO OBRIGATÓRIO: Sistema de templates JavaScript
 */

import { sanitizeHTML } from './utils.js';

class Templates {
    constructor() {
        this.templates = new Map();
        this.partials = new Map();
        this.cache = new Map();
    }

    /**
     * Registra um template
     */
    register(name, template) {
        this.templates.set(name, template);
        return this;
    }

    /**
     * Registra um partial (componente reutilizável)
     */
    registerPartial(name, partial) {
        this.partials.set(name, partial);
        return this;
    }

    /**
     * Renderiza um template com dados
     */
    render(name, data = {}) {
        const template = this.templates.get(name);
        
        if (!template) {
            console.error(`Template não encontrado: ${name}`);
            return '';
        }
        
        // Executa template function
        if (typeof template === 'function') {
            return template(data, this);
        }
        
        // Template string - processa interpolação
        return this.interpolate(template, data);
    }

    /**
     * Renderiza um partial
     */
    renderPartial(name, data = {}) {
        const partial = this.partials.get(name);
        
        if (!partial) {
            console.error(`Partial não encontrado: ${name}`);
            return '';
        }
        
        if (typeof partial === 'function') {
            return partial(data, this);
        }
        
        return this.interpolate(partial, data);
    }

    /**
     * Interpola variáveis no template
     * Suporta: {{variable}}, {{#if}}, {{#each}}, {{partial}}
     */
    interpolate(template, data) {
        let result = template;
        
        // Processa partials: {{> partialName}}
        result = result.replace(/\{\{>\s*(\w+)\s*\}\}/g, (match, partialName) => {
            return this.renderPartial(partialName, data);
        });
        
        // Processa condicionais: {{#if condition}}...{{/if}}
        result = this.processConditionals(result, data);
        
        // Processa loops: {{#each array}}...{{/each}}
        result = this.processLoops(result, data);
        
        // Processa variáveis: {{variable}}
        result = result.replace(/\{\{([^#/>][^}]*)\}\}/g, (match, key) => {
            const value = this.getNestedValue(data, key.trim());
            return value !== undefined ? sanitizeHTML(String(value)) : '';
        });
        
        return result;
    }

    /**
     * Processa condicionais no template
     */
    processConditionals(template, data) {
        const regex = /\{\{#if\s+([^}]+)\}\}([\s\S]*?)(?:\{\{#else\}\}([\s\S]*?))?\{\{\/if\}\}/g;
        
        return template.replace(regex, (match, condition, trueBlock, falseBlock = '') => {
            const value = this.getNestedValue(data, condition.trim());
            const isTrue = this.isTruthy(value);
            return isTrue ? trueBlock : falseBlock;
        });
    }

    /**
     * Processa loops no template
     */
    processLoops(template, data) {
        const regex = /\{\{#each\s+([^}]+)\}\}([\s\S]*?)\{\{\/each\}\}/g;
        
        return template.replace(regex, (match, arrayKey, itemTemplate) => {
            const array = this.getNestedValue(data, arrayKey.trim());
            
            if (!Array.isArray(array)) {
                return '';
            }
            
            return array.map((item, index) => {
                const itemData = {
                    ...data,
                    this: item,
                    index: index,
                    first: index === 0,
                    last: index === array.length - 1
                };
                return this.interpolate(itemTemplate, itemData);
            }).join('');
        });
    }

    /**
     * Obtém valor aninhado de um objeto
     */
    getNestedValue(obj, path) {
        return path.split('.').reduce((current, prop) => {
            return current?.[prop];
        }, obj);
    }

    /**
     * Verifica se valor é truthy
     */
    isTruthy(value) {
        if (Array.isArray(value)) return value.length > 0;
        if (typeof value === 'object' && value !== null) return Object.keys(value).length > 0;
        return Boolean(value);
    }

    /**
     * Limpa cache de templates
     */
    clearCache() {
        this.cache.clear();
        return this;
    }

    /**
     * Remove template
     */
    unregister(name) {
        this.templates.delete(name);
        return this;
    }

    /**
     * Remove partial
     */
    unregisterPartial(name) {
        this.partials.delete(name);
        return this;
    }

    /**
     * Verifica se template existe
     */
    has(name) {
        return this.templates.has(name);
    }

    /**
     * Obtém todos os templates registrados
     */
    getAll() {
        return Array.from(this.templates.keys());
    }
}

// Exporta instância singleton
export const templates = new Templates();

// Exporta classe
export { Templates };

// ====================================
// TEMPLATES PADRÃO DA APLICAÇÃO
// ====================================

// Loading
templates.registerPartial('loading', () => `
    <div class="loading-spinner">
        <div class="spinner"></div>
        <p>Carregando...</p>
    </div>
`);

// Toast
templates.registerPartial('toast', (data) => `
    <div class="toast toast-${data.type}">
        <div class="toast-content">
            <div class="toast-title">${data.title || ''}</div>
            <div class="toast-message">${data.message}</div>
        </div>
        <button class="toast-close" onclick="this.parentElement.remove()">×</button>
    </div>
`);

// Card de Projeto
templates.registerPartial('projectCard', (data) => `
    <div class="card project-card">
        <div class="card-header">
            <h3 class="card-title">${data.title}</h3>
            ${data.badge ? `<span class="badge badge-${data.badge.type}">${data.badge.text}</span>` : ''}
        </div>
        <div class="card-body">
            <p>${data.description}</p>
            ${data.details ? `
                <ul>
                    ${data.details.map(detail => `<li>${detail}</li>`).join('')}
                </ul>
            ` : ''}
        </div>
        ${data.link ? `
            <div class="card-footer">
                <a href="${data.link.url}" class="btn btn-primary">${data.link.text}</a>
            </div>
        ` : ''}
    </div>
`);

// Stat Card
templates.registerPartial('statCard', (data) => `
    <div class="stat-card">
        <div class="stat-icon">${data.icon}</div>
        <div class="stat-number">${data.number}</div>
        <div class="stat-label">${data.label}</div>
    </div>
`);

// Testimonial Card
templates.registerPartial('testimonialCard', (data) => `
    <div class="testimonial-card">
        <div class="testimonial-content">
            <p class="testimonial-text">"${data.text}"</p>
        </div>
        <div class="testimonial-author">
            <div class="author-name">${data.author}</div>
            <div class="author-role">${data.role}</div>
        </div>
    </div>
`);

// Alert
templates.registerPartial('alert', (data) => `
    <div class="alert alert-${data.type}" role="alert">
        ${data.dismissible ? '<button class="alert-close" onclick="this.parentElement.remove()">×</button>' : ''}
        ${data.title ? `<strong>${data.title}</strong>` : ''}
        ${data.message}
    </div>
`);

// Breadcrumb
templates.registerPartial('breadcrumb', (data) => `
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            ${data.items.map((item, index) => `
                <li class="breadcrumb-item ${index === data.items.length - 1 ? 'active' : ''}" 
                    ${index === data.items.length - 1 ? 'aria-current="page"' : ''}>
                    ${index === data.items.length - 1 
                        ? item.text 
                        : `<a href="${item.url}" data-link>${item.text}</a>`
                    }
                </li>
            `).join('')}
        </ol>
    </nav>
`);

// Badge
templates.registerPartial('badge', (data) => `
    <span class="badge badge-${data.type || 'primary'}">${data.text}</span>
`);

// Progress Bar
templates.registerPartial('progressBar', (data) => `
    <div class="progress">
        <div class="progress-bar" 
             role="progressbar" 
             style="width: ${data.value}%"
             aria-valuenow="${data.value}" 
             aria-valuemin="0" 
             aria-valuemax="100">
            ${data.showLabel ? `${data.value}%` : ''}
        </div>
    </div>
`);
