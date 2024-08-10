const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

function capitalizeWord(text) {
    const word = text.split("");
    word[0] = word[0].toUpperCase();
    return word.join("");
  }

function reverseDict(dictionary) {
    const reversedDict = {};

    for (const [key, value] of Object.entries(dictionary)) {
    reversedDict[value] = key;

    return reverseDict;
    };
}

class Translator {
    // Split text into array
    splitToArray(text) {

        const stringLowered = text.toLowerCase();

        const stringsArray = stringLowered.split(" ");        
        
        return stringsArray;
    
    };

    // American to British translation
    a2b(text) {
        const array = this.splitToArray(text);

        let newArray = [];

        for (let i = 0; i < array.length; i++ ) {

            if (americanOnly[array[i].replace(/[.,?!]/g, '')]) {
                 newArray.push(americanOnly[array[i].replace(/[.,?!]/g, '')])
            } else {
                if (americanToBritishSpelling[array[i].replace(/[.,?!]/g, '')]) {
                    newArray.push(americanToBritishSpelling[array[i].replace(/[.,?!]/g, '')])
               } else {
                    if (americanToBritishTitles[array[i]]) {
                        newArray.push(americanToBritishTitles[array[i]])
                } else {
                    newArray.push(array[i])
                }
               }
            }
        };

        newArray[0] = capitalizeWord(newArray[0]);

        let newString = newArray.join(" ");

        if ([".", "?", "!"].includes(newString[newString.length - 1])) {
            return newString;
        } else {
            newString = newString + ".";
            return newString
        }
        
            

    };

    // British to American translation
    b2a(text) {
        const array = this.splitToArray(text);

        let newArray = [];

        let britishToAmericanSpelling = reverseDict(americanToBritishSpelling);
        let britishToAmericanTitles = reverseDict(americanToBritishTitles);



        for (let i = 0; i < array.length; i++ ) {

            if (britishOnly[array[i].replace(/[.,?!]/g, '')]) {
                 newArray.push(britishOnly[array[i].replace(/[.,?!]/g, '')])
            } else {
                if (britishToAmericanSpelling[array[i].replace(/[.,?!]/g, '')]) {
                    newArray.push(britishToAmericanSpelling[array[i].replace(/[.,?!]/g, '')])
               } else {
                    if (britishToAmericanTitles[array[i]]) {
                        newArray.push(britishToAmericanTitles[array[i]])
                } else {
                    newArray.push(array[i])
                }
               }
            }
        };

        newArray[0] = capitalizeWord(newArray[0])

        let newString = newArray.join(" ");

        if ([".", "?", "!"].includes(newString[newString.length - 1])) {
            return newString;
        } else {
            newString = newString + ".";
            return newString
        }
    }
}

module.exports = Translator;