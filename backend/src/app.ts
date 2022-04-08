import express, { Application, Request, Response } from 'express';
import * as path from "path";
//register modules
import index from './routes/index';

const app: Application = express();

// view engine setup
app.set('view engine', 'ejs');

app.use(express.json({
    limit: '50mb',
}));

app.use(express.urlencoded({
    parameterLimit: 100000,
    limit: '50mb',
    extended: true
}));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


//set public dir
app.use('/assets', express.static(path.join(__dirname, '..', 'public')));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/', index);

// catch 404
app.use((req: Request, res: Response) => {
    if (req.statusCode != null) {
        res.status(req.statusCode);
    } else {
        res.status(404);
    }
    res.render('error', {err: res.statusCode});

});


export default app;
