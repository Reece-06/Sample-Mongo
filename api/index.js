import express from 'express';
import pkg from 'body-parser';
const { urlencoded, json } = pkg;
import { connect } from 'mongoose';
import cors from 'cors';
// Import User model
import User from './models/user.js';

const app = express();
const port = 3000;

app.use(cors());

app.use(urlencoded({extended: false}));
app.use(json());

connect(
    'mongodb+srv://reecedepadua:12345@cluster0.wwjahrf.mongodb.net/sample?retryWrites=true&w=majority&appName=Cluster0',
  )
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(error => {
    console.log('Error connecting to MongoDb', error);
  });


// API endpoint to fetch user data
app.get('/api/user', async (req, res) => {
  try {
    const user = await User.findOne({}); // Fetch a user from the database
    console.log("This is user1: ", user);
    res.json(user); // Send the users data as JSON response
  } catch (error) {
    console.log('Error fetching users', error);
    res.status(500).json({error: 'Error fetching user'});
  }
});

app.listen(port, () => {
  console.log('Server is running on Port 3000');
});
