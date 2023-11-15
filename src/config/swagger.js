import swaggerJSDoc from "swagger-jsdoc";

const swaggerOptions = {
definition: {
    openapi: '3.0.0',
    info: {
     title: 'MVP IntechMom',
     version: '2.0.0',
    },
 },
servers:[
    {
        url: "http://localhost:3000"
    }
],
apis: [
    'app.js',
    "./src/api/users/documentation/documentation.js",
    "./src/api/assignment/documentation/documentation.js"
]}


export const openApiSpecification = swaggerJSDoc (swaggerOptions);