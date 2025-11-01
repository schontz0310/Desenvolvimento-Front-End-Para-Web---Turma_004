#!/usr/bin/env node

/**
 * Script de Minificação para Produção
 * Experiência Prática 04
 * 
 * Minifica CSS e JavaScript para otimizar performance
 */

const fs = require('fs');
const path = require('path');

// ========================================
// MINIFICAÇÃO DE CSS
// ========================================

function minifyCSS(css) {
    return css
        // Remove comentários
        .replace(/\/\*[\s\S]*?\*\//g, '')
        // Remove espaços múltiplos
        .replace(/\s+/g, ' ')
        // Remove espaços antes de {
        .replace(/\s*\{\s*/g, '{')
        // Remove espaços depois de }
        .replace(/\s*\}\s*/g, '}')
        // Remove espaços antes de :
        .replace(/\s*:\s*/g, ':')
        // Remove espaços antes de ;
        .replace(/\s*;\s*/g, ';')
        // Remove espaços antes de ,
        .replace(/\s*,\s*/g, ',')
        // Remove último ; antes de }
        .replace(/;}/g, '}')
        // Remove espaços no início e fim
        .trim();
}

// ========================================
// MINIFICAÇÃO DE JAVASCRIPT
// ========================================

function minifyJS(js) {
    return js
        // Remove comentários de linha
        .replace(/\/\/.*$/gm, '')
        // Remove comentários de bloco
        .replace(/\/\*[\s\S]*?\*\//g, '')
        // Remove console.log
        .replace(/console\.log\([^)]*\);?/g, '')
        // Remove espaços múltiplos
        .replace(/\s+/g, ' ')
        // Remove espaços antes de {
        .replace(/\s*\{\s*/g, '{')
        // Remove espaços depois de }
        .replace(/\s*\}\s*/g, '}')
        // Remove espaços antes de (
        .replace(/\s*\(\s*/g, '(')
        // Remove espaços antes de )
        .replace(/\s*\)\s*/g, ')')
        // Remove espaços antes de ;
        .replace(/\s*;\s*/g, ';')
        // Remove espaços antes de ,
        .replace(/\s*,\s*/g, ',')
        // Remove espaços antes de operadores
        .replace(/\s*([=+\-*/<>!&|])\s*/g, '$1')
        // Remove espaços no início e fim
        .trim();
}

// ========================================
// PROCESSAMENTO DE ARQUIVOS
// ========================================

function processFile(inputPath, outputPath, minifyFunction, type) {
    try {
        const content = fs.readFileSync(inputPath, 'utf8');
        const minified = minifyFunction(content);
        
        fs.writeFileSync(outputPath, minified, 'utf8');
        
        const originalSize = Buffer.byteLength(content, 'utf8');
        const minifiedSize = Buffer.byteLength(minified, 'utf8');
        const reduction = ((1 - minifiedSize / originalSize) * 100).toFixed(2);
        
        console.log(`✅ ${type} minificado: ${path.basename(inputPath)}`);
        console.log(`   Original: ${(originalSize / 1024).toFixed(2)} KB`);
        console.log(`   Minificado: ${(minifiedSize / 1024).toFixed(2)} KB`);
        console.log(`   Redução: ${reduction}%\n`);
        
        return { originalSize, minifiedSize, reduction };
    } catch (error) {
        console.error(`❌ Erro ao processar ${inputPath}:`, error.message);
        return null;
    }
}

// ========================================
// CONCATENAÇÃO DE CSS
// ========================================

function concatenateCSS() {
    const cssFiles = [
        '../css/variables.css',
        '../css/base.css',
        '../css/layout.css',
        '../css/navigation.css',
        '../css/components.css',
        '../css/forms.css',
        '../css/responsive.css',
        '../css/accessibility.css'
    ];
    
    let concatenated = '/* ONG Esperança Solidária - CSS Concatenado */\n';
    
    cssFiles.forEach(file => {
        const filePath = path.join(__dirname, file);
        if (fs.existsSync(filePath)) {
            const content = fs.readFileSync(filePath, 'utf8');
            concatenated += `\n/* ${path.basename(file)} */\n${content}\n`;
        }
    });
    
    return concatenated;
}

// ========================================
// MAIN
// ========================================

console.log('🚀 Iniciando minificação...\n');

// Cria diretório dist se não existir
const distDir = path.join(__dirname, '../dist');
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
}

let totalStats = {
    originalSize: 0,
    minifiedSize: 0
};

// Minifica CSS concatenado
console.log('📦 Concatenando e minificando CSS...');
const cssContent = concatenateCSS();
fs.writeFileSync(path.join(__dirname, '../dist/styles.css'), cssContent, 'utf8');
const cssStats = processFile(
    path.join(__dirname, '../dist/styles.css'),
    path.join(__dirname, '../dist/styles.min.css'),
    minifyCSS,
    'CSS'
);
if (cssStats) {
    totalStats.originalSize += cssStats.originalSize;
    totalStats.minifiedSize += cssStats.minifiedSize;
}

// Minifica JavaScript principal
console.log('📦 Minificando JavaScript...');
const jsStats = processFile(
    path.join(__dirname, '../js/script.js'),
    path.join(__dirname, '../dist/script.min.js'),
    minifyJS,
    'JavaScript'
);
if (jsStats) {
    totalStats.originalSize += jsStats.originalSize;
    totalStats.minifiedSize += jsStats.minifiedSize;
}

// Minifica JavaScript de acessibilidade
const a11yJsStats = processFile(
    path.join(__dirname, '../js/accessibility.js'),
    path.join(__dirname, '../dist/accessibility.min.js'),
    minifyJS,
    'JavaScript'
);
if (a11yJsStats) {
    totalStats.originalSize += a11yJsStats.originalSize;
    totalStats.minifiedSize += a11yJsStats.minifiedSize;
}

// Resumo final
console.log('=' .repeat(50));
console.log('📊 RESUMO DA MINIFICAÇÃO:');
console.log('=' .repeat(50));
console.log(`Tamanho original total: ${(totalStats.originalSize / 1024).toFixed(2)} KB`);
console.log(`Tamanho minificado total: ${(totalStats.minifiedSize / 1024).toFixed(2)} KB`);
console.log(`Redução total: ${((1 - totalStats.minifiedSize / totalStats.originalSize) * 100).toFixed(2)}%`);
console.log('=' .repeat(50));
console.log('\n✅ Minificação concluída com sucesso!');
console.log(`📁 Arquivos salvos em: ${distDir}\n`);
