module.exports = (sequelize, DataTypes) => {
  const Tool = sequelize.define(
    "Tool",
    {
      title: DataTypes.STRING,
      link: DataTypes.STRING,
      description: DataTypes.TEXT
    },

    {
      schema: "public",
      tableName: "tool"
    }
  );

  Tool.associate = models => {
    Tool.belongsToMany(models.Tag, {
      through: "tool_x_tag",
      foreignKey: "tool_id",
      as: "tags"
    });
  };

  return Tool;
};
