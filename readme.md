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

## Rotas
    Esta API contém as seguintes rotas:

    * `GET /tools` : lista as ferramentas cadastradas
    * `POST /tools` : cria uma nova ferramenta
    * `DELETE /tools/:id` : apaga a ferramenta com ID :id

## Requisitos
    - 0. A API deve responder na porta 3000
    - 1. Deve haver uma rota para listar todas as ferramentas cadastradas 
        `GET /tools`
    - 2. Deve ser possível filtrar ferramentas utilizando uma busca por tag `GET /tools?tag=node`
    - 3. Deve haver uma rota para cadastrar uma nova ferramenta `POST /tools`  
        O corpo da requisição deve conter as informações da ferramenta a ser cadastrada, sem o ID (gerado automaticamente pelo servidor). A resposta, em caso de sucesso, deve ser o mesmo objeto, com seu novo ID gerado.    
    - 4. Deve haver O usuário deve poder remover uma ferramenta por ID `DELETE /tools/:id` 

## Ferramentas que utilizei
    * NodeJs
    * Msqyl
    * Docker

## Como executar
    Faça o clone/download deste repositório, execute `yarn install` e `yarn start`. 
    A API fica localizada em `http://localhost:3000`.



## Comandos para instalar e rodar a aplicação
    - yarn install
    - docker-compose up -d
    - npx sequelize-cli db:migrate
