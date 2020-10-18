import fetch from 'node-fetch';
import getUrls from 'get-urls';

export default async function testLinks(id) {
    const result = await fetch(`https://admin.digitalscale.dokub.xyz/lessons/${id}`).then(
        res => res.json()).then(res=> { return res.content });
    const forbiddenWords = await fetch('https://admin.digitalscale.dokub.xyz/prohibited-words').then(
        res => res.json()).then(res => { return res} );

    if(result !== null) {
        const getLinks = getUrls(result);
        const arrayLinks = [];
        if(arrayLinks.length > 0) {
                getLinks.forEach(item => {
                    arrayLinks.push(item)
                })

                const promise = [];
                arrayLinks.forEach((element,i) => {
                    promise.push(new Promise(async(resolve, reject) => {
                        const html = await fetch(element).then(res => res.text());
                        const notValidWords = [];
                        forbiddenWords.forEach(({ word }) => {
                            const status = html.includes(word);
                            if(status !== false) {
                                notValidWords.push(word);
                            } 
                        });
                        resolve({ [element]: notValidWords })
                    }))
                });
                return Promise.all(promise).then(res => {return res})
        }
   } else {
       return 
   }
}