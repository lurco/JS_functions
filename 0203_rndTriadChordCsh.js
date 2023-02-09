import {rndCshScale} from "./0152_rndCshScale.js";
import {rndTriadChordQuality} from "./0160_rndTriadChordQuality.js";

export function rndTriadChordCsh(){
    return rndCshScale() + rndTriadChordQuality();
}