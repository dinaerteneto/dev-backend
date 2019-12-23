const routes = require('express').Router();

const ToolController = require("./app/controllers/ToolController");

/**
 * @swagger
 * /tools:
 *  post:
 *    description: adiciona ferramenta
 *    consumes: 
 *       - application/json
 *    parameters:
 *       - in: body
 *         name: tool
 *         description: Adiona ferramenta e suas tags.
 *         schema:
 *           type: object
 *           properties:
 *              title:
 *                type: string
 *                required: true
 *              link:
 *                type: string
 *                required: true
 *              description:
 *                type: string
 *              tags:
 *                type: array
 *                example: ['tag1', 'tag2', 'tag3']
 *    responses:
 *      '201':
 *        description: Created
 */
routes.post('/tools', ToolController.create);

/**
 * @swagger
 * /tools:
 *  get:
 *    description: Usado para listar todas as ferramentas
 *    parameters: 
 *       - name: tag
 *         in: query
 *         description: nome da tag 
 *         required: false
 *         schema:
 *           type: string
 *           format: string
 *    responses:
 *      '200':
 *        description: array de objetos de tool
 *        schema:
 *          type: array
 *          example: [
 *              {
 *                 id: 1,
 *                 title: "Notion",
 *                 link: "https://notion.so",
 *                 description: "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ",
 *                 tags: [
 *                    "organization",
 *                    "planning",
 *                    "collaboration"
 *                 ]
 *              },
 *              {
 *                 id: 2,
 *                 title: "json-server",
 *                 link: "https://github.com/typicode/json-server",
 *                 description: "Fake REST API based on a json schema.",
 *                 tags: [
 *                     "api",
 *                     "json",
 *                     "schema",
 *                     "node"
 *                 ]
 *             }
 *        ]
 *              
 *        
 */
routes.get('/tools', ToolController.all);

/**
 * @swagger
 * /tools/{id}:
 *  delete:
 *    description: Usado para excluir um registro da tabela, baseado em seu id
 *    parameters: 
 *       - name: id
 *         in: path
 *         description: id do registro que deseja excluir
 *         required: true
 *         schema:
 *           type: integer
 *           format: int
 *    responses:
 *      '204':
 *        description: No content.
 */
routes.delete('/tools/:id', ToolController.delete);


module.exports = routes;