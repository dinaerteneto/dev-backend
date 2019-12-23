# CHALLANGE DEV BACKEND
    Este repositório foi construído para atender o desafio de backend da `BOSSABOX`.

## Desafio
    Construir uma API e banco de dados para a aplicação VUTTR (Very Useful Tools to Remember).
    A Aplicação é um simples repositório para gerenciar ferramentas com seus respectivos nomes, links, descrições e tags.

## O mínimo necessário

    - Uma aplicação contendo uma API real simples, sem autenticação, que atenda os requisitos descritos abaixo, fazendo requisições à um banco de dados para persistência;
    - README.md contendo informações básicas do projeto e como executá-lo;
    - [API Blueprint](https://apiblueprint.org/) ou [Swagger](https://swagger.io/docs/specification/basic-structure/) da aplicação.

## Critérios de Aceitação

    - A API deve ser real e escrita por você. Ferramentas que criam APIs automaticamente (Loopback, json-server, etc) não são aceitas;
    - Todos os requisitos acima devem ser cumpridos, seguindo o padrão de rotas estabelecido;
    - Deve haver um documento de API Blueprint ou OpenAPI (antigo Swagger) descrevendo sua API;
    - Se você julgar necessário, adequado ou quiser deixar a aplicação mais completa (bônus!) você pode adicionar outras rotas, métodos, meios de autenticação com usuários, etc.

## Requisitos

    - 0. A API deve responder na porta 3000
    - 1. Deve haver uma rota para listar todas as ferramentas cadastradas 
        `GET /tools`
    - 2. Deve ser possível filtrar ferramentas utilizando uma busca por tag `GET /tools?tag=node`
    - 3. Deve haver uma rota para cadastrar uma nova ferramenta `POST /tools`  
        O corpo da requisição deve conter as informações da ferramenta a ser cadastrada, sem o ID (gerado automaticamente pelo servidor). A resposta, em caso de sucesso, deve ser o mesmo objeto, com seu novo ID gerado.    
    - 4. Deve haver O usuário deve poder remover uma ferramenta por ID `DELETE /tools/:id` 

## Rotas

    Esta API contém as seguintes rotas:
    * `GET /tools` : lista as ferramentas cadastradas
    * `POST /tools` : cria uma nova ferramenta
    * `DELETE /tools/:id` : apaga a ferramenta com ID :id
    * `GET /api-docs` : Documentação das rotas acima utilizando swagger

## Ferramentas que utilizei

    * Postgres
    * Docker    
    * NodeJs
    * Sequelize
    * Swagger
    * Migrations

## Como executar com docker

    - 1. Faça o clone/download deste repositório.
    - 2. Acesse o diretório do projeto.
    - 3. Execute o comando `docker-compose up -d`.
    - 4. A Aplicação estará rodando na porta 3000, então digite localhost:3000/api-docs para ver a documentação.
    - 5. OBS: Na primeira vez que você rodar a aplicação, pode ser que demore um pouco, pois será instalado 
         todas as depedências do node e também será criado a estrutura do banco de dados.
         Por tanto se quiser executar o comando: `docker-composer up`, você poderá acompanhar no terminal o que esta
         acontecendo durante o processo de inicialização dos servidores.

## Como executar sem o docker

    - 1. Faça o clone/download deste repositório.
    - 2. Navegue até o diretório do projeto: `cd dev-backend`.
    - 3. Execute o comando `yarn install`.
    - 4. Com o postgres rodando ajuste o arquivo .env com seu usuário e banco do postgres que irá utilizar.
    - 5. Execute o comando `npx sequelize-cli db:migrate`.
    - 6. A Aplicação estará rodando na porta 3000, então digite localhost:3000/api-docs para ver a documentação.