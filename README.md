# discographer

Um app para amantes de música! Adicione seus artistas preferidos, marque albums ouvidos, escolha músicas favoritas etc. Trabalho final do bootcamp da Laboratória. Requisitos: usar React + Redux.

Este projeto ainda se encontra **em desenvolvimento**. Caso encontre algum bug ou tenha alguma sugestão de melhoria, deixe um comentário na aba "Issues", que terei o prazer de olhar. :wink:

**:heavy_exclamation_mark: Atenção: na atual versão, a API do Deezer só funciona com alguma extensão do tipo "Allow-Control-Allow-Origin" para browsers ligada. Já estou trabalhando para corrigir esse problema.**

**Página do projeto:** https://discographer.herokuapp.com/ 

![image](https://user-images.githubusercontent.com/40531512/47817398-432f2080-dd34-11e8-8fea-454b712f7df3.png)

## Requisitos

1. Utilizar React;
2. (opcional) Utilizar uma API.

## Ferramentas utilizadas

1. React + Redux;
2. Firebase (autenticação e banco de dados)
3. Materialize;
4. API do Deezer;
5. EcmaScript 6;

## Desenvolvimento

### Protótipo

![image](https://user-images.githubusercontent.com/40531512/47819350-ff8ae580-dd38-11e8-8672-c38f33b5189a.png)

**Protótipo navegável:** https://marvelapp.com/a30d1b7

### Distribuição dos componentes

![image](https://user-images.githubusercontent.com/40531512/47819397-22b59500-dd39-11e8-9c90-0e9ff78256cd.png)

### Histórico

#### Versão 0.0.0 - Beta

Primeira versão do projeto entregue em 31/10/2018. Nesta versão estão disponíveis as seguintes funcionalidades:

- Cadastro e login de usuário; :heavy_check_mark:
- Busca de artistas no banco de dados do Deezer; :heavy_check_mark: 
- Possibilidade de adicionar o artista à página de artistas recentemente ouvidos. :heavy_check_mark: 

**Problemas conhecidos:**

- Problema de cross-origin com a API do Deezer, no momento a API só funciona com uma extensão para os navegadores que permita cross-origin; :heavy_exclamation_mark:
- Layout não adaptado a todos os navegadores e não-responsivo. :heavy_exclamation_mark:

### Versão 0.1.0 - Beta - TBA

Para a versão 0.1.0, desejo desenvolver as seguintes funcionalidades:

- Resolver o problema de cross-origin;
- Exibir os artistas seguidos pelo usuário de forma cronológica, do adicionado mais recentemente ao mais antigo;
- Implementar o botão de unfollow nos artigas que já são seguidos pelo usuário;
- Implementar o botão de favoritar / desfavoritar artista;
- Implementar a página de artistas favoritos;
- Implementar a página de detalhes de cada artista, exibindo os álbums lançados por ele.

### Versão 0.2.0 - Beta - TBA

Para a versão 0.2.0, desejo desenvolver as seguintes funcionalidades:

- Possibilitar o usuário seguir / deixar de seguir álbums de um determinado artista;
- Possibilitar o usuário favoritar / deixar de favoritar álbums de um determinado artista;
- Exibir os álbums adicionados recentemente / favoritados pelo usuário;
- Exibir a página de detalhe do álbum de um determinado artist, exibindo a tracklist;

### Versão 0.3.0 - Beta - TBA

Para a versão 0.3.0, desejo desenvolver as seguintes funcionalidades:

- Possibilitar o usuário seguir / deixar de seguir tracks de um determinado álbum;
- Possibilitar o usuário favoritar / deixar de favoritar tracks de um determinado álbum;
- Exibir as tracks adicionadas recentemente / favoritadas pelo usuário;


### Versão 0.4.0 - Beta - TBA

Para a versão 0.4.0, desejo desenvolver a seguinte funcionalidade:

- Implementar uma barra embaixo de cada artista/album seguido/favoritado por um usuário que indique a porcentagem dos álbums/tracks que aquele usuário ouviu daquele determinado artista.

### Versão 1.0.0 - MVP - TBA

Para a versão 1.0.0, desejo desenvolver a seguinte funcionalidade:

- Possibilidade de fazer pesquisa pelo nome do álbum;
- Possibilidade de fazer pesquisa pelo nome da música.
