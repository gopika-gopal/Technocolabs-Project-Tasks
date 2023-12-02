

// import MessageMixer from "./messageMixer.js";


// function displayMessage() {
//     console.log(MessageMixer.countCharacter("What is the color of the sky?", "t"));
//     console.log(MessageMixer.capitalizeFirstCharacterOfWords("What is the color of the sky?"));
//     console.log(MessageMixer.reverseWord("What is the color of the sky?"));
//     console.log(MessageMixer.reverseAllWords("What is the color of the sky?"));
//     console.log(MessageMixer.replaceFirstOccurence("What is the color of the sky?", "sky", "water"));
//     console.log(MessageMixer.replaceAllOccurrences("What is the color of the sky?", "sky", "water"));
//     console.log(MessageMixer.encode ("What is the color of the sky?"));
    
//     console.log(MessageMixer.palindrome("gopika"));
//     console.log(MessageMixer.pigLatin("What is the color of the sky?", "manu"));


//     // console.log(MessageMixer.anyname('my name is manu'));
//   }
  
//   displayMessage();




import { count,reverse,reverseAll,capitalize,encode,palindrome,pigLatin,replace,replaceAll } from "./messageMixer.js";


function displayMessage() {
    console.log(count("What is the color of the sky?", "t"));
    console.log(capitalize("What is the color of the sky?"));
    console.log(reverse("What is the color of the sky?"));
    console.log(reverseAll("What is the color of the sky?"));
    console.log(replace("What is the color of the sky?", "sky", "water"));
    console.log(replaceAll("What is the color of the sky?", "sky", "water"));
    console.log(encode ("What is the color of the sky?"));
    
    console.log(palindrome("gopika"));
    console.log(pigLatin("What is the color of the sky?", "manu"));


    // console.log(MessageMixer.anyname('my name is manu'));
  }
  
  displayMessage();
