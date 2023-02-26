function timeCorrect(timestring) {
    if(!timestring){
        return timestring;
    } else if(!timestring.match(/\d\d:\d\d:\d\d/g)){
        return null;
    }

    let [ hrs, mins, secs ] = timestring.split(":").map((str) => parseInt(str));

    mins += Math.floor(secs / 60);
    secs = secs % 60;
    hrs += Math.floor(mins / 60);
    mins = mins % 60;
    hrs %= 24;

    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}
