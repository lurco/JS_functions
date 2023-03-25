import {rndEscale} from "./0149_rndEscale.js";
import {rndTriadChordQuality} from "./0160_rndTriadChordQuality.js";

export function rndTriadChordE(){
    return rndEscale() + rndTriadChordQuality();
}