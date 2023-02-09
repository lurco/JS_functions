import {rndAbscale} from "./0156_rndAbscale.js";
import {rndTriadChordQuality} from "./0160_rndTriadChordQuality.js";

export function rndTriadChordAb(){
    return rndAbscale() + rndTriadChordQuality();
}