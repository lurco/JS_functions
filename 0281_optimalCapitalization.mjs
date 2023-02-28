function solve(s){
    return Array.from(s.matchAll(/[A-Z]/g)).length > s.length / 2 ? s.toUpperCase() : s.toLowerCase();
}
