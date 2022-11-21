//function word say is a palindrome

// word -> str, no empty, no !, no nums, no funny biz, no caps, 1 word
//return true || false

// racecar -> true
// bob -> true
// tacos -> false

function isPalindrome(word){
    //word -> reverse that word - split reverse join
    let reversedWord = word.split('').reverse().join('')
    //revWord === word
    // if (word === reversedWord){
    //     return true
    // }else{
    //     return false
    // }
    return word === reversedWord
}

console.log(isPalindrome('racecar'), 'true')
console.log(isPalindrome('bob'), 'true')
console.log(isPalindrome('tacos'), 'false')