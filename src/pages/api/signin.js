import jwt from 'jsonwebtoken';
import { compare } from 'bcrypt';
import Admin from "../../models/Admin"
import connectMongo from '../../lib/connectMongo';

async function signin(req, res) {
  const { username, password } = req.body;

  try {
    const admin = await getUserByUsername(username);
    if (!admin) {
      return res.status(401).json({ message: 'User does not exist' });
    }

    const passwordMatch = await compare(password, admin.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Password is incorrect' });
    }

    const token = jwt.sign({ username: admin.username }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }

  async function getUserByUsername(username) {
    try {
      await connectMongo()
      const admin = await Admin.findOne({ username });
      return admin;
    } catch (error) {
      console.error(error);
      throw new Error('Error getting user by username');
    }
  }
  
}

export default signin;
