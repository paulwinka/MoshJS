var myObj = { key1: 'value1', key2: 'value2', 'key three': 'value3' };

printKeyValues(myObj);
function printKeyValues(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'string') {
      console.log(key + ': ' + obj[key]);
    }
  }
}
