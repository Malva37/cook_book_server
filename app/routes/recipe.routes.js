module.exports = app => {
    const recipes = require("../controllers/recipe.controller.js");
  
    var router = require("express").Router();

    router.post("/", recipes.create);
  
    router.get("/:parentId", recipes.findAll);
  
    router.get("/:id", recipes.findOne);
  
    router.put("/:id", recipes.update);
  
    app.use('/', router);
  };