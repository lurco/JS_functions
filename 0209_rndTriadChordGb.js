import {rndGbscale} from "./0158_rndGbscale.js";
import {rndTriadChordQuality} from "./0160_rndTriadChordQuality.js";

export function rndTriadChordGb(){
    return rndGbscale() + rndTriadChordQuality();
}