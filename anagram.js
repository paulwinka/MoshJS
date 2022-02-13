let str1 = 'abc';
let str2 = 'cde';
console.log(areTheseAnagrams(str1, str2));

function areTheseAnagrams(str1, str2) {
  const array1 = str1.split('').sort();
  const array2 = str2.split('').sort();
  console.log(array1);
  console.log(array2);
  let isAnagram = true;
  if (array1.length !== array2.length) {
    isAnagram = false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        isAnagram = false;
      }
    }
  }
  return isAnagram;
}
