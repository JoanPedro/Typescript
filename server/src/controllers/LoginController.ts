import { Router, Request, Response, NextFunction } from 'express';

interface Login {
  email: string | undefined,
  password: string | undefined
}

@controller('/')
class LoginController {
  @get('/login')
  getLogin = (req: Request, res: Response): Response => {
      return res.send(`
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
  }
}