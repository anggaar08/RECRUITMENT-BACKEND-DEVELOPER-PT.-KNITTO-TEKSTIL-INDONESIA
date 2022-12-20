var str = "natan"
str = str.replace(/[^a-zA-Z0-9]+/gi, '').toLowerCase();
console.log(str == str.split('').reverse().join(''));
