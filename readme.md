# FLORIPA + RECICLAGEM

Olá! Seja bem-vindo(a) a continuação do projeto Floripa Mais Reciclagem!

## Descrição
O F+R é um sistema que permite o usuário encontrar pontos de coleta seletiva na cidade de Florianópolis (SC), bem como cadastrar, atualizar e deletar locais, com o intuito de promover a correta destinação dos diferentes tipos de lixo e ajudar a população manezinha.
Desta vez, o foco foi no desenvolvimento back-end da aplicação, desenvolvendo uma API e aplicando algumas etapas e um CRUD completo, onde as informações de usuário e locais de coleta estão conectadas e são guardadas em um banco de dados -- se você for autorizado a isso.

## Funcionalidades 
> Cadastro de usuário
> Login com geração de token para acesso de rotas privadas

> Permissões dos usuários: algumas mudanças só podem ser realizadas se você for autorizado a isso

> Cadastro de novos locais de coleta
> Listagem de todos os locais ou de apenas um
> Atualização de todos os dados
> Deleção

> Conexão com a API 'nominatim.openstreetmap' para obter a localização do seu ponto de coleta e acesso ao Google Maps.

## Tecnologias utilizadas
> Node.JS

> Express.js

> Sequelize

> PostgreSQL

> Nodemon

> Postman

> Swagger

> Json Web Token

> Git Flow/GitHub

## Execução
Para executar o projeto de maneira correta, é necessário seguir alguns passos:

#### Criar documento do projeto
Selecione uma pasta de sua escolha, abra o terminal e use o código para instalar as dependências.
```terminal
npm init -y
```
Dê um nome ao seu projeto e acesse o VSCode.
Ou se desejar a praticidade, é só dar um Fork neste projeto utilizando o comando: git clone + url do projeto.

#### Instalando as bibliotecas
##### Nodemon
```terminal
npm install nodemon
```

##### Driver PostgreSQL
```terminal
npm install pg
```

##### Sequelize
```terminal
npm install sequelize
```
```terminal
npm install -g sequelize-cli
```
##### Dotenv
```terminal
npm install dotenv
```

##### JSON Web Token (JWT)
```terminal
npm install jsonwebtoken
```

##### axios
```terminal
npm install axios
```

##### Swagger UI & Swagger Autogen
```terminal
npm install swagger-ui-express
```
```terminal
npm install swagger-autogen
```

#### Carregar o servidor - NÃO ESQUECER!
No documento 'package.json', substituir os comandos por "start:dev": "nodemon src/index.js". Para ativar o servidor, digite no terminal:
```terminal
npm run start:dev
```

#### Migrations
##### Criar
```terminal
sequelize migration:generate --name nome_da_migracao
```
##### Rodar
```terminal
sequelize sequelize db:migrate
```
##### Reverter a última
```terminal
sequelize-cli db:migrate:undo
```
##### Reverter todas
```terminal
sequelize-cli db:migrate:undo:all
```

#### Requisições da API
Você pode realizar as requisições da API com os endpoints disponibilizados no código. Você pode utilizar:
> Postman (app)

> Swagger
Para utilizar o Swagger, é necessário gerar o documento swagger.json
```terminal
npm run swagger
```
Depois é só carregar o servidor e, no seu provedor da internet, utilizar:
```terminal
localhost:PORT_API/docs
```
O port_api é o que você está usando para carregar o servidor. Neste projeto foi utilizado o 3000.

#### Arquivo .env
Para esta aplicação, está disponibilizado um .env de exemplo, com as configurações que eu utilizei. Para manter o projeto íntegro, omiti apenas minha senha pessoal de acesso ao banco de dados. Para facilitar, mantive a palavra secreta aberta, a qual será alterada após a avaliação.

#### Feito isso, a aplicação funcionará normalmente!

![myImage](https://media.tenor.com/images/df37f4ad4d0599d7fe46e4e0a225c58d/tenor.gif)

## Melhorias
Algumas melhorias ainda precisam ser aplicadas:
- Utilizar outras APIs para obter melhores resultados na requisição da localização
- Refatoração do código

## Sobre
Este projeto foi desenvolvido como parte do programa Floripa Mais Tec - Futuro Dev [Turma Eco].
![myImage](https://floripamaistec.sesisenai.org.br/wp-content/uploads/sites/11/2023/08/logo-banner-w.png)
