export default function caesarCipher(string, shiftFactor){
    let cipher = "";

    for(let i = 0; i < string.length;i++){
        let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if(alphabet.includes(string[i])){
            let uniCode = string.charCodeAt(i) + shiftFactor % 26;
            if(alphabet.substring(0,26).includes(string[i])){
                if(uniCode > 90){
                    cipher = cipher.concat(String.fromCharCode(uniCode - 90 + 64));
                } else if(uniCode < 65) {
                    cipher = cipher.concat(String.fromCharCode(90 + uniCode - 64));
                } else {
                    cipher = cipher.concat(String.fromCharCode(uniCode));
                }                
            } else {
                if(uniCode > 122){
                    cipher = cipher.concat(String.fromCharCode(uniCode - 122 + 96));
                } else if(uniCode < 97) {
                    cipher = cipher.concat(String.fromCharCode(121 + uniCode - 97));
                } else {
                    cipher = cipher.concat(String.fromCharCode(uniCode));
                }
            }
        } else{
            cipher = cipher.concat(string[i]);
        }
    }

    return cipher;
}