const dict = 'abcdefghijklmnopqrstuvwxyz';

function caesarCiphus(str) {
    let result = '';
    
    for (let i = 0; i < str.length; ++i) {
        let letter = str.charAt(i);
        
        if (dict.includes(letter.toLowerCase())) {
            let code = str.charCodeAt(i);
            if (letter === 'z') result += 'a';
            else if (letter === 'Z') result += 'A';
            else result += String.fromCharCode(code + 1);
        }
        else result += letter;
    }
    
    return result;
}

export default caesarCiphus;