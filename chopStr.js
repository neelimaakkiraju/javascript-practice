function string_chop(str, size) {
    if (!size) return [str]; 
    let result = [];
    for (let i = 0; i < str.length; i += size) {
        result.push(str.slice(i, i + size));
    }
    return result;
}

// Test cases
console.log(string_chop('w3resource'));    
console.log(string_chop('w3resource', 2));
console.log(string_chop('w3resource', 3)); 