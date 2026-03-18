"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', (_, res) => {
    return res.send('olá dev');
});
router.post('/teste', (req, res) => {
    console.log(req);
    return res.json(req.body);
});
