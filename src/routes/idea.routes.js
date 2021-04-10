const { Router } = require('express');
const { ParseIntMiddleware, AuthMiddleware } = require('../middlewares');

module.exports = function ({ IdeaController }) {
  const router = Router();

  router.get('/:ideaId', IdeaController.get);
  router.get('', [AuthMiddleware, ParseIntMiddleware],IdeaController.getAll);
  router.get('/:userId/all', IdeaController.getUserIdeas);
  router.post('', AuthMiddleware, IdeaController.create);
  router.patch('/:ideaId', AuthMiddleware, IdeaController.update);
  router.delete('/:ideaId', AuthMiddleware, IdeaController.delete);
  router.post('/:ideaId', AuthMiddleware, IdeaController.upvoteIdea);
  router.post('/:ideaId', AuthMiddleware, IdeaController.downvoteIdea);

  return router
};