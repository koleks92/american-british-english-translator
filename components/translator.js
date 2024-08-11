const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')


function reverseDict(dictionary) {
    const reversedDict = {};

    for (const [key, value] of Object.entries(dictionary)) {
        reversedDict[value] = key;  // Reverse the key-value pair
    }

    return reversedDict;  // Return the reversed dictionary after the loop completes
};

function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
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

        Object.keys(americanOnly).forEach(key => {
            const regex = new RegExp(`\\b${key}\\b`, 'gi'); // word boundary to match full words only
            text = text.replace(regex, americanOnly[key]);
        });
    
        Object.keys(americanToBritishSpelling).forEach(key => {
            const regex = new RegExp(`\\b${key}\\b`, 'gi');
            text = text.replace(regex, americanToBritishSpelling[key]);
        });
    
        Object.keys(americanToBritishTitles).forEach(key => {
            // Create a regex to match the title with punctuation or end of string
            const regex = new RegExp(key, 'gi');
            text = text.replace(regex, capitalize(americanToBritishTitles[key]));
          });

        // Time
        text = text.replace(/(\d+):(\d+)/g, '$1.$2');

        return text
    }

    

    // British to American translation
    b2a(text) {
        
        let britishToAmericanSpelling = reverseDict(americanToBritishSpelling);
        let britishToAmericanTitles = reverseDict(americanToBritishTitles);


        Object.keys(britishOnly).forEach(key => {
            const regex = new RegExp(`\\b${key}\\b`, 'gi'); // word boundary to match full words only
            text = text.replace(regex, britishOnly[key]);
        });
    
        Object.keys(britishToAmericanSpelling).forEach(key => {
            const regex = new RegExp(`\\b${key}\\b`, 'gi');
            text = text.replace(regex, britishToAmericanSpelling[key]);
        });
    
        Object.keys(britishToAmericanTitles).forEach(key => {
            const regex = new RegExp(`\\b${key}\\b`, 'gi');
            text = text.replace(regex, capitalize(britishToAmericanTitles[key]));
        });

        // Time
        text = text.replace(/(\d+).(\d+)/g, '$1:$2');

        return text
    }
}

module.exports = Translator;