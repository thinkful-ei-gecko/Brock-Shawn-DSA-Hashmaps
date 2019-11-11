const HashMap = require('./hashmaps');

// 4 function to find if a string is a palindrome
function isPal(str){
  let pal = new HashMap();
  HashMap.MAX_LOAD_RATIO = 0.5;
  HashMap.SIZE_RATIO = 3;

  // loops through the string and sets each character into its own place in the hashmap
  for(let i = 0; i < str.length; i++){
    pal.set(str[i], 0);
  }

  // counts the number of times each str[i] and sets the value of it to the counter
  for(let i = 0; i < str.length; i++){
    let counter = pal.get(str[i]) +1;
    pal.set(str[i], counter);
    //console.log(pal)
  }

  let oddCount = 0;
  for (let i = 0; i < str.length; i++) {
    if(pal.get(str[i]) % 2 !== 0) {
      oddCount++;
    }
    //console.log(oddCount)
  }

  //if there are less than 1 odd cahrs it is a palidrome, if not its not.
  if(oddCount > 1) {
    return false;
  } else {
    return true;
  }

}
console.log(isPal('tacocat'));