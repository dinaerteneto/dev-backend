const { Tool, Tag } = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

class ToolController {

  /**
   * Create
   * Resquest body: title, link, description, tags
   * Adiciona um registro em tool
   */
  async create(req, res) {
    const { tags, ...data } = req.body;
    const tool = await Tool.create(data);
    let newTags = [];

    if (tags && tags.length > 0) {
      // adiona as tags na tabela se existir
      let tagsPromisse = await tags.map(tag =>
        Tag.findOrCreate({ where: { name: tag } })
      );
      // sincroniza as tags ao registro da tabela tool
      Promise.all(tagsPromisse).then(records => {
        records.map(rec => newTags.push(rec[0].get("id")));
        tool.setTags(newTags);
      });
    }

    if (!tool) {
      return res
        .status(500)
        .json({ message: "Error trying to include registry." });
    }

    return res.status(201).json({ tool, tags });
  }

  /**
   * All
   * Resquest query: tag
   * Retorna todos os registro de tool, ou faz busca pela tag quando fornecida
   */  
  async all(req, res) {
    try{
      let required = true;
      let tag = req.query.tag;

      // caso seja enviado o parametro tags, então irá trazer somente
      // os registros que possuem a tag
      if(tag === undefined) {
        tag = "";
        required = false;
      }

      const tools = await Tool.findAll({
        include: [
          {
            model: Tag,
            as: "tags",
            through: { attributes: [] },
            where: {
              name: {
                [Op.like]: `%${tag}%`
              },
            },
            required: required,
            attributes: ["name"]
          }
        ]
      });

      // tratamento necessário para que as tags retornem
      // com o formato de array de valores e não um array de objetos
      const ret = [];
      tools.forEach((tool) => {
        const { tags } = tool;
        const parsedTags = tags.map(tag => tag.name);
        const parsedTool = tool.dataValues;
        parsedTool.tags = parsedTags;
        ret.push(parsedTool); 
      });

      return res.json(ret);
    } catch(err) {
      return res
        .status(500)
        .json({ message: err.message });      
    }
    
  }

  /**
   * Delete
   * Faz a deleção de um registro de tool
   * Route params: id
   */
  async delete(req, res) {
    const id = req.params.id;
    const record = await Tool.destroy({ where: { id } });

    if (!record) {
      return res
        .status(500)
        .json({ message: "Error trying to delete record." });
    }

    return res.json();
  }
}

module.exports = new ToolController();
