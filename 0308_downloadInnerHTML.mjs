function getHTML() {
    const PROXY_URL = 'https://justcors.com/tl_15b341c/'; // goal: circumvent CORS, changes daily at: https://justcors.com/
    const BASE_URL = 'https://apod.nasa.gov/apod/';

    return fetch(PROXY_URL + BASE_URL, {
        method: "GET",
        // mode: "no-cors",
        // cache: "no-cache",
        // credentials: "same-origin",
        // redirect: "follow",
        // referrerPolicy: "no-referrer-when-downgrade",
        headers: {
            "Content-Type": "text/html"
        }
    });
}

export function downloadInnerHTML() {
    getHTML().then((response) => response.text())
        .then((result) => {
            document.getElementById('body').innerHTML = result;
            console.log(result);
        });
}

window.dHTML = downloadInnerHTML;