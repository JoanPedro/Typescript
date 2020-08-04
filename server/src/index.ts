import express, { Request, Response, json, urlencoded } from 'express';
import { router } from './routes/login.routes';
import cookieSession from 'cookie-session';

const app = express();
app.use(json());
app.use(cookieSession({ keys: ['abcd'] }));
app.use(urlencoded({ extended: true }))
app.use(router);

app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});
