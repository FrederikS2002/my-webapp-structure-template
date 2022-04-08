import express, { Request, Response, Router } from "express";

const router: Router = express.Router();

/* GET home page. */

router.get('/test', (req: Request, res: Response) => {
    res.send('index');
})


export default router;
