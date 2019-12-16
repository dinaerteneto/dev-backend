'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tool_x_tag', {
      tool_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull:false,
        references: {
          model: 'tool',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'        
      },
      tag_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull:false,
        references: {
          model: 'tag',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'        
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tool_x_tag');
  }
};
