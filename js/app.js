/**
 * Aplicação Principal - ONG Esperança Solidária
 * Experiência Prática 03 - JavaScript Avançado
 * 
 * Sistema SPA com Router, Templates e Validação Avançada
 */

import { CONFIG } from './config.js';
import { router } from './router.js';
import { templates } from './templates.js';
import { state } from './state.js';
import { FormValidator } from './formValidator.js';
import { $, $$, ready, html, on } from './dom.js';
import { formatCPF, formatTelefone, formatCEP } from './utils.js';

class App {
    constructor() {
        this.version = CONFIG.version;
        this.formValidator = null;
        this.toastContainer = null;
    }

    /**
     * Inicializa a aplicação
     */
    async init() {
        console.log(`🚀 Iniciando ${CONFIG.appName} v${this.version}`);
        
        ready(() => {
            // Setup inicial
            this.setupToastContainer();
            this.setupLoading();
            this.registerTemplates();
            this.registerRoutes();
            
            // Inicializa router
            router.init();
            
            // Setup global events
            this.setupGlobalEvents();
            
            console.log('✅ Aplicação inicializada');
        });
    }

    /**
     * Cria container de toasts
     */
    setupToastContainer() {
        if (!$('#toastContainer')) {
            const container = document.createElement('div');
            container.id = 'toastContainer';
            container.className = 'toast-container';
            document.body.appendChild(container);
            this.toastContainer = container;
        } else {
            this.toastContainer = $('#toastContainer');
        }
    }

    /**
     * Cria indicador de loading
     */
    setupLoading() {
        if (!$('#app-loading')) {
            const loading = document.createElement('div');
            loading.id = 'app-loading';
            loading.className = 'app-loading';
            loading.innerHTML = templates.renderPartial('loading');
            loading.style.display = 'none';
            document.body.appendChild(loading);
        }
    }

    /**
     * Registra templates da aplicação
     */
    registerTemplates() {
        // Template: Home (index.html)
        templates.register('home', (data) => {
            return $('#home-content')?.innerHTML || '';
        });

        // Template: Projetos
        templates.register('projetos', (data) => {
            return $('#projetos-content')?.innerHTML || '';
        });

        // Template: Cadastro
        templates.register('cadastro', (data) => {
            return $('#cadastro-content')?.innerHTML || '';
        });
    }

    /**
     * Registra rotas da aplicação
     */
    registerRoutes() {
        // Rota: Home
        router.add('/', async () => {
            await this.loadHome();
        }, { title: 'Início' });

        router.add('/index', async () => {
            await this.loadHome();
        }, { title: 'Início' });

        // Rota: Projetos
        router.add('/projetos', async () => {
            await this.loadProjetos();
        }, { title: 'Nossos Projetos' });

        // Rota: Cadastro
        router.add('/cadastro', async () => {
            await this.loadCadastro();
        }, { title: 'Cadastro de Voluntário' });

        // Define rota padrão
        router.setDefault('/');

        // Handler 404
        router.notFound(async (path) => {
            this.showToast('danger', 'Página não encontrada', `A rota "${path}" não existe.`);
            router.navigate('/');
        });

        // Hook: Antes de cada navegação
        router.beforeEach((to, from) => {
            console.log(`Navegando de ${from} para ${to}`);
            return true; // permite navegação
        });

        // Hook: Depois de cada navegação
        router.afterEach((to, from) => {
            // Atualiza analytics, etc
            this.updatePageView(to);
        });
    }

    /**
     * Carrega página Home
     */
    async loadHome() {
        const content = $('#home-content');
        if (!content) {
            console.error('Conteúdo home não encontrado');
            return;
        }

        // Já está carregado, apenas mostra
        this.showContent('home-content');
        
        // Setup de eventos específicos da home se necessário
        this.setupHomeEvents();
    }

    /**
     * Carrega página Projetos
     */
    async loadProjetos() {
        const content = $('#projetos-content');
        if (!content) {
            console.error('Conteúdo projetos não encontrado');
            return;
        }

        this.showContent('projetos-content');
        this.setupProjetosEvents();
    }

    /**
     * Carrega página Cadastro
     */
    async loadCadastro() {
        const content = $('#cadastro-content');
        if (!content) {
            console.error('Conteúdo cadastro não encontrado');
            return;
        }

        this.showContent('cadastro-content');
        
        // Inicializa validador do formulário
        await this.setupFormValidation();
        
        // Setup máscaras de entrada
        this.setupInputMasks();
        
        // Setup eventos específicos
        this.setupCadastroEvents();
    }

    /**
     * Mostra seção de conteúdo específica
     */
    showContent(contentId) {
        // Esconde todas as seções
        const sections = $$('[id$="-content"]');
        sections.forEach(section => {
            section.style.display = 'none';
        });

        // Mostra seção específica
        const content = $(`#${contentId}`);
        if (content) {
            content.style.display = 'block';
        }
    }

    /**
     * Setup validação avançada do formulário
     */
    async setupFormValidation() {
        const form = $('form');
        if (!form) return;

        // Destrói validador anterior se existir
        if (this.formValidator) {
            this.formValidator.destroy();
        }

        // Cria novo validador
        this.formValidator = new FormValidator('form', {
            validateOnBlur: true,
            validateOnInput: true,
            debounceTime: 300
        });

        // Eventos customizados
        form.addEventListener('validation-success', (e) => {
            this.handleFormSuccess(e.detail.data);
        });

        form.addEventListener('validation-failed', (e) => {
            this.showToast(
                'danger', 
                'Erro no formulário', 
                `${e.detail.errors.length} campo(s) com erro. Verifique e tente novamente.`
            );
        });

        console.log('✅ Validação do formulário configurada');
    }

    /**
     * Setup máscaras de entrada
     */
    setupInputMasks() {
        // CPF
        const cpfInput = $('#cpf');
        if (cpfInput) {
            on(cpfInput, 'input', (e) => {
                e.target.value = formatCPF(e.target.value);
            });
        }

        // Telefone
        const telefoneInput = $('#telefone');
        if (telefoneInput) {
            on(telefoneInput, 'input', (e) => {
                e.target.value = formatTelefone(e.target.value);
            });
        }

        // CEP
        const cepInput = $('#cep');
        if (cepInput) {
            on(cepInput, 'input', (e) => {
                e.target.value = formatCEP(e.target.value);
            });
        }
    }

    /**
     * Setup eventos da Home
     */
    setupHomeEvents() {
        // Adicionar eventos específicos da home aqui
    }

    /**
     * Setup eventos de Projetos
     */
    setupProjetosEvents() {
        // Adicionar eventos específicos de projetos aqui
    }

    /**
     * Setup eventos de Cadastro
     */
    setupCadastroEvents() {
        // Botão de informações (modal)
        const infoButton = $('.btn-outline');
        if (infoButton && infoButton.textContent.includes('Como funciona')) {
            on(infoButton, 'click', () => {
                this.openInfoModal();
            });
        }
    }

    /**
     * Setup eventos globais
     */
    setupGlobalEvents() {
        // Menu mobile
        this.setupMobileMenu();
        
        // Scroll
        this.setupScrollBehavior();
        
        // Keyboard shortcuts
        this.setupKeyboardShortcuts();
    }

    /**
     * Setup menu mobile
     */
    setupMobileMenu() {
        const menuToggle = $('#menu-toggle');
        if (menuToggle) {
            on(menuToggle, 'change', (e) => {
                if (e.target.checked) {
                    document.body.style.overflow = 'hidden';
                } else {
                    document.body.style.overflow = '';
                }
            });
        }
    }

    /**
     * Setup comportamento de scroll
     */
    setupScrollBehavior() {
        let lastScroll = 0;
        
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            // Adiciona classe ao header quando rolar
            const header = $('.site-header');
            if (header) {
                if (currentScroll > 100) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            }
            
            lastScroll = currentScroll;
        });
    }

    /**
     * Setup atalhos de teclado
     */
    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // ESC: Fecha modais, menus, etc
            if (e.key === 'Escape') {
                this.closeAllModals();
                const menuToggle = $('#menu-toggle');
                if (menuToggle) menuToggle.checked = false;
            }
        });
    }

    /**
     * Manipula sucesso do formulário
     */
    async handleFormSuccess(data) {
        console.log('Formulário válido:', data);
        
        // Mostra toast de envio
        this.showToast('info', 'Enviando...', 'Processando seu cadastro...');
        
        // Simula envio (aqui você faria a requisição real)
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Sucesso
        this.showToast(
            'success', 
            'Cadastro enviado!', 
            'Obrigado! Em breve entraremos em contato.'
        );
        
        // Reseta formulário
        if (this.formValidator) {
            this.formValidator.reset();
        }
    }

    /**
     * Mostra toast
     */
    showToast(type, title, message) {
        if (!this.toastContainer) return;
        
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.innerHTML = templates.renderPartial('toast', { type, title, message });
        
        this.toastContainer.appendChild(toast);
        
        // Anima entrada
        setTimeout(() => toast.classList.add('show'), 10);
        
        // Auto-remove
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, CONFIG.ui.toastDuration);
    }

    /**
     * Abre modal de informações
     */
    openInfoModal() {
        const modal = $('#infoModal');
        if (modal) {
            modal.classList.add('active');
        }
    }

    /**
     * Fecha todos os modais
     */
    closeAllModals() {
        const modals = $$('.modal.active');
        modals.forEach(modal => modal.classList.remove('active'));
    }

    /**
     * Atualiza visualização de página (analytics)
     */
    updatePageView(path) {
        // Aqui você poderia integrar com Google Analytics, etc
        console.log(`📊 Page view: ${path}`);
    }
}

// Cria e exporta instância da aplicação
const app = new App();

// Inicializa quando script carregar
app.init();

// Exporta para acesso global (útil para debug)
window.app = app;

export { app };
