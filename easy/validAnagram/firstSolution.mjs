import test from "../../test.mjs";

const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  const counts = {
    sCount: {},
    tCount: {},
  };

  for (const char of t) {
    counts.tCount[char] = (counts.tCount[char] || 0) + 1;
  }

  for (const char of s) {
    counts.sCount[char] = (counts.sCount[char] || 0) + 1;
  }

  return (
    JSON.stringify(Object.entries(counts.tCount).sort()) ===
    JSON.stringify(Object.entries(counts.sCount).sort())
  );
};

test(isAnagram("aaanagram", "aangaramm"), false); // passed
test(isAnagram("rat", "car"), false); //passed
