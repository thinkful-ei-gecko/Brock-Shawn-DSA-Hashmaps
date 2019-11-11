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
//console.log(dedupe(string));

function isPal(str){
  let pal = new HashMap();
  HashMap.MAX_LOAD_RATIO = 0.5;
  HashMap.SIZE_RATIO = 3;

  for(let i = 0; i < str.length; i++){
    pal.set(str[i], 0);
  }

  for(let i = 0; i < str.length; i++){
    let counter = pal.get(str[i]) +1;
    pal.set(str[i], counter);
  }

  let oddCount = 0;
  for (let i = 0; i < str.length; i++) {
    if(pal.get(str[i]) % 2 !== 0) {
      oddCount++;
    }
    console.log(oddCount)
  }

  if(oddCount > 1) {
    return false;
  } else {
    return true;
  }

}
console.log(isPal('tacoocat'));

function main() {
  let lor = new HashMap();
  HashMap.MAX_LOAD_RATIO = 0.5;
  HashMap.SIZE_RATIO = 3;

  //console.log(dedupe('google all that you can think of'));

  /* lor.set('Hobbit', 'Bilbo');
  lor.set('Hobbit', 'Frodo');
  lor.set('Wizard', 'Gandlaf');
  lor.set('Human', 'Aragon');
  lor.set('Elf', 'Legolas');
  lor.set('Maiar', 'The Necromancer');
  lor.set('Maiar', 'Sauron');
  lor.set('RingBearer', 'Gollum');
  lor.set('LadyOfLight', 'Galadriel');
  lor.set('HalfElven', 'Arwen');
  lor.set('Ent', 'Treebeard'); */

  //lor._findSlot('hobbit');
  //lor._hashString('hobbit');

  //console.log(lor);
  //console.log(HashMap.MAX_LOAD_RATIO);
  //console.log(lor.get('Hobbit'));
}
main();

// 1-Q1 What are the values of Maiar and Hobbit that you have? Is there a discrepancy? Explain your answer.
// answers Sauron, Frodo. bc there are two entris for hobbit and for Maiar, we are overriding the value of the first key with the second.

// 1-Q2 What is the capacity of your hash table after you have hashed all the above items?
// without setting ,maxloadratio and sizeratio capacity reamins 8 bc that what we set it to.
// once set the capactiy changed to 24,

// 2-Q1
/*
const WhatDoesThisDo = function(){
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new HashMap();
    map1.set(str1,10);
    map1.set(str2,20);

    let map2 = new HashMap();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3,20);
    map2.set(str4,10);

    console.log(map1.get(str1));
    console.log(map2.get(str3));
}
- first map will put out Hello world with a value of 20,
- second will be a value of 10.

*/

// Q3 -
/*
part-1
k % 11: 10=10, 22=0, 31=9, 4=4, 15=4, 28=6, 17=6, 88=0, 59=4

10 -> 10, 22 -> 0, 31 -> 9, 4 -> 4, 15 -> 4 COLLISION! goes to 5, 28 -> 6, 17 -> 6 COLLISION! goes to 7, 88 -> 0 COLLISON! goes to 1, 59 -> 4 COLLISION! goes to 5 COLLISION! goes to 6 COLLISION! goes to 7 COLLISION! goes to 8.

Result: 0: 22, 1:88, 2:null, 3:null, 4:4, 5:15, 6:28, 7:17, 8:59, 9:31, 10:10


part-2
K % 9: 5=5, 28=1, 19=1, 15=6, 20=2, 33=6, 12=3, 17=8, 10=1

5 -> 5, 28 -> 1, 19 -> 1 COLLISION! goes to 2, 15 -> 6, 20 -> 2 COLLISION! goes to 3, 33 -> 6 COLLISION! goes to 7, 12 -> 3 COLLISION! goes to 4, 17 -> 8, 10 -> 1 COLLISION! goes to 2 COLLISION! goes to 3 COLLISION! goes to 4 COLLISION! goes to 5 COLLISION! goes to 6 COLLISION! goes to 7 COLLISION! goes to 8 COLLISION! goes to 0.

Result: 0:10, 1:28, 2:19, 3:20, 4:12, 5:5, 6:15, 7:33, 8:17
*/
