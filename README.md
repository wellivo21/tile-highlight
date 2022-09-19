# Tile Highlights Exercise

## Descrição
Tile Highlights disponibiliza ao usuário clicar em todos os quadrados presentes no *grid*, preenchendo-os. Ao preencher todos os quadrados, automaticamente os mesmos irão "esvaziar" (descolorir) na mesma ordem em que foram clicados. Você pode conferir o resultado final clicando [aqui](https://tile-highlight-ivo.netlify.app/).

## Explicação
Este exercício consiste em:
1. Construir, dinamicamente, um *grid
grid* Nx3 (N podendo ser 3/6/9/12, a ser decidido pelo usuário), usando JavaScript;
2. Armazenar a ordem em que os quadrados foram clicados para, posteriormente, esvaziá-los (os descolorir) automaticamente num intervalo de tempo fixo;

Há 2 manipulações de erros (*error handling*): 
- Uma para quando o usuário clicar fora do espaço dos quadrados e;
- Outra para caso o usuário clicar mais de uma vez num mesmo quadrado (já preenchido).

## Extras
O exercício original consiste apenas na funcionalidade do clique (preencher e esvaziar os quadrados). Como funcionalidade extra, implementei a construção dinamica do *grid* baseado no número de quadrados selecionado pelo usuário, bem como o modo claro/escuro (*light/dark modes*) a ser selecionado pelo usuário conforme sua preferência.
