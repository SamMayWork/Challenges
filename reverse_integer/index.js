// LEETCODE Challenge - Reverse Integer
// https://leetcode.com/problems/reverse-integer/
// Completed 2020/06/08

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const magnitude = `${Math.abs(x)}`.split('').reverse().join('');
  
  if (magnitude > Math.pow(2, 31)-1 || magnitude < -(Math.pow(2, 31)-1)) {
    return 0;
  }

  if (x < 0) {
    return `-${magnitude}`; 
  } else {
    return magnitude;
  }
};  