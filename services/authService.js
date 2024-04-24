import User from '../models/user.js';

  const login =  async (username, password) => {
    try {
      const user = await User.findOne({ where: { username } });
      if (!user || !user.authenticate(password)) {
        return null;
      }
      return user; 
    } catch (error) {
      throw error;
    }
  }

  const register =  async (username, password) => {
    try {
      const newUser = await User.create({ username, password });
      return newUser;
    } catch (error) {
      throw error;
    }
  }

  export default {
    login,
    register
  };