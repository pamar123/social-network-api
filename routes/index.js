const mainRouter = require('express').Router();
const apiRoutes = require('./api');

mainRouter.use('/api', apiRoutes);

mainRouter.use((req, res) => {
  res.status(404).send('404 Error!');
});

module.exports = mainRouter;
