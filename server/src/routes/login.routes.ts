import { Router, Request, Response, NextFunction } from 'express';

interface Login {
  email: string | undefined,
  password: string | undefined
}

const requireAuth = (req: Request, res: Response, next: NextFunction): void => {
  if(!req.session || !req.session.loggedIn) {
    res.status(403).send({ msg: 'Not permited.'});
    return;
  }

  next();
  return;
}

const router = Router();

router.get('/login', (req: Request, res: Response): Response => {
  return res.send(
    `
      <form method="POST">
        <div>
          <label> Email </label>
          <input name="email" />
        </div>
        <div>
          <label> Password </label>
          <input name="password" type="password" />
        </div>
        <button> Submit </button>
      </form>
    `
  )
})

router.post('/login', (req: Request, res: Response): void => {
  try {
    const { email, password }: Login = req.body;

    if(email && password && email === 'teste@teste.com' && password === 'password') {

      req.session = { loggedIn: true };
      return res.status(302).redirect('/');

    } else {
      res.status(400).send({ msg: 'Invalid email or password.' });
      return;
    }

  } catch (error) {
    res.status(500).send({ msg: 'Internal server error.' });
    return;
  }
})

router.get('/', (req: Request, res: Response): Response => {
  try {
    if (!req.session || !req.session.loggedIn) {
      return res.status(200).send(`
      <div>
        <div> You are not logged in <div/>
        <a href="/login">Login</a>
      </div>
      `) 
    }
    
    return res.status(200).send(`
      <div>
        <div> You are logged in <div/>
        <a href="/logout">Logout</a>
      </div>
    `);

  } catch (error) {
    return res.status(500).send({ msg: 'Internal server error.'})
  }
})

router.get('/logout', (req: Request, res: Response): void => {
  req.session = null;
  return res.redirect('/');
})

router.get('/protected', requireAuth, (req: Request, res: Response): Response => {
  return res.send({ msg: 'Welcome to protected route, logged user' })
})
export { router }