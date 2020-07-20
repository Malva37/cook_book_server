const db = require("../models");
const Recipe = db.recipes;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({
            message: "content can't be empty"
        });
        return;
    }

    const recipe = {
        parentRecipeId: req.body.parentRecipeId,
        nameRecipe: req.body.nameRecipe,
        createdDate:req.body.createdDate,
        description: req.body.description,
      };
    
 
      Recipe.create(recipe)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Recipe."
          });
        });
};

exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    Tutorial.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
};

exports.findOne = (req, res) => {

};

exports.update = (req, res) => {

};

exports.findAllPublished = (req, res) => {

}