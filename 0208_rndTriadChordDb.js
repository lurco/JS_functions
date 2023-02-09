import {rndDbscale} from "./0157_rndDbscale.js";
import {rndTriadChordQuality} from "./0160_rndTriadChordQuality.js";

export function rndTriadChordDb(){
    return rndDbscale() + rndTriadChordQuality();
}