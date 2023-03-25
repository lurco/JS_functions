import {dateUntilTodayToYYYYMMDD} from "./0312_dateUntilTodayToYYYYMMDD.mjs";

export function getApodUsingApi(day = 0){ // 0 (default) - today, 1 - yesterday etc.
    const BASE_URL = 'https://api.nasa.gov/planetary/apod';
    const API_KEY = 'DEMO_KEY';
    const START_DATE_QUERY = dateUntilTodayToYYYYMMDD(day);
    const END_DATE_QUERY = dateUntilTodayToYYYYMMDD();


    const controller = new AbortController();
    const signal  = controller.signal;
    const timeout = 10000;

    try {
        fetch(`${BASE_URL}?api_key=${API_KEY}&start_date=${START_DATE_QUERY}&end_date=${END_DATE_QUERY}`, {
            method: "GET",
            signal: AbortSignal.timeout(timeout),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((response) => response.json())
            .then((response) => {
                for (let pic of response) {
                    console.log(pic['url'])
                }
            })
            .catch(error => console.log);
    } catch (error){
        if(error.name === 'TimeoutError'){
            console.log(`Timed-out: fetch took over ${timeout / 1000} seconds...`);
        } else if(err.name === 'AbortError'){
            console.log('User aborted this request')
        } else if(err.name === 'TypeError'){
            console.log('AbortSignal.timeout() method is not supported')
        } else {
            console.log('Whoops... something happened, the ring did not intend... ' + `${error.name}: ${error.message}`);
        }
    }
}

getApodUsingApi(1)