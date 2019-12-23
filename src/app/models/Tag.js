module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define(
    "Tag",
    {
      name: DataTypes.STRING
    },

    {
      schema: "public",
      tableName: "tag"
    }
  );

  Tag.associate = models => {
    Tag.belongsToMany(models.Tool, {
      through: "tool_x_tag",
      foreignKey: "tag_id",
      as: "tools"
    });
  };

  return Tag;
};
