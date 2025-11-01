/**
 * Sistema de Roteamento SPA
 * REQUISITO OBRIGATÓRIO: Single Page Application básico
 */

import { $, html, addClass, removeClass } from './dom.js';
import { state } from './state.js';

class Router {
    constructor() {
        this.routes = new Map();
        this.currentRoute = null;
        this.defaultRoute = '/';
        this.notFoundRoute = null;
        this.beforeEachHook = null;
        this.afterEachHook = null;
        this.isNavigating = false;
    }

    /**
     * Registra uma rota
     */
    add(path, handler, options = {}) {
        this.routes.set(path, {
            handler,
            title: options.title || '',
            auth: options.auth || false,
            layout: options.layout || 'default'
        });
        return this;
    }

    /**
     * Define rota padrão (home)
     */
    setDefault(path) {
        this.defaultRoute = path;
        return this;
    }

    /**
     * Define handler para 404
     */
    notFound(handler) {
        this.notFoundRoute = handler;
        return this;
    }

    /**
     * Hook executado antes de cada navegação
     */
    beforeEach(hook) {
        this.beforeEachHook = hook;
        return this;
    }

    /**
     * Hook executado após cada navegação
     */
    afterEach(hook) {
        this.afterEachHook = hook;
        return this;
    }

    /**
     * Inicializa o router
     */
    init() {
        // Listener para mudanças de URL (botões voltar/avançar)
        window.addEventListener('popstate', () => {
            this.handleRoute(window.location.pathname);
        });

        // Intercepta cliques em links
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[data-link]');
            if (link) {
                e.preventDefault();
                const path = link.getAttribute('href');
                this.navigate(path);
            }
        });

        // Carrega rota inicial
        const initialPath = window.location.pathname;
        const path = initialPath === '/' || initialPath.endsWith('.html') 
            ? this.defaultRoute 
            : initialPath;
        
        this.handleRoute(path, false);
        
        console.log('✅ Router inicializado');
        return this;
    }

    /**
     * Navega para uma rota
     */
    async navigate(path, pushState = true) {
        if (this.isNavigating) return;
        
        // Remove .html se existir
        path = path.replace(/\.html$/, '');
        
        // Não navega se já estiver na mesma rota
        if (path === this.currentRoute) return;
        
        this.isNavigating = true;
        
        // Executa hook beforeEach
        if (this.beforeEachHook) {
            const canNavigate = await this.beforeEachHook(path, this.currentRoute);
            if (canNavigate === false) {
                this.isNavigating = false;
                return;
            }
        }
        
        // Atualiza URL
        if (pushState) {
            window.history.pushState({ path }, '', path);
        }
        
        // Processa rota
        await this.handleRoute(path);
        
        // Executa hook afterEach
        if (this.afterEachHook) {
            this.afterEachHook(path, this.currentRoute);
        }
        
        this.isNavigating = false;
    }

    /**
     * Processa rota
     */
    async handleRoute(path, updateState = true) {
        // Normaliza path
        path = path.replace(/\.html$/, '') || this.defaultRoute;
        
        // Busca rota
        const route = this.routes.get(path);
        
        if (!route) {
            // Rota não encontrada
            if (this.notFoundRoute) {
                await this.notFoundRoute(path);
            } else {
                console.error(`Rota não encontrada: ${path}`);
            }
            return;
        }
        
        // Mostra loading
        this.showLoading();
        
        try {
            // Executa handler da rota
            await route.handler();
            
            // Atualiza título da página
            if (route.title) {
                document.title = `${route.title} | ONG Esperança Solidária`;
            }
            
            // Atualiza estado
            if (updateState) {
                state.set('currentRoute', path);
            }
            
            // Atualiza rota atual
            this.currentRoute = path;
            
            // Atualiza links ativos
            this.updateActiveLinks(path);
            
            // Scroll para o topo
            window.scrollTo(0, 0);
            
        } catch (error) {
            console.error('Erro ao carregar rota:', error);
        } finally {
            this.hideLoading();
        }
    }

    /**
     * Atualiza links ativos no menu
     */
    updateActiveLinks(currentPath) {
        const links = document.querySelectorAll('a[data-link]');
        
        links.forEach(link => {
            const linkPath = link.getAttribute('href').replace(/\.html$/, '');
            
            if (linkPath === currentPath) {
                addClass(link, 'active');
            } else {
                removeClass(link, 'active');
            }
        });
    }

    /**
     * Mostra indicador de loading
     */
    showLoading() {
        const loadingEl = $('#app-loading');
        if (loadingEl) {
            loadingEl.style.display = 'flex';
        }
    }

    /**
     * Esconde indicador de loading
     */
    hideLoading() {
        const loadingEl = $('#app-loading');
        if (loadingEl) {
            loadingEl.style.display = 'none';
        }
    }

    /**
     * Volta para rota anterior
     */
    back() {
        window.history.back();
    }

    /**
     * Avança para próxima rota
     */
    forward() {
        window.history.forward();
    }

    /**
     * Recarrega rota atual
     */
    reload() {
        if (this.currentRoute) {
            this.handleRoute(this.currentRoute, false);
        }
    }

    /**
     * Obtém rota atual
     */
    getCurrentRoute() {
        return this.currentRoute;
    }

    /**
     * Verifica se está em determinada rota
     */
    isRoute(path) {
        return this.currentRoute === path;
    }

    /**
     * Obtém parâmetros da query string
     */
    getQueryParams() {
        const params = {};
        const searchParams = new URLSearchParams(window.location.search);
        
        for (const [key, value] of searchParams) {
            params[key] = value;
        }
        
        return params;
    }
}

// Exporta instância singleton
export const router = new Router();

// Exporta classe
export { Router };
