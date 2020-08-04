"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const router = express_1.Router();
exports.router = router;
router.get('/login', (req, res) => {
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
    `);
});
router.post('/login', (req, res) => {
    try {
        const { email, password } = req.body;
        if (email && password && email === 'teste@teste.com' && password === 'password') {
            req.session = { loggedIn: true };
            res.redirect('/');
            return res.status(302);
        }
        else {
            return res.status(500).send({ msg: 'Invalid email or password' });
        }
    }
    catch (error) {
        return res.status(500).send(error);
    }
});
