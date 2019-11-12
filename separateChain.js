const HashMap = require('./hashmaps');

function main() {
  let hh = new HashMap();

  hh.set('todd', 10);
  hh.set('bob', 11);
  hh.set('bob', 11);
  console.log(hh.get('bob'))
  console.log(hh.get('todd'))


  console.log(hh)

}
main();