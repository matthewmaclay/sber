import fetch from 'node-fetch';
import FormData from 'form-data';
import htmlToText from 'html-to-text';

export default async function textReadability(id) {

    const getTaskText = await fetch(`https://admin.digitalscale.dokub.xyz/lessons/${id}`).then(
        res => res.json()).then(res=> { return res.content })

    const testingText = htmlToText.fromString(getTaskText, {
        wordwrap: 80
    });
    console.log(testingText)
    var formdata = new FormData();
    formdata.append("text", testingText);

    var requestOptions = {
        method: 'POST',
        body: formdata,
    };

    const readability = await fetch("http://api.plainrussian.ru/api/1.0/ru/measure/", requestOptions)
        .then(response => response.json())
        .then(res => { return res })
        .catch(error => console.log('error', error));

    const doneReq = {
        readability: {
            readability
        }
    }

    const requestOptionsForPut = {
        method: 'PUT',
        body: JSON.stringify(doneReq)
    };
        
    const ansver = await fetch(`https://admin.digitalscale.dokub.xyz/lessons/${id}`, requestOptionsForPut)
        .then(res => {return res.status });
    
    return ansver
}