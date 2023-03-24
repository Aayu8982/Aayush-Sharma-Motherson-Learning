// Reverse a String without using reverse().

function reverseString(temp) {
    let data = temp.split('');
    for (let i = 0, j = data.length - 1; i < j; i++, j--) {
        let temp = data[i];
        data[i] = data[j];
        data[j] = temp;
    }
    return data.join('')
}

console.log(reverseString("Aayush"));