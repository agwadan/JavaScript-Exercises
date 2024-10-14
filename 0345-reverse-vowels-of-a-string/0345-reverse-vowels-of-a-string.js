/**
 * @param {string} s
 * @return {string}
 */
 /* 
 - split string
 - loop through checking for vowels, and store the index of the vowel and vowel itself.
 - reverse the initial string
 - reloop through and push the vowels at those indexes.
  */

var reverseVowels = function(s) {
    let arr1 = s.split('');
    let vowelsArr = [];

    for(let i=0; i<arr1.length; i++){
        if(
            arr1[i].toLowerCase() === 'a' || 
            arr1[i].toLowerCase() === 'e' || 
            arr1[i].toLowerCase() === 'i' || 
            arr1[i].toLowerCase() === 'o' || 
            arr1[i].toLowerCase() === 'u'
        ) {
            vowelsArr.push(arr1[i]);
        }
    }

    vowelsArr = vowelsArr.reverse();
    count = 0;

    let arr3 = [];

    for(let i=0; i<arr1.length; i++){
        if(
            arr1[i].toLowerCase() === 'a' || 
            arr1[i].toLowerCase() === 'e' ||
            arr1[i].toLowerCase() === 'i' ||
            arr1[i].toLowerCase() === 'o' ||
            arr1[i].toLowerCase() === 'u'
        ) {
            arr3.push(vowelsArr[count]);
            count++;
        } else{
            arr3.push(arr1[i])
        }

    }
    return arr3.join("");
};