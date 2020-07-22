const db = require("../models");
const Recipe = db.recipes;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.name) {
    res.status(400).send({
      message: "content can't be empty"
    });
    return;
  }

  const recipe = {
    parentRecipeId: req.body.parentId,
    nameRecipe: req.body.name,
    createdDate: req.body.createdDate,
    description: req.body.description,
  };


  Recipe.create(recipe)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error while creating the Recipe."
      });
    });
};

exports.findAll = (req, res) => {
  const parentId = req.query.parentId;
  let condition = parentId ? {
    parentId: {
      [Op.eq]: parentId
    }
  } : {
    parentId: {
      [Op.eq]: null
    }
  };

  Recipe.findAll({
      where: condition
    })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Recipe.update(req.body, {
      where: {
        id: id
      }
    })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Recipe was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Recipe with id=${id}. Maybe Recipe was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Recipe with id=" + id
      });
    });
}