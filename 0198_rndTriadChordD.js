import {rndDscale} from "./0147_rndDscale.js";
import {rndTriadChordQuality} from "./0160_rndTriadChordQuality.js";

export function rndTriadChordD(){

    return rndDscale() + rndTriadChordQuality();
}