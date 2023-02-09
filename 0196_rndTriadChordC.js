import {rndWhitekey} from "./0145_randomWhitekey.js";
import {rndTriadChordQuality} from "./0160_rndTriadChordQuality.js";

export function rndTriadChordC(){

    return rndWhitekey() + rndTriadChordQuality();
}