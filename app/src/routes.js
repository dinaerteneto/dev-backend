const routes = require('express').Router();

const ToolController = require("./app/controllers/ToolController");

/**
 * @swagger
 * /tools:
 *  post:
 *    description: Usado para adicionar ferramenta
 *    parameters: 
 *       - name: title
 *         in: query
 *         description: nome da ferramenta
 *         required: true
 *         schema:
 *           type: string
 *           format: string
 *       - name: link
 *         in: query
 *         description: link do repositório
 *         required: true
 *         schema:
 *           type: string
 *           format: string
 *       - name: description
 *         in: query
 *         description: descrição da ferramenta
 *         required: false
 *         schema:
 *           type: string
 *           format: string
 *       - name: tags
 *         in: query
 *         description: conjunto de palavras que lembram esta ferramenta
 *         required: false
 *         schema:
 *           type: array
 *           format: string
 *    responses:
 *      '201':
 *        description: A successful response
 */
routes.post('/tools', ToolController.create);
routes.get('/tools', ToolController.all);
routes.delete('/tools/:id', ToolController.delete);


module.exports = routes;