/**
 * JavaScript de Acessibilidade - WCAG 2.1 Nível AA
 * Experiência Prática 04
 */

// ========================================
// GERENCIAMENTO DE TEMA
// ========================================

class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        // Aplica tema salvo
        this.applyTheme(this.theme);
        
        // Cria controles de tema
        this.createThemeControls();
        
        // Detecta preferência do sistema
        this.watchSystemPreference();
        
        // Atalhos de teclado
        this.setupKeyboardShortcuts();
    }

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        this.theme = theme;
        localStorage.setItem('theme', theme);
        
        // Anuncia mudança para leitores de tela
        this.announceThemeChange(theme);
    }

    createThemeControls() {
        const container = document.createElement('div');
        container.className = 'theme-toggle';
        container.setAttribute('role', 'toolbar');
        container.setAttribute('aria-label', 'Controles de tema');
        
        // Botão tema claro
        const lightBtn = this.createThemeButton('☀️', 'light', 'Tema claro (Alt+L)');
        
        // Botão tema escuro
        const darkBtn = this.createThemeButton('🌙', 'dark', 'Tema escuro (Alt+D)');
        
        // Botão alto contraste
        const contrastBtn = this.createThemeButton('⚫', 'high-contrast', 'Alto contraste (Alt+H)');
        
        container.appendChild(lightBtn);
        container.appendChild(darkBtn);
        container.appendChild(contrastBtn);
        
        document.body.appendChild(container);
    }

    createThemeButton(icon, theme, label) {
        const button = document.createElement('button');
        button.textContent = icon;
        button.setAttribute('aria-label', label);
        button.setAttribute('title', label);
        button.setAttribute('data-theme-btn', theme);
        
        button.addEventListener('click', () => {
            this.applyTheme(theme);
        });
        
        return button;
    }

    watchSystemPreference() {
        const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
        
        darkModeQuery.addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                this.applyTheme(e.matches ? 'dark' : 'light');
            }
        });
    }

    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            if (e.altKey) {
                switch(e.key.toLowerCase()) {
                    case 'l':
                        e.preventDefault();
                        this.applyTheme('light');
                        break;
                    case 'd':
                        e.preventDefault();
                        this.applyTheme('dark');
                        break;
                    case 'h':
                        e.preventDefault();
                        this.applyTheme('high-contrast');
                        break;
                }
            }
        });
    }

    announceThemeChange(theme) {
        const messages = {
            'light': 'Tema claro ativado',
            'dark': 'Tema escuro ativado',
            'high-contrast': 'Alto contraste ativado'
        };
        
        announce(messages[theme] || 'Tema alterado');
    }
}

// ========================================
// NAVEGAÇÃO POR TECLADO
// ========================================

class KeyboardNavigation {
    constructor() {
        this.init();
    }

    init() {
        this.setupSkipLinks();
        this.setupModalKeyboard();
        this.setupMenuKeyboard();
        this.setupFocusTrap();
    }

    setupSkipLinks() {
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.className = 'skip-link';
        skipLink.textContent = 'Pular para o conteúdo principal';
        skipLink.setAttribute('accesskey', '1');
        
        document.body.insertBefore(skipLink, document.body.firstChild);
        
        // Adiciona ID ao main se não existir
        const main = document.querySelector('main');
        if (main && !main.id) {
            main.id = 'main-content';
        }
    }

    setupModalKeyboard() {
        document.addEventListener('keydown', (e) => {
            // Fechar modal com ESC
            if (e.key === 'Escape') {
                const openModal = document.querySelector('.modal.active');
                if (openModal) {
                    const closeBtn = openModal.querySelector('[data-close]');
                    if (closeBtn) closeBtn.click();
                }
            }
        });
    }

    setupMenuKeyboard() {
        const menuToggle = document.getElementById('menu-toggle');
        const mobileMenu = document.querySelector('.mobile-menu');
        
        if (menuToggle && mobileMenu) {
            // Fechar menu com ESC
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && menuToggle.checked) {
                    menuToggle.checked = false;
                }
            });
            
            // Navegação com setas
            const menuLinks = mobileMenu.querySelectorAll('a');
            menuLinks.forEach((link, index) => {
                link.addEventListener('keydown', (e) => {
                    if (e.key === 'ArrowDown') {
                        e.preventDefault();
                        const nextLink = menuLinks[index + 1] || menuLinks[0];
                        nextLink.focus();
                    } else if (e.key === 'ArrowUp') {
                        e.preventDefault();
                        const prevLink = menuLinks[index - 1] || menuLinks[menuLinks.length - 1];
                        prevLink.focus();
                    }
                });
            });
        }
    }

    setupFocusTrap() {
        // Mantém foco dentro de modais abertos
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                const modal = document.querySelector('.modal.active');
                if (modal) {
                    const focusableElements = modal.querySelectorAll(
                        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                    );
                    
                    const firstElement = focusableElements[0];
                    const lastElement = focusableElements[focusableElements.length - 1];
                    
                    if (e.shiftKey && document.activeElement === firstElement) {
                        e.preventDefault();
                        lastElement.focus();
                    } else if (!e.shiftKey && document.activeElement === lastElement) {
                        e.preventDefault();
                        firstElement.focus();
                    }
                }
            }
        });
    }
}

// ========================================
// ANÚNCIOS PARA LEITORES DE TELA
// ========================================

function announce(message, priority = 'polite') {
    let announcer = document.getElementById('announcer');
    
    if (!announcer) {
        announcer = document.createElement('div');
        announcer.id = 'announcer';
        announcer.className = 'sr-only';
        announcer.setAttribute('aria-live', priority);
        announcer.setAttribute('aria-atomic', 'true');
        document.body.appendChild(announcer);
    }
    
    // Limpa e adiciona nova mensagem
    announcer.textContent = '';
    setTimeout(() => {
        announcer.textContent = message;
    }, 100);
}

// ========================================
// VALIDAÇÃO DE CONTRASTE
// ========================================

function checkContrast() {
    const contrastIssues = [];
    
    // Seleciona elementos de texto
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, a, button, span, label');
    
    textElements.forEach(el => {
        const computedStyle = window.getComputedStyle(el);
        const bgColor = computedStyle.backgroundColor;
        const color = computedStyle.color;
        const fontSize = parseFloat(computedStyle.fontSize);
        
        const contrast = calculateContrast(color, bgColor);
        const isLargeText = fontSize >= 18 || (fontSize >= 14 && computedStyle.fontWeight >= 700);
        const minContrast = isLargeText ? 3 : 4.5;
        
        if (contrast < minContrast) {
            contrastIssues.push({
                element: el,
                contrast: contrast.toFixed(2),
                required: minContrast
            });
        }
    });
    
    if (contrastIssues.length > 0) {
        console.warn('⚠️ Problemas de contraste encontrados:', contrastIssues);
    } else {
        console.log('✅ Todos os contrastes estão adequados (WCAG AA)');
    }
    
    return contrastIssues;
}

function calculateContrast(color1, color2) {
    const lum1 = getLuminance(color1);
    const lum2 = getLuminance(color2);
    
    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);
    
    return (brightest + 0.05) / (darkest + 0.05);
}

function getLuminance(color) {
    const rgb = color.match(/\d+/g).map(Number);
    const [r, g, b] = rgb.map(val => {
        val = val / 255;
        return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
    });
    
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

// ========================================
// INICIALIZAÇÃO
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Inicializa gerenciador de tema
    new ThemeManager();
    
    // Inicializa navegação por teclado
    new KeyboardNavigation();
    
    // Verifica contrastes (dev mode)
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        checkContrast();
    }
    
    console.log('✅ Acessibilidade inicializada (WCAG 2.1 AA)');
});

// ========================================
// EXPORT PARA USO GLOBAL
// ========================================

window.accessibility = {
    announce,
    checkContrast
};
