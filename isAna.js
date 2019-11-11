const HashMap = require('./hashmaps');

function anagram(strs){
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
}

let input = ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'];

anagram(input);



/*function anagram(strs){
  let an = new HashMap();
  HashMap.MAX_LOAD_RATIO = 0.5;
  HashMap.SIZE_RATIO = 3;


  strs.forEach(str => {
    const key = str.split('').sort().join('');

    const hold = an.get(key) || [];

    an.set(key, [...hold, str]);
  });
  //console.log(hold)
  return Array.from(an.values());
}*/