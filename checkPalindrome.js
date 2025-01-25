function isPalindrome(str){
    let splitStr = str.split("").reverse().join("")
    return splitStr.toLowerCase()===str.toLowerCase()
}
console.log(isPalindrome("Malayalam"))