import {rndGscale} from "./0146_rndGscale.js";
import {rndTriadChordQuality} from "./0160_rndTriadChordQuality.js";

export function rndTriadChordG(){

    return rndGscale() + rndTriadChordQuality();
}