import {rndBscale} from "./0150_rndBscale.js";
import {rndTriadChordQuality} from "./0160_rndTriadChordQuality.js";

export function rndTriadChordB(){
    return rndBscale() + rndTriadChordQuality();
}