let re;
// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i; // ^ - Must start with
re = /world$/i; // $ - Must end with
re = /^hello$i/; // ^$ Must begin and end with
re = /h.llo/i; // . - Match any one character
re = /h*llo/i; // * - Matches any one character 0 or more times
re = /gre?a?y/i; // ? - Option character | Gry, Gray, Grey Greay
re = /gre?a?y\?/i; // \ - Escape character | Gry?, Gray?, Grey?, Greay?

// Brackets [] - Character Sets
re = /gr[ae]y/i; // [] - Must be one of the characters inside | gray, grey
re = /[GF]ray/; // [] - Without i this will become case sensative and must be what is in the brackets | Gray, Fray
re = /[^GF]ray/i; // [^] - Match anything except what's in brackets
re = /[A-Z]ray/; // [A-Z] - Match any uppercase character within the range
re = /[a-z]ray/; // [a-z] - Match any lowercase character within the range
re = /[A-Za-z]ray/; // [A-Za-z] - Match any letter, uppercase or lowercase
re = /[0-9]ray/; // [0-9] - Match any digit
re = /[0-9][0-9]ray/; // [0-9][0-9] - Match any number twice in a row

// Braces {} - Quantifiers
re = /Hel{2}o/i; // {n} - The letter before must occur EXACTLY n times
re = /Hel{2,4}o/i; // {n-m} - The letter before must occur AT LEAST n time but not more than m times.
re = /Hel{2,}o/i; // {n,} - The letter before must occure AT LEAST n times

// Parentheses () - Grouping
re = /([0-9]x){3}/; // (){n} - The parentheses pattern must occur AT LEAST n times
re = /^([0-9]x){3}$/; // ^(){n}$ - The pattern must start with the characters in the parentheses, happen n time, then end

// Shorthand Character Classes
re = /\w/; // /\w/ - Match ONCE any word characters - alphanumeric or _
re = /\w+/; // /\w+/ - Match ONE or MORE word characters - alphanumeric or _
re = /\W/; // /\W/ - Capital W match Non-Word characters
re = /\d/; // /\d/ - Match any digit
re = /\d+/; // /\d+/ - Match any digit 0 or more times
re = /\D/; //  /\D/ - Capital D match any Non-digit characters
re = /\s/; // /\s/ - Match white-space characters
re = /\S/; // /\S/ - Capital S match non-white-space characters 
re = /Hell\b/i; // /\b/ - Word Boundry only matchs a specific word

// Assertions
re = /x(?=y)/; // Match x only if it's followed by y
re = /x(?=!y)/; // Match x only if it's NOT followed by y




// String to match
const str = 'xy';

// Log results
const result = re.exec(str);
console.log(result);




function reTest(re, str) {
    if(re.test(str)) {
        console.log(`${str} matched ${re.source}`);
    } else {
        console.log(`${str} does NOT match ${re.source}`)
    }
}
reTest(re, str);