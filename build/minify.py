#!/usr/bin/env python3
"""
Script de Minificação para Produção (Python)
Experiência Prática 04

Minifica CSS e JavaScript para otimizar performance
"""

import re
import os
from pathlib import Path

def minify_css(css):
    """Minifica CSS removendo espaços e comentários"""
    # Remove comentários
    css = re.sub(r'/\*[\s\S]*?\*/', '', css)
    # Remove espaços múltiplos
    css = re.sub(r'\s+', ' ', css)
    # Remove espaços ao redor de caracteres especiais
    css = re.sub(r'\s*{\s*', '{', css)
    css = re.sub(r'\s*}\s*', '}', css)
    css = re.sub(r'\s*:\s*', ':', css)
    css = re.sub(r'\s*;\s*', ';', css)
    css = re.sub(r'\s*,\s*', ',', css)
    # Remove último ; antes de }
    css = re.sub(r';}', '}', css)
    return css.strip()

def minify_js(js):
    """Minifica JavaScript removendo espaços e comentários"""
    # Remove comentários de linha
    js = re.sub(r'//.*$', '', js, flags=re.MULTILINE)
    # Remove comentários de bloco
    js = re.sub(r'/\*[\s\S]*?\*/', '', js)
    # Remove console.log
    js = re.sub(r'console\.log\([^)]*\);?', '', js)
    # Remove espaços múltiplos
    js = re.sub(r'\s+', ' ', js)
    # Remove espaços ao redor de caracteres
    js = re.sub(r'\s*{\s*', '{', js)
    js = re.sub(r'\s*}\s*', '}', js)
    js = re.sub(r'\s*\(\s*', '(', js)
    js = re.sub(r'\s*\)\s*', ')', js)
    js = re.sub(r'\s*;\s*', ';', js)
    js = re.sub(r'\s*,\s*', ',', js)
    return js.strip()

def process_file(input_path, output_path, minify_func, file_type):
    """Processa um arquivo aplicando minificação"""
    try:
        with open(input_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        minified = minify_func(content)
        
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(minified)
        
        original_size = len(content.encode('utf-8'))
        minified_size = len(minified.encode('utf-8'))
        reduction = ((1 - minified_size / original_size) * 100)
        
        print(f"✅ {file_type} minificado: {os.path.basename(input_path)}")
        print(f"   Original: {original_size / 1024:.2f} KB")
        print(f"   Minificado: {minified_size / 1024:.2f} KB")
        print(f"   Redução: {reduction:.2f}%\n")
        
        return {'original': original_size, 'minified': minified_size}
    except Exception as e:
        print(f"❌ Erro ao processar {input_path}: {e}")
        return None

def concatenate_css(base_dir):
    """Concatena todos os arquivos CSS"""
    css_files = [
        'css/variables.css',
        'css/base.css',
        'css/layout.css',
        'css/navigation.css',
        'css/components.css',
        'css/forms.css',
        'css/responsive.css',
        'css/accessibility.css'
    ]
    
    concatenated = '/* ONG Esperança Solidária - CSS Concatenado */\n'
    
    for css_file in css_files:
        file_path = base_dir / css_file
        if file_path.exists():
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            concatenated += f"\n/* {os.path.basename(css_file)} */\n{content}\n"
    
    return concatenated

def main():
    """Função principal"""
    print("🚀 Iniciando minificação...\n")
    
    # Diretórios
    base_dir = Path(__file__).parent.parent
    dist_dir = base_dir / 'dist'
    dist_dir.mkdir(exist_ok=True)
    
    total_stats = {'original': 0, 'minified': 0}
    
    # Concatena e minifica CSS
    print("📦 Concatenando e minificando CSS...")
    css_content = concatenate_css(base_dir)
    css_temp = dist_dir / 'styles.css'
    with open(css_temp, 'w', encoding='utf-8') as f:
        f.write(css_content)
    
    css_stats = process_file(
        css_temp,
        dist_dir / 'styles.min.css',
        minify_css,
        'CSS'
    )
    if css_stats:
        total_stats['original'] += css_stats['original']
        total_stats['minified'] += css_stats['minified']
    
    # Minifica JavaScript principal
    print("📦 Minificando JavaScript...")
    js_stats = process_file(
        base_dir / 'js/script.js',
        dist_dir / 'script.min.js',
        minify_js,
        'JavaScript'
    )
    if js_stats:
        total_stats['original'] += js_stats['original']
        total_stats['minified'] += js_stats['minified']
    
    # Minifica JavaScript de acessibilidade
    a11y_stats = process_file(
        base_dir / 'js/accessibility.js',
        dist_dir / 'accessibility.min.js',
        minify_js,
        'JavaScript'
    )
    if a11y_stats:
        total_stats['original'] += a11y_stats['original']
        total_stats['minified'] += a11y_stats['minified']
    
    # Resumo
    print("=" * 50)
    print("📊 RESUMO DA MINIFICAÇÃO:")
    print("=" * 50)
    print(f"Tamanho original total: {total_stats['original'] / 1024:.2f} KB")
    print(f"Tamanho minificado total: {total_stats['minified'] / 1024:.2f} KB")
    reduction = ((1 - total_stats['minified'] / total_stats['original']) * 100)
    print(f"Redução total: {reduction:.2f}%")
    print("=" * 50)
    print("\n✅ Minificação concluída com sucesso!")
    print(f"📁 Arquivos salvos em: {dist_dir}\n")

if __name__ == '__main__':
    main()
