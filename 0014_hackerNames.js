export function aliasGen(firstname, lastname){
  if(firstname[0].toLowerCase() !== firstname[0].toUpperCase() && lastname[0].toLowerCase() !== lastname[0].toUpperCase()){
    return firstName[firstname[0].toUpperCase()] + ' ' + surname[lastname[0].toUpperCase()];
  } else {
    return 'Your name must start with a letter from A - Z.';
  }
}
