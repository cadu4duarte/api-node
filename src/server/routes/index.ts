import { Router } from "express";

const router = Router();

router.get('/', (_, res) => {
    return res.send('olá dev');
});

router.post('/teste', (req, res) => {
    console.log(req)

    return res.json(req.body);
});

export { router } 