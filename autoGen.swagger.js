const swaggerAutogen = require('swagger-autogen')()

const doc = {
    info: {
        title: "API Floripa Mais Reciclagem",
        description: "Documentação da API F+R usando Express, Sequelize, PostgreSQL e Swagger",
        version: "1.0.0"
    },
    host: "localhost:3000",
    security: [{"apiKeyAuth":[]}],
    securityDefinitions: {
        apiKeyAuth: {
            type: "apiKey",
            name: "Authorization",
            in: "header",
            description: "Chave de API para autenticação. Insira o token JWT."
        }
    }
}

const outputFile = "./src/routes/doc.swagger.json";
const routes = ["./src/routes/routes.js"]

swaggerAutogen(outputFile, routes, doc)