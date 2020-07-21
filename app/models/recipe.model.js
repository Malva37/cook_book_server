module.exports = (sequelize, Sequelize) => {
    const Recipe = sequelize.define("recipes", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        parentId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'recipes',
                key: 'id'
            },
            allowNull: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false
        },
        createdDate: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        timestamps: false
    });
    return Recipe;
};