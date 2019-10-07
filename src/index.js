const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = expr.split('');
    let size = 10;
    let result = []; 
    
 for (let i = 0; i <Math.ceil(arr.length/size); i++) {
    result[i] = arr.slice((i*size), (i*size) + size);
 }
    
 result = result.map(i => i.reduce((a,b) => (a+b)));
     
 result = result.map(i => i.replace(/11/g, '-')).map(i => i.replace(/10/g, '.')).map(i => i.replace(/0/g, '')).map(i => i.replace(/\*/g, ' '));
 
 result = result.map((i) => {               
    for (key in MORSE_TABLE) {
        if (i === key) {
            return MORSE_TABLE[key];
        } 
        if (i === " ") {
            return " ";
        }
    }
});

console.log(result);
result = result.join('');
return result;
}

module.exports = {
    decode
}