/**
 * Módulo de Manipulação do DOM
 * Utilitários para trabalhar com o DOM de forma eficiente
 */

/**
 * Seleciona elemento(s) do DOM
 */
export const $ = (selector, parent = document) => {
    return parent.querySelector(selector);
};

export const $$ = (selector, parent = document) => {
    return Array.from(parent.querySelectorAll(selector));
};

/**
 * Cria elemento HTML com atributos e conteúdo
 */
export function createElement(tag, attributes = {}, content = '') {
    const element = document.createElement(tag);
    
    Object.entries(attributes).forEach(([key, value]) => {
        if (key === 'className') {
            element.className = value;
        } else if (key === 'dataset') {
            Object.entries(value).forEach(([dataKey, dataValue]) => {
                element.dataset[dataKey] = dataValue;
            });
        } else if (key.startsWith('on')) {
            const eventName = key.slice(2).toLowerCase();
            element.addEventListener(eventName, value);
        } else {
            element.setAttribute(key, value);
        }
    });
    
    if (content) {
        if (typeof content === 'string') {
            element.innerHTML = content;
        } else {
            element.appendChild(content);
        }
    }
    
    return element;
}

/**
 * Adiciona classe(s) a um elemento
 */
export function addClass(element, ...classes) {
    element.classList.add(...classes);
}

/**
 * Remove classe(s) de um elemento
 */
export function removeClass(element, ...classes) {
    element.classList.remove(...classes);
}

/**
 * Toggle classe
 */
export function toggleClass(element, className) {
    element.classList.toggle(className);
}

/**
 * Verifica se elemento tem classe
 */
export function hasClass(element, className) {
    return element.classList.contains(className);
}

/**
 * Adiciona evento(s) a elemento(s)
 */
export function on(elements, events, handler, options = {}) {
    const elementsList = Array.isArray(elements) ? elements : [elements];
    const eventsList = Array.isArray(events) ? events : [events];
    
    elementsList.forEach(element => {
        eventsList.forEach(event => {
            element.addEventListener(event, handler, options);
        });
    });
}

/**
 * Remove evento(s) de elemento(s)
 */
export function off(elements, events, handler, options = {}) {
    const elementsList = Array.isArray(elements) ? elements : [elements];
    const eventsList = Array.isArray(events) ? events : [events];
    
    elementsList.forEach(element => {
        eventsList.forEach(event => {
            element.removeEventListener(event, handler, options);
        });
    });
}

/**
 * Delegação de eventos
 */
export function delegate(parent, selector, event, handler) {
    parent.addEventListener(event, (e) => {
        const target = e.target.closest(selector);
        if (target) {
            handler.call(target, e);
        }
    });
}

/**
 * Mostra elemento
 */
export function show(element, display = 'block') {
    element.style.display = display;
}

/**
 * Esconde elemento
 */
export function hide(element) {
    element.style.display = 'none';
}

/**
 * Toggle visibilidade
 */
export function toggle(element, display = 'block') {
    if (element.style.display === 'none') {
        show(element, display);
    } else {
        hide(element);
    }
}

/**
 * Remove elemento do DOM
 */
export function remove(element) {
    if (element && element.parentNode) {
        element.parentNode.removeChild(element);
    }
}

/**
 * Limpa conteúdo de um elemento
 */
export function empty(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

/**
 * Insere HTML em um elemento
 */
export function html(element, content) {
    element.innerHTML = content;
}

/**
 * Adiciona HTML ao elemento
 */
export function append(parent, child) {
    if (typeof child === 'string') {
        parent.insertAdjacentHTML('beforeend', child);
    } else {
        parent.appendChild(child);
    }
}

/**
 * Prepend HTML ao elemento
 */
export function prepend(parent, child) {
    if (typeof child === 'string') {
        parent.insertAdjacentHTML('afterbegin', child);
    } else {
        parent.insertBefore(child, parent.firstChild);
    }
}

/**
 * Obtém ou define atributo
 */
export function attr(element, name, value) {
    if (value === undefined) {
        return element.getAttribute(name);
    }
    element.setAttribute(name, value);
}

/**
 * Remove atributo
 */
export function removeAttr(element, name) {
    element.removeAttribute(name);
}

/**
 * Obtém ou define data attribute
 */
export function data(element, key, value) {
    if (value === undefined) {
        return element.dataset[key];
    }
    element.dataset[key] = value;
}

/**
 * Anima elemento com classes CSS
 */
export async function animate(element, animationClass, duration = 300) {
    addClass(element, animationClass);
    await new Promise(resolve => setTimeout(resolve, duration));
    removeClass(element, animationClass);
}

/**
 * Scroll suave para elemento
 */
export function scrollTo(element, options = {}) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        ...options
    });
}

/**
 * Obtém posição do elemento
 */
export function getPosition(element) {
    const rect = element.getBoundingClientRect();
    return {
        top: rect.top + window.pageYOffset,
        left: rect.left + window.pageXOffset,
        width: rect.width,
        height: rect.height
    };
}

/**
 * Verifica se elemento está visível no viewport
 */
export function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * Ready - executa quando DOM estiver pronto
 */
export function ready(fn) {
    if (document.readyState !== 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}
