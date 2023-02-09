import {rndCbscale} from "./0159_rndCbscale.js";
import {rndTriadChordQuality} from "./0160_rndTriadChordQuality.js";

export function rndTriadChordCb(){
    return rndCbscale() + rndTriadChordQuality();
}