export function reverseString(string){
    let reverse = "";
    for(let i = 0; i < string.length; i++){
        reverse = reverse.concat(string[string.length -1 -i]);
    }
    return reverse;
}