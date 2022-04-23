import express from "express";
import mongoose from "mongoose";
import '../../server/models/user.js';
import bcryptjs from 'bcryptjs';

const router = express.Router();
const User = mongoose.model("User");

router.get('/', (req, res) => {
    res.send("Hello")
});

router.post('/signup', (req, res) => {
    const { name, email, password } = req.body;
    if (!email || !name || !password) {
        return res.status(422).json({ error: "Please add all details" })
    }
    User.findOne({ email: email })
        .then((savedUseer) => {
            if (savedUseer) {
                return res.status(422).json({ error: "Email exists" })
            }
            bcryptjs.hash(password, 12)
                .then(hashedpassword => {
                    const user = new User({
                        email:email,
                        password:hashedpassword,
                        name:name
                    })
                    user.save()
                        .then(user => {
                            res.json({ message: "saved successfully" })
                        })
                        .catch(err => {
                            console.log(err)
                        })
                })

        })
        .catch(err => {
            console.log(err)
        })
});

export default router;


