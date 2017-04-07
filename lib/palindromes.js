function isPalindrome(s) {
  var x = s.replace(/\s/g, '');
  var stringReverse = x.split("").reverse().join("");
  return x == stringReverse;
}

module.exports = isPalindrome;
