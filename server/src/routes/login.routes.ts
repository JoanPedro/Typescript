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

    if(!email) {
      return res.status(400).json({ msg: 'Email must be provided.'})
    }

    return res.send(email.toUpperCase())

  } catch (error) {
    return res.status(500).send(error)
  }
})

export { router }