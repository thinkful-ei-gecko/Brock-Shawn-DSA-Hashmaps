const HashMap = require('./hashmaps');


// remove duplicates but keep first occurence
function dedupe(str) {
  HashMap.MAX_LOAD_RATIO = 0.5;
  HashMap.SIZE_RATIO = 3;
  let testHashMap = new HashMap();
  for (let i = str.length - 1; i >= 0; i--) {
    testHashMap.set(str[i], `${i}`);
  }
  // console.log(testHashMap);
  //console.log(JSON.stringify(testHashMap));
  return testHashMap;
}
let string = 'google all that you can think of';
console.log(dedupe(string));