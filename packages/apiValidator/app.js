import express from 'express';
const app = express();
import cors from 'cors';
import bodyParser from 'body-parser';
import testLinks from './settings/textLinks';
import testPlagiat from './settings/textPlagiat';
import textReadability from './settings/textReadability';
import fetch from 'node-fetch';

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
        const result = await testLinks(req.body.id);
        if(result !== null) {
            const addLinks = {
                links: {
                    result
                }
            };
            const requestOptionsForPut = {
                method: 'PUT',
                body: JSON.stringify(addLinks)
            };
            const status = await fetch(`https://admin.digitalscale.dokub.xyz/lessons/${req.body.id}`, requestOptionsForPut)
                .then(respons => {return respons.status } );
            res.status(status).send("OK")
        }
        res.status(500).send("Null")
    } catch(e) {
        console.log(e)
        res.status(500).send(e)
    }
});

app.post('/textPlagiat', async (req, res) => {
    try{
        const result = await testPlagiat(req.body.id)
        res.status(result).send('OK')
    } catch(e) {
        console.log(e)
        res.status(500).send(e)
    }
});

app.post('/textReadability', async (req, res) => {
    try{
        const result = await textReadability(req.body.id);
        res.status(result).send('OK')
    } catch(e) {
        console.log(e)
        res.status(500).send(e)
    }
});

app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:3000`)
})