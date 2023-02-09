import {rndEbscale} from "./0155_rndEbscale.js";
import {rndTriadChordQuality} from "./0160_rndTriadChordQuality.js";

export function rndTriadChordEb(){
    return rndEbscale() + rndTriadChordQuality();
}