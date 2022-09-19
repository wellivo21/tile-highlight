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

## Conserto de bugs
Durante os testes com a aplicação, tive que consertar alguns erros. 
1. Antes de a funcionalidade começar, logicamente era possível trocar o número de quadrados. No entanto, caso o usuário tivesse clicado em algum quadrado e posteriormente mudasse o tamanho do grid, o tamanho do *array* (utilizado para que se saiba quando a funcionalidade terá inicio) ainda continha dados, o que fazia possível a execução começar antes do desejado. Para isso, fiz com que dito *array* seja esvaziado (const array = []) sempre que houver uma mudança no tamanho do grid;
2. Quando a funcionalidade começava, ainda era possível mudar o número de quadrinhos, o que fazia aparecer diversos bugs. Para este problema, decidi desabilitar a *tag select* quando a funcionalidade tiver início e habilitá-la novamente ao fim desta;
3. Com a funcionalidade ainda em andamento, era possível clicar nos quadrados que se "esvaziavam" (por conta da própria funcionalidade). Isso  fazia com que a funcionalidade executasse de forma não desejada. Então, ao começo da funcionalidade, criei um seletor para todos os elementos com classe ".tile" e adicionei uma outra classe, chamada ".no-click", que faz com que o atributo CSS *pointer-events* tenha valor *none*, desabilitando, assim, todos os cliques nos quadrinhos. Ao fim da funcionalidade, juntamente com a habilitação do elemento *select*, a classe ".no-click" é retirada dos elementos com classe ".tile", fazendo com que possam ser clicados novamente.

## Extras
O exercício original consiste apenas na funcionalidade do clique (preencher e esvaziar os quadrados). Como funcionalidade extra, implementei a construção dinamica do *grid* baseado no número de quadrados selecionado pelo usuário, bem como o modo claro/escuro (*light/dark modes*) a ser selecionado pelo usuário conforme sua preferência.
