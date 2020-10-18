import FormData from 'form-data';
import fetch from 'node-fetch';
import htmlToText from 'html-to-text';

export default async function textPlagiat(id) {

    const getTaskText = await fetch(`https://admin.digitalscale.dokub.xyz/lessons/${id}`).then(
        res => res.json()).then(res=> { return res.content })

    const testingText = htmlToText.fromString(getTaskText, {
        wordwrap: 80
    });

    const form = new FormData();
    form.append("key", "eCqRMHBqyp5IwBm");
    form.append("text", testingText);

    const requestOptions = {
        method: 'POST',
        body: form
    };

    const result = await fetch("https://content-watch.ru/public/api/", requestOptions)
        .then(response => response.text()).then(res => { return res });

    const json = JSON.parse(result)

    const formingResponse = {
        "uniq": {
            uniqueness: json.percent,
            coincidences: json.matches
        }
    }

    const requestOptionsForPut = {
        method: 'PUT',
        body: JSON.stringify(formingResponse)
    };
      
    const ansver = await fetch(`https://admin.digitalscale.dokub.xyz/lessons/${id}`, requestOptionsForPut)
        .then(res => {return res.status })

    return ansver
}