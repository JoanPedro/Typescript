import { Router, Request, Response } from 'express';

interface Login {
  email: string | undefined,
  password: string | undefined
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

router.post('/login', (req: Request, res: Response): Response => {
  try {
    const { email, password }: Login = req.body;

    if(email && password && email === 'teste@teste.com' && password === 'password') {

      req.session = { loggedIn: true };
      res.redirect('/');
      return res.status(302);

    } else {
      return res.status(500).send({ msg: 'Invalid email or password' })
    }

  } catch (error) {
    return res.status(500).send(error)
  }
})

router.get('/', (req: Request, res: Response): Response => {
  if (req.session && req.session.loggedIn) {
    res.send(`
      <div>
        <div> You are logged in <div/>
        <a href="/logout">Logout</a>
      </div>
    `);
    return res.status(200);
  } else {
    res.send(`
    <div>
      <div> You are not logged in <div/>
      <a href="/login">Login</a>
    </div>
    `)
    return res.status(200);
  }
})

router.get('/logout', (req: Request, res: Response): Response => {
  req.session = null;
  res.redirect('/');
  return res.status(200);
})

export { router }