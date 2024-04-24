import express from 'express';
import authService from '../services/authService.js';
const router = express.Router();
/* login routes */
router.get('login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await authService.login(username, password);
    if (!user) {
      return res.status(404).json({ status: false, error: 'User not found' });
    }
    res.status(200).json({ status: true, user });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

/* Register route with validation */
router.post('/register', async (req, res) => {
  try {
    const newUser = await authService.register(req.body.username, req.body.password);
    res.status(201).json({ status: true, user: newUser });
  } catch (error) {
    console.log("error is",error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
