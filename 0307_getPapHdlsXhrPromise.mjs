export function getPapHdlsXhrPromise(){
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET','https://www.pap.pl/');
        xhr.responseType = 'document';
        xhr.send();
        xhr.onload = () => {
            const response = xhr.response;
            const hdls = Array.from(response.getElementsByClassName('title')).map((tag) => tag.innerText.trim());
            if(xhr.status !== 200){
                reject(xhr.status);
            }
            resolve(hdls);
        }
    })
}

window.gp = getPapHdlsXhrPromise;