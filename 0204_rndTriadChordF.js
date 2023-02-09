import {rndFscale} from "./0153_rndFscale.js";
import {rndTriadChordQuality} from "./0160_rndTriadChordQuality.js";

export function rndTriadChordF(){
    return rndFscale() + rndTriadChordQuality();
}