import {rndAscale} from "./0148_rndAscale.js";
import {rndTriadChordQuality} from "./0160_rndTriadChordQuality.js";

export function rndTriadChordA(){
    return rndAscale() + rndTriadChordQuality();
}