const { Tool, Tag } = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

class ToolController {
  async create(req, res) {
    const { tags, ...data } = req.body;
    const tool = await Tool.create(data);
    let newTags = [];

    if (tags && tags.length > 0) {
      let tagsPromisse = await tags.map(tag =>
        Tag.findOrCreate({ where: { name: tag } })
      );

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

  async all(req, res) {
    try{
      
      const tag = req.query.tag !== undefined ? req.query.tag : "";
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
            required:false,
            attributes: ["name"]
          }
        ]
      });

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
