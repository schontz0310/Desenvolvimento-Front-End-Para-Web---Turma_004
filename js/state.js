/**
 * Gerenciamento de Estado Global
 * State management simples e reativo
 */

import { CONFIG } from './config.js';

class State {
    constructor() {
        this.state = {};
        this.listeners = {};
        this.loadFromStorage();
    }

    /**
     * Define valor no estado
     */
    set(key, value, persist = false) {
        const oldValue = this.state[key];
        this.state[key] = value;
        
        // Persiste no localStorage se necessário
        if (persist) {
            this.saveToStorage(key, value);
        }
        
        // Notifica listeners
        this.notify(key, value, oldValue);
        
        return this;
    }

    /**
     * Obtém valor do estado
     */
    get(key, defaultValue = null) {
        return this.state[key] !== undefined ? this.state[key] : defaultValue;
    }

    /**
     * Verifica se chave existe no estado
     */
    has(key) {
        return this.state[key] !== undefined;
    }

    /**
     * Remove chave do estado
     */
    delete(key) {
        const value = this.state[key];
        delete this.state[key];
        this.removeFromStorage(key);
        this.notify(key, undefined, value);
        return this;
    }

    /**
     * Limpa todo o estado
     */
    clear() {
        this.state = {};
        this.clearStorage();
        Object.keys(this.listeners).forEach(key => {
            this.notify(key, undefined);
        });
        return this;
    }

    /**
     * Adiciona listener para mudanças de estado
     */
    subscribe(key, callback) {
        if (!this.listeners[key]) {
            this.listeners[key] = [];
        }
        this.listeners[key].push(callback);
        
        // Retorna função para unsubscribe
        return () => {
            this.listeners[key] = this.listeners[key].filter(cb => cb !== callback);
        };
    }

    /**
     * Notifica listeners sobre mudança
     */
    notify(key, newValue, oldValue) {
        if (this.listeners[key]) {
            this.listeners[key].forEach(callback => {
                callback(newValue, oldValue, key);
            });
        }
        
        // Notifica listeners globais (subscrito a *)
        if (this.listeners['*']) {
            this.listeners['*'].forEach(callback => {
                callback(newValue, oldValue, key);
            });
        }
    }

    /**
     * Salva no localStorage
     */
    saveToStorage(key, value) {
        try {
            const storageKey = `${CONFIG.storage.prefix}${key}`;
            localStorage.setItem(storageKey, JSON.stringify(value));
        } catch (error) {
            console.error('Erro ao salvar no localStorage:', error);
        }
    }

    /**
     * Carrega do localStorage
     */
    loadFromStorage() {
        try {
            Object.keys(localStorage).forEach(key => {
                if (key.startsWith(CONFIG.storage.prefix)) {
                    const stateKey = key.replace(CONFIG.storage.prefix, '');
                    const value = JSON.parse(localStorage.getItem(key));
                    this.state[stateKey] = value;
                }
            });
        } catch (error) {
            console.error('Erro ao carregar do localStorage:', error);
        }
    }

    /**
     * Remove do localStorage
     */
    removeFromStorage(key) {
        try {
            const storageKey = `${CONFIG.storage.prefix}${key}`;
            localStorage.removeItem(storageKey);
        } catch (error) {
            console.error('Erro ao remover do localStorage:', error);
        }
    }

    /**
     * Limpa localStorage
     */
    clearStorage() {
        try {
            Object.keys(localStorage).forEach(key => {
                if (key.startsWith(CONFIG.storage.prefix)) {
                    localStorage.removeItem(key);
                }
            });
        } catch (error) {
            console.error('Erro ao limpar localStorage:', error);
        }
    }

    /**
     * Obtém todo o estado
     */
    getAll() {
        return { ...this.state };
    }

    /**
     * Define múltiplos valores
     */
    setMultiple(obj, persist = false) {
        Object.entries(obj).forEach(([key, value]) => {
            this.set(key, value, persist);
        });
        return this;
    }

    /**
     * Atualiza valor existente (merge para objetos)
     */
    update(key, updater) {
        const currentValue = this.get(key);
        let newValue;
        
        if (typeof updater === 'function') {
            newValue = updater(currentValue);
        } else if (typeof currentValue === 'object' && typeof updater === 'object') {
            newValue = { ...currentValue, ...updater };
        } else {
            newValue = updater;
        }
        
        this.set(key, newValue);
        return this;
    }
}

// Exporta instância singleton
export const state = new State();

// Exporta classe para criar estados isolados se necessário
export { State };
