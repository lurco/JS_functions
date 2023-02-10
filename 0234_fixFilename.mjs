export function fixFilename(filename){
    return filename.replaceAll(/\s+/g, '_');
}