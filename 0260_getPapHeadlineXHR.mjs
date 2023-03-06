export function getPapHeadlineXHR() {
    const xhr = new XMLHttpRequest();
    const result = [];

    xhr.open('GET', 'https://www.pap.pl/');
    xhr.responseType = 'document';
    xhr.send();

    xhr.onload = () => {
        const doc = xhr.response;
        const hdls = doc.getElementsByClassName("title");
        for (let tag of hdls) {
            result.push(tag.innerText.trim());
        }
        console.log(result);
    };

}

// window.getPapHeadlineXHR = getPapHeadlineXHR;