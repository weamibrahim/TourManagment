const User = require('../Models/User');


const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { RegistrationSchema ,LoginSchema} = require('../middleware/validation');

const userController = {};
userController.register = async (req, res, next) => {
    try {
      const { name, email, password,role } = req.body;
      const user = req.body
  
      const { error } = RegistrationSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
      //console.log('accessTokenSecret:', accessTokenSecret);
      console.log( user);
      console.log('req.body:', req.body);
  
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(409).json({ message: 'User with this email already exists' });
      }
      
    
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log('Hashed Password:', hashedPassword);
  
    
    
      const newUser = new User({
        name,
        email,
        role,
        password: hashedPassword,
     
     
        
      });
  
      console.log('New User:', newUser);
  
      const savedUser = await newUser.save();
      console.log('Saved User:', savedUser);
      //const accessToken = jwt.sign({ userId: savedUser._id },  accessTokenSecret);
  
      res.status(201).json({ message: 'User created successfully', user: savedUser});
    } catch (err) {
      console.error('Error hashing password:', err);
      next(err);
    }
  };
  
  userController.login = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const { error} = LoginSchema.validate(req.body);
      if (error) {
        return res.status(400).json({ message: error.details[0].message });
      }
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: 'Invalid email' });
      }
      console.log (user);
  
      // Check if password is correct
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ message: 'Invalid  password' });
      }
  
      // Generate access token
      const accessToken = jwt.sign({ userId: user._id,role: user.role }, process.env.ACCESS_TOKEN_SECRET);
      console.log (accessToken);
      
  
      res.status(200).json({ status: 'success', message: 'Logged in successfully', accessToken,user });
    } catch (err) {
      next(err);
    }
  };
userController.updateUserById = async (req, res, next) => {
  try {
      const { id } = req.params;
      const { name, email, password, role
      } = req.body;
      console.log(req.body);

      const user = await User.findByIdAndUpdate(id,{name,email,password},{ new: true });
      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }

      

      res.status(200).json({ message: 'User updated successfully', user });
  } catch (err) {
      next(err);
  }
};

  userController.getAllUsers = async (req, res, next) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (err) {
      next(err);
    }
  };
  
  // get all users for dashboard

  
  // userController.getUserById = async (req, res, next) => {
  //   try {
  //     const { id } = req.params;
  //     const user = await User.findById(id);
  //     if (!user) {
  //       return res.status(404).json({ message: 'User not found' });
  //     }
  //     res.status(200).json(user);
  //   } catch (err) {
  //     next(err);
  //   }
  // };
  
  
  
 
  
  
  userController.deleteUserById = async (req, res, next) => {
    try {
      const { id } = req.params;
  
      // Find user by ID and delete
      const deletedUser = await User.findByIdAndDelete(id);
      if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.status(200).json({ message: 'User deleted successfully', user: deletedUser });
    } catch (err) {
      next(err);
    }
  };
  
  
  
module.exports = userController;