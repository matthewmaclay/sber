import FormData from 'form-data';
import fetch from 'node-fetch';

export default async function textPlagiat(text) {
    var form = new FormData();
    form.append("key", "WTiYXkHwDlmsLck");
    form.append("text", text);

    const requestOptions = {
        method: 'POST',
        body: form
    };

    const result = await fetch("https://content-watch.ru/public/api/", requestOptions)
        .then(response => response.text()).then(res => { return res });

    const json = JSON.parse(result)

    const formingResponse = {
        uniqueness: json.percent,
        coincidences: json.matches
    }

    return formingResponse
}