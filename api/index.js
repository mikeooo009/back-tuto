const express = require('express');
const app = express();
app.use(express.json())
const cors = require("cors");
app.use(cors())
require('dotenv').config();
const mongoose = require("mongoose");
 

mongoose
    .connect(process.env.DB, {

    })
const UserModel = require('./models/Users');

app.get('/users', async (req, res) => {
    const users = await UserModel.find();
    res.json(users)
})


app.post('/createUser', async (req, res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user)
})


app.listen("3001", () => {

    console.log("server works good!!");

})