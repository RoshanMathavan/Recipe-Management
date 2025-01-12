const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

// Get all recipes
router.get('/', recipeController.getAllRecipes);

// Get single recipe
router.get('/:id', recipeController.getRecipe);

// Create new recipe
router.post('/', recipeController.createRecipe);

// Update recipe
router.put('/:id', recipeController.updateRecipe);

// Delete recipe
router.delete('/:id', recipeController.deleteRecipe);

module.exports = router;