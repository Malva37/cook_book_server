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
            console.log(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error while creating the Recipe."
            });
        });
};

exports.findAll = (req, res) => {
    const name = req.query.name;
    let condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
  // console.log('i am there');
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

exports.findOne = (req, res) => {
    const id = req.params.id;
console.log(id);
    Recipe.findByPk(id)
      .then(data => {
      })
      .catch(err => {
        res.status(500).send({
          message: "Error Recipe with id=" + id
        });
      });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Recipe.update(req.body, {
      where: { id: id }
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
};

exports.findAllPublished = (req, res) => {
    Recipe.findAll({ where: { createdDate: !null } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error while retrieving recipes."
      });
    });
}