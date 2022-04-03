import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
    res.send("Hello")
});

router.post('/signup', (req, res) => {
    res.send("Hello SIGUP")
});

export default  router;


