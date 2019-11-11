const HashMap = require('./hashmaps');

/*function anagram(strs){
  let an = new HashMap();
  HashMap.MAX_LOAD_RATIO = 0.5;
  HashMap.SIZE_RATIO = 3;

  for(let i = 0; i < strs.length; i++){
    an.set(strs[i], i);
  }
  //console.log(an);

  const hold = [];
  strs.forEach(str => {
    let key = str.split('').sort().join('');
    let counter = 0;
    an.set(key, counter++);


    console.log(an)

    if(hold[key]) {
      hold[key].push(str);
    }
    else {
      hold[key] = [str];
    }
  });
  //console.log(hold)
  return;
}*/


/*function anagram(strs){
  let an = new HashMap();

  strs.forEach(str => {
    const key = str.split('').sort().join('');

    if(an.get(key) === undefined){
      an.set(key, [str]);
    }
    else {
      let temp = an.get(key);
      an.set(key, [...temp, str])
    }

  });
  console.log(an)
  return an._hashtable;
}*/

function anagram(strs){
  let an = new HashMap();

  for(let i=0; i<strs.length; i++) {
    let str = strs[i];
    const key = str.split('').sort().join('');
    let value = an.get(key);
    an.set(key, [...value, str]);
  }
    
  console.log(an.getValues());
  return an.getValues();
}

let input = ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'];

anagram(input);
