export function getInterval(note1, note2) {
    const octaves = parseInt(note2[1]) - parseInt(note1[1]);
    const orderOfNotes = Array.from('CDEFGAB');

    return Math.abs(orderOfNotes.indexOf(note2[0]) - orderOfNotes.indexOf(note1[0]) + 7 * octaves) + 1;
}
