/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */

 /* 
  - split both arrays
  - create merged Array
  - loop through both arrays and add their elements to mergedArray
  - Join the merged array
  */
var mergeAlternately = function(word1, word2) {
    let arr1 = word1.split("");
    let arr2 = word2.split("");
    let mergedStr = "";

    let maxLength = arr1.length > arr2.length ? arr1.length : arr2.length;
    
    for(let i=0; i < maxLength; i++){
        if(arr1[i]) mergedStr += arr1[i];
        if(arr2[i]) mergedStr += arr2[i];
    }

    return mergedStr;
};