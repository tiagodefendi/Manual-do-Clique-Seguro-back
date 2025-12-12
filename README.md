# Manual do Clique Seguro

Backend da implementação do trabalho da matéria Objetos de Aprendizagem.

## Descrição do Projeto

O Manual do Clique Seguro é um **Objeto de Aprendizagem** desenvolvido com intuito de ensinar boas práticas de cibersegurança para idosos que acessam a internet. O projeto consiste em um backend construído com NestJS, que fornece uma API RESTful para gerenciar conteúdos educacionais, quizzes interativos e monitoramento de progresso dos usuários.

### Objeto de Aprendizagem

O objeto de aprendizagem a ser produzido será um quiz multimídia interativo sobre segurança digital, destinado a analfabetos digitais, como idosos ou pessoas que estão começando a usar computadores e smartphones. O objetivo é ensinar boas práticas de segurança na internet e no uso de dispositivos digitais, prevenindo golpes, fraudes e erros comuns no dia a dia.

Publico Alvo:
- Idosos

Requisitos de Apendizagem:
- Compreender a importância de senhas fortes e seguras.
- Identificar e evitar golpes comuns na internet, como phishing e fraudes.
- Aprender a utilizar ferramentas básicas de segurança, como gerenciadores de senhas, navegação anônima e antivírus.
- Reconhecer a importância de manter softwares e sistemas atualizados.
- Entender os riscos de compartilhar informações pessoais online.

Mapa Conceitual:
- O Mapa Conceitual do Objeto de Aprendizagem pode ser visualizado [aqui](https://cmapscloud.ihmc.us/viewer/cmap/21XSF8KCB-2SHFCY-BP56L1).
- O Mapa Conceitual de Cibersegurança pode ser visualizado [aqui](https://cmapscloud.ihmc.us/viewer/cmap/222K9RV4F-X9VGKX-M9XVSC).

Modelo Instrucional:
- O Modelo Instrucional do Objeto de Aprendizagem pode ser visualizado [aqui](https://drive.google.com/file/d/1do2nlK1ncjFqW222IG9ootDm0ZIjGhbW/view?usp=sharing).

Repositório de Documentação:
- O Repositório de Documentação do Objeto de Aprendizagem pode ser visualizado [aqui](https://github.com/tiagodefendi/Manual-do-Clique-Seguro).

## Como usar o Objeto de Aprendizagem

Para utilizar o Manual do Clique Seguro, siga os passos abaixo:

### Pré-requisitos
- Node.js
- npm ou yarn
- PostgreSQL
- Conta e Projeto no Supabase

### Instalação
1. Clone o repositório:
    ```bash
    git clone https://github.com/tiagodefendi/Manual-do-Clique-Seguro-back.git
    ```
2. Navegue até o diretório do projeto:
    ```bash
    cd Manual-do-Clique-Seguro-back
    ```
3. Instale as dependências:
    ```bash
    npm install
    # ou
    yarn install
    ```
4. Configure as variáveis de ambiente:
    - Copie o arquivo `.env.example` para `.env`:
        ```bash
        cp .env.example .env
        ```
    - Preencha as variáveis de ambiente no arquivo `.env` com suas configurações.
5. Inicie o servidor:
    ```bash
    npm run start:dev
    # ou
    yarn start:dev
    ```

## Tecnologias Utilizadas

- **NestJS**: Framework para construção de aplicações Node.js escaláveis e eficientes.
- **TypeScript**: Linguagem de programação que adiciona tipagem estática ao JavaScript.
- **Prisma**: ORM para TypeScript e JavaScript que facilita a interação com bancos de dados relacionais.
- **PostgreSQL**: Sistema de gerenciamento de banco de dados relacional utilizado para armazenar os dados do aplicativo.
- **Supabase**: Plataforma de backend com serviço que oferece autenticação, banco de dados e armazenamento.
