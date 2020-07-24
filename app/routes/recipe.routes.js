module.exports = app => {
    const recipes = require("../controllers/recipe.controller.js");
  
    var router = require("express").Router();

    router.post("/", recipes.create);
  
    router.get("/:parentId", recipes.findAll);
    
    router.put("/", recipes.update);
  
    app.use('/', router);
  };