import * as express from 'express';

class Server {
  public app: express.Application;

  constructor() {
    const app: express.Application = express();
    this.app = app;
  }

  private setRoute() {
    this.app.use();
  }

  private setMiddleware() {
    //* logging middleware
    this.app.use((req, res, next) => {
      console.log(req.rawHeaders[1]);
      console.log('this is logging middleware');
      next();
    });

    //* json middleware
    this.app.use(express.json());

    this.setRoute();

    //* 404 middleware
    this.app.use((req, res, next) => {
      console.log('this is error middleware');
      res.send({ error: '404 not found error' });
    });
  }

  public listen() {
    this.setMiddleware();
    this.app.listen(3000, () => {
      console.log('server is on...');
    });
  }
}

function init() {
  const server = new Server();
  server.listen();
}

init();