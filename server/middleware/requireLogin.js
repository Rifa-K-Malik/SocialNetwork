import jwt from 'jsonwebtoken';
import { SecrateValues } from "../keys.js";
import mongoose from "mongoose";
import '../../server/models/user.js';

export const requireLogin = (req, res, next) => {
    const { authorization } = req.header;
    if (!authorization) {
        return res.status(401).json({ error: "You must be logged in!" })
    }
    const token = authorization.replace("Bearer", "")
    jwt.verify(token, SecrateValues, (err, payload) => {
        if (err) {
            return res.status(401).json({ error: "You must be logged in!" })
        }
        const { _id } = payload;
        User.findById(_id).then(userdata => {
            req.user = userdata;
        })
        next()
    })
}


