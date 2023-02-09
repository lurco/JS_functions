import {rndBbscale} from "./0154_rndBbscale.js";
import {rndTriadChordQuality} from "./0160_rndTriadChordQuality.js";

export function rndTriadChordBb(){
    return rndBbscale() + rndTriadChordQuality();
}