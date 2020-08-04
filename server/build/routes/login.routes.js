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
        if (!email) {
            return res.status(400).json({ msg: 'Email must be provided.' });
        }
        return res.send(email.toUpperCase());
    }
    catch (error) {
        return res.status(500).send(error);
    }
});
