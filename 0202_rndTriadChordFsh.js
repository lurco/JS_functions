import {rndFshScale} from "./0151_rndFshScale.js";
import {rndTriadChordQuality} from "./0160_rndTriadChordQuality.js";

export function rndTriadChordFsh(){
    return rndFshScale() + rndTriadChordQuality();
}