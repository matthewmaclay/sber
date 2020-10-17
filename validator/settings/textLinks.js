import fetch from 'node-fetch';

export default async function testLinks(array, forbiddenWords) {
    const promise = [];
    array.forEach((element,i) => {
        promise.push(new Promise(async(resolve, reject) => {
            const html = await fetch(element).then(res => res.text());
            const notValidWords = [];
            forbiddenWords.forEach(item => {
                const status = html.includes(item);
                if(status !== false) {
                    notValidWords.push(item);
                } 
            });
            resolve({ [element]: notValidWords })
        }))
    });
    return Promise.all(promise).then(res => {return res})
}