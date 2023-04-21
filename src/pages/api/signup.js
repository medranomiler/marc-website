import jwt from 'jsonwebtoken';
import { hash } from 'bcrypt';
import Admin from "../../models/Admin"
import connectMongo from '../../lib/connectMongo';

async function signup(req, res) {
  const { username, password } = req.body;
  
  try {
    console.log(username, password)
    const hashedPassword = await hash(password, 10);
    const newUser = await createAdmin(username, hashedPassword);

    const token = jwt.sign({ username: newUser.username }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(200)
    .json({ token });
  } catch (error) {
    console.error(error);
    res.status(500)
    .json({ message: 'Server error' });
  }

  async function createAdmin(username, password) {
    try {

      await connectMongo()

      const newAdmin = new Admin({
        username,
        password
      });
      const savedAdmin = await newAdmin.save();
      return savedAdmin;
    } catch (error) {
      console.error(error);
      throw new Error('Error creating user');
    }
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

export default signup;
