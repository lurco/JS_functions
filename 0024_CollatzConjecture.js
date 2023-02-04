var hotpo = function(n){
    if(n == 0) return 0; //Optional Handler to n = 0
    let i = 0;
    let dummy = n;
    while(dummy !== 1){
      dummy = dummy % 2 ? 3 * dummy + 1 : dummy / 2;
      i ++;
    }
  return i;
}
