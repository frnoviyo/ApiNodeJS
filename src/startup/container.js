const { createContainer, asClass, asFunction, asValue } = require('awilix');

//consfig
const config = require('../config');
const app = require('.') //llama al archivo index.js

//Services
const { HomeService } = require('../services');

//Controllers
const { HomeController } = require('../controllers');

//Routes
const { HomeRoutes } = require('../routes/index.routes')
const Routes = require('../routes');

//Models
const { User, Idea, Comment} = require('../models');

//Repositories
const { UserRepository, IdeaRepository, CommentRepository} = require('../repositories');

//Services
const { UserService, IdeaService, CommentService } = require('../services');

const container = createContainer();

container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config)
  })
  .register({
    HomeService: asClass(HomeService).singleton(),
    UserService: asClass(UserService).singleton(),
    IdeaService: asClass(IdeaService).singleton(),
    CommentService: asClass(CommentService).singleton()
  }).register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton()
  }).register({
    HomeRoutes: asFunction(HomeRoutes).singleton()
  }).register({
    User: asValue(User),
    Ieda: asValue(Idea),
    Comment: asValue(Comment)
  }).register({
    UserRepository: asClass(UserRepository).singleton(),
    IdeaRepository: asClass(IdeaRepository).singleton(),
    CommentRepository: asClass(CommentRepository).singleton()
  });

module.exports = container;