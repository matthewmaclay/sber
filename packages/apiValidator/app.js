import express from 'express';
const app = express();
import cors from 'cors';
import bodyParser from 'body-parser';
import testLinks from './settings/textLinks';
import testPlagiat from './settings/textPlagiat';

app.use(cors())
app.use(bodyParser.json());

app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header('Content-Type', 'application/json');
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.post('/checkUnic', async (req, res) => {
    try{
        const result = await testLinks(req.body.array, req.body.forbiddenWords)
        res.status(200).send(result)
    } catch(e) {
        console.log(e)
        res.status(500).send(e)
    }
});

app.post('/textPlagiat', async (req, res) => {
    try{
        const result = await testPlagiat(req.body.text)
        res.status(200).send(result)
    } catch(e) {
        console.log(e)
        res.status(500).send(e)
    }
});

app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:3000`)
})