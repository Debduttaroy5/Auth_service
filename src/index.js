const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const apiRoutes = require('./routes/index');

const UserService = require('./services/user-service');

const app = express();

const prepareAndStartServer = () => {

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use('/api', apiRoutes);

  app.listen(PORT, async () => {
    console.log(`Server Started on Port: ${PORT}`);

    const service = new UserService();
    const newToken = service.createToken({ email: 'sanket@admin.com', id: 1 });
    console.log("new token is", newToken);
  });
};

prepareAndStartServer();