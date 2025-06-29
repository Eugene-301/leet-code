import test from "../../test.mjs";

const isPalindrome = (s) => {
  const formatedString = s.replace(/\W|_/g, "").toLowerCase();
  const reversedString = formatedString.split("").reverse().join("");

  return formatedString === reversedString;
};

test(isPalindrome("A man, a plan, a canal: Panama"), true); // passed
test(isPalindrome("race a car"), false); // passed
test(isPalindrome(" "), true); //passed
