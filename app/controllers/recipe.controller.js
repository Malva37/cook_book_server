const db = require("../models");
const Recipe = db.recipes;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  console.log(req.body);
  const recipe = {
    parentId: req.body.parentId,
    name: req.body.name,
    description: req.body.description,
  };
  console.log(recipe);

  Recipe.create(recipe)
    .then(data => {
      res.send(data);
      console.log(recipe);

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
      where: condition,
      order: [
        ['name', 'ASC'],
        ['description', 'ASC'],

      ],
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
  console.log("on update");
  const id = req.body.id;
  console.log(req.body);

  Recipe.update(req.body, {
      where: {
        id: id
      }
    })
    .then(() => {
      return Recipe.findByPk(id)
        .then(data => {
          console.log(data.dataValues);
          res.send(data.dataValues);
        })
    })
    .catch(err => {
      console.error(err);
      res.status(500).send({
        message: `Cannot update Recipe with id=${id}`
      });
    });
}