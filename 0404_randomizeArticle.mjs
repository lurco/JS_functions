import {permuteArray} from "./0220_permuteArray.mjs";

export function randomizeArticle(article){
    return permuteArray(article.split('\n')).join('\n');
}
