module.exports = (sequelize, Sequelize) => {
    const Recipe = sequelize.define("recipes", {
        recipeId: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        parentRecipeId: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        nameRecipe: {
            type: Sequelize.STRING,
            allowNull: false
        },
        createdDate: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        timestamps: false
    });
    return Recipe;
};