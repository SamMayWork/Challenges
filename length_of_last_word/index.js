// LEETCODE Challenge - Length of Last Word
// https://leetcode.com/problems/length-of-last-word/
// Completed 2020/06/09

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let words = s.trim().split(' ');
  return words[words.length-1].length;
}