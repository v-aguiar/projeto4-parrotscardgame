# projeto4-parrotscardgame

## Requisitos

- [x] Geral
    - [x]  Não utilize nenhuma biblioteca para implementar este projeto (jQuery, lodash, react, etc), nem outras linguagens que compilem para JS (TypeScript, ELM, etc), somente JavaScript puro.
    - [x]  Seu projeto deverá ser desenvolvido utilizando Git e GitHub, em um repositório público.
    - [x]  **A cada requisito implementado** faça um *commit* com uma mensagem descritiva do que você evoluiu.

- [x] Layout
    - [x]  Aplicar layout para desktop e mobile, seguindo o figma oferecido.

- [x] Distribuição de cartas
    - [x]  Ao entrar no jogo, o usuário deverá ser perguntado com quantas cartas quer jogar (utilize `prompt`)
    - [x]  O usuário só poderá inserir números pares no `prompt`, de 4 a 14. Qualquer número que fuja a essa regra não deve ser aceito. No caso de números inválidos, o `prompt` deverá ficar sendo repetido, até que o usuário coloque um número válido.
    - [x]  Após inserir um número de cartas válido, o jogo deverá inserir as cartas viradas pra baixo na página de forma que a distribuição seja aleatória
        
        
        **Dica**: para embaralhar uma array, utilize o código abaixo:
        
        ```jsx
        minhaArray.sort(comparador); // Após esta linha, a minhaArray estará embaralhada
        
        // Esta função pode ficar separada do código acima, onde você preferir
        function comparador() { 
        	return Math.random() - 0.5; 
        }
        ```

- [x] Clique na carta
    - [x]  Ao clicar em uma carta, a mesma deve ser virada
    - [x]  Caso seja a primeira carta do par, ela deve permanecer virada até o usuário escolher a segunda carta
    - [x]  Caso seja a segunda carta virada, existem 2 situações:
        - [x]  Caso seja igual à primeira carta, o usuário acertou e ambas agora devem ficar viradas pra cima até o final do jogo
        - [x]  Caso seja uma carta diferente da primeira carta virada, o usuário errou. Nesse caso, o jogo deve **aguardar 1 segundo** e então virar as duas cartas para baixo novamente
    - [x]  **Dica**: se quiser fazer o efeito 3D da carta virando, você pode ver o CSS necesśario em: [https://repl.it/@BootcampRespond/FlippedCards#index.html](https://repl.it/@BootcampRespond/FlippedCards#index.html) . Só se atente que nesse exemplo a carta vira ao passar o mouse. No caso do jogo, seria ao clicar.

- [x] Fim do Jogo
    - [x]  Quando o usuário terminar de virar todas as cartas corretamente, deverá ser exibido um `alert` com a mensagem **"Você ganhou em X jogadas!"** sendo X a quantidade de vezes que o usuário virou uma carta no jogo.

- [x] Correção automágica  ****🙂 
    
    Para agilizarmos a correção dos projetos e dar um feedback mais rápido para vocês, adicione o que está sendo pedido abaixo nos seus elementos:
    
    - [x] No elemento que representa a carta, adicione o atributo `data-identifier="card"`
        - Exemplo
            
            ```jsx
            <div class="card" data-identifier="card">
            	...
            </div>
            ```
            
    - [x] No elemento que representa a parte de trás da carta, adicione o atributo `data-identifier="back-face"`
        
        ![Captura de Tela 2021-11-01 às 16.45.39.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6ac2c1c5-c555-405a-be14-f00c6d58d14e/Captura_de_Tela_2021-11-01_as_16.45.39.png)
        
        - Exemplo
            
            ```jsx
            <div class="face back-face" data-identifier="back-face">
            	...
            </div>
            ```
            
    - [x] No elemento que representa a parte da frente da carta, adicione o atributo `data-identifier="front-face"`
        
        ![Captura de Tela 2021-11-01 às 16.47.12.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1889a64b-8214-429c-a50b-e58d26771fbc/Captura_de_Tela_2021-11-01_as_16.47.12.png)
        
        - Exemplo
            
            ```jsx
            <div class="face front-face" data-identifier="front-face">
            	...
            </div>
            ```
            
    
    Com as configurações acima conseguimos automatizar parte da correção do projeto, acelerando o feedback.
    

### Bônus (opcional)

- [x]  Coloque um relógio no topo superior direito da tela, contando quantos segundos já passaram desde o início do jogo. Ao final, informe na mensagem de vitória a quantidade de segundos.

- [x]  Ao final do jogo, pergunte com um `prompt` se o usuário gostaria de reiniciar a partida. Se ele responder sim, comece novamente o jogo perguntando a quantidade de cartas.