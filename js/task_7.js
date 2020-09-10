function anagr(a, b) {
    if (a.length === b.length) {
        let arrA = a.split('').sort();
        let arrB = b.split('').sort();

        for (let i = 0; i < a.length; i++) {
            if (!arrA[i] === arrB[i]) {
                return false;
            }
        }
        return true;
    }
    return false;
}

alert(anagr(prompt("Enter the first string: ", ""), prompt("Enter the second string: ", "")));