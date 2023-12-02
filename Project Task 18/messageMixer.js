// const MessageMixer = new Object();

//  MessageMixer.palindrome = function palindrome(str) {
//      if (str === MessageMixer.reverseWord(str)) {
//     return str+" is a palindrome ";
//     } else{
//          return str+" is not a palindrome";
//     }
//  }

//  MessageMixer.pigLatin = function pigLatin(sentence, character) {
//      return sentence.split(" ").join(" "+character + " ")
//  }

// //#1
// MessageMixer.countCharacter = function countCharacter(inputString, inputCharacter) {
//     let count = 0;
//     let string = inputString.toLowerCase();
//     let character = inputCharacter.toLowerCase();
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] === character) {
//             count++;
//         }
//     }
//     return count;
// };

// // #2
// MessageMixer.capitalizeFirstCharacterOfWords = function capitalizeFirstCharacterOfWords(string) {
//     let arr = string.split(" ");
//     for (let i = 0; i < arr.length; i++) {
//         let word = arr[i];
//         arr[i] = word[0].toUpperCase() + word.substring(1);
//     }
//     return arr.join(" ");
// };


// // #3
// MessageMixer.reverseWord = function reverseWord(word) {
//     return word.split("").reverse().join("");
// };

// // #4
// MessageMixer.reverseAllWords = function reverseAllWords(sentence) {
//     let words = sentence.split(" ");
//     for (let i = 0; i < words.length; i++) {
//         words[i] = MessageMixer.reverseWord(words[i]);
//     }
//     return words.join(" ");
// };

// // #5
// MessageMixer.replaceFirstOccurence = function replaceFirstOccurence(string, toBeReplaced, replaceWith) {
//     return string.replace(toBeReplaced, replaceWith);
// };

// // #6  
// MessageMixer.replaceAllOccurrences = function replaceAllOccurrences(string, toBeReplaced, replaceWith) {
//     return string.split(toBeReplaced).join(replaceWith);
// };

// // #7
// MessageMixer.encode = function encode(string) {
//     let replacementObject = { "a": "@", "s": "$", "i": "!", "o": "0" };
//     for (let key in replacementObject) {
//         string = MessageMixer.replaceAllOccurrences(string, key, replacementObject[key]);
//     }
//     return string;
// };



// // MessageMixer.anyname = function printMyName(name) {
// //     return name; 
// // }

// export default MessageMixer;




function palindrome(str) {
    if (str === reverseWord(str)) {
        return str + " is a palindrome ";
    } else {
        return str + " is not a palindrome";
    }
}

function pigLatin(sentence, character) {
    return sentence.split(" ").join(" " + character + " ")
}

//#1
function countCharacter(inputString, inputCharacter) {
    let count = 0;
    let string = inputString.toLowerCase();
    let character = inputCharacter.toLowerCase();
    for (let i = 0; i < string.length; i++) {
        if (string[i] === character) {
            count++;
        }
    }
    return count;
};

// #2
function capitalizeFirstCharacterOfWords(string) {
    let arr = string.split(" ");
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        arr[i] = word[0].toUpperCase() + word.substring(1);
    }
    return arr.join(" ");
};


// #3
function reverseWord(word) {
    return word.split("").reverse().join("");
};

// #4
function reverseAllWords(sentence) {
    let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = reverseWord(words[i]);
    }
    return words.join(" ");
};

// #5
function replaceFirstOccurence(string, toBeReplaced, replaceWith) {
    return string.replace(toBeReplaced, replaceWith);
};

// #6  
function replaceAllOccurrences(string, toBeReplaced, replaceWith) {
    return string.split(toBeReplaced).join(replaceWith);
};

// #7
function encode(string) {
    let replacementObject = { "a": "@", "s": "$", "i": "!", "o": "0" };
    for (let key in replacementObject) {
        string = replaceAllOccurrences(string, key, replacementObject[key]);
    }
    return string;
};



// MessageMixer.anyname = function printMyName(name) {
//     return name; 
// }

export { countCharacter as count, capitalizeFirstCharacterOfWords as capitalize, reverseWord as reverse, reverseAllWords as reverseAll, replaceFirstOccurence as replace, replaceAllOccurrences as replaceAll, encode as encode, palindrome as palindrome, pigLatin as pigLatin };





