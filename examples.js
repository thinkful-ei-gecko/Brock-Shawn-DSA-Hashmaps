//simple hash function for a number
function simpleHash(Number){
  return Number & hashTable.length;
}

//when the key is a string
/*
const obj = {
    key: 'david',
    value: 'vocals'
};
Take the ASCII value of each character and add them up
*/
// simple hash function for a string
function simpleHashFunction(String) {
  let total = 0;
  for (let i = 0; i < String.length; i++) {
    total += String.charCodeAt(i);
  }
  return total % hashTable.length;
}


// a sting->int hash function
function hashString(string){
  // vairable we declared, initialized to a number, a prime number
  let hash = 5381;

  // iterate through each key, 
  // extract each character and convert to numeric value
  // take the numeric value of each character and add it to the hash value - 
  // << is called a left shift , force the value of hash to be even bigger
  for (let i = 0; i<string.length; i ++){
    hash = (hash << 5) + hash + string.charCodeAt(i);

    // force hash to be a 32 bit integer
    hash = hash & hash;
  }
  // takes the hash value and forces it to be a positive integer
  return hash >>> 0;
}


//inserting into a hash map
const obj = {
  key: 'david',
  value: 'vocals'
};

const hash = hashString(obj.key); // 256362285

const index = hash % capacity; // 3
