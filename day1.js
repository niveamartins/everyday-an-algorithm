/*

Source: InterviewBit
Name: Majority Element

Given an array of size N, find the majority element. The majority element is the element that appears more than floor(N/2) times.
You may assume that the array is non-empty and the majority element always exist in the array.

Input Format
The first argument is an integer array A.

Output Format
Return the majority element.

*/

module.exports = { 
    //param A : array of integers
    //return an integer
       majorityElement : function(A){
           const hashTable = {}
           const parameterToMajority = A.length/2

           A.forEach((value) => {
               if (hashTable[value] !== undefined) {
                   hashTable[value] += 1;
               } else {
                   hashTable[value] = 1;
               }
           })
           
           for (let element in hashTable) {
               if (hashTable[element] > parameterToMajority) return element;
           }
       }
   };