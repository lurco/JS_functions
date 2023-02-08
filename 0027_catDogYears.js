export var humanYearsCatYearsDogYears = function(humanYears) {

  const result = [humanYears, 0, 0];

  for(let i = 0; i < humanYears; i++){
    if(i === 0){
      result[1] += 15;
      result[2] += 15;
    } else if(i === 1){
      result[1] += 9;
      result[2] += 9;
    } else{
      result[1] += 4;
      result[2] += 5;
    }
  }

  return result;
}

