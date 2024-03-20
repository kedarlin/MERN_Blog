import User from '../../models/newUser.js';

export async function getAllUsers(req, res) {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function createUser(req, res) {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function updateUser(req, res) {
  try {
    const { id } = req.params;
    const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function deleteUser(req, res) {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}