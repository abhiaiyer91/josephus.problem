var chairArr = [];
for (var i = 1; i <= 100; i++)
    chairArr.push(i);

for (i = 1; i < chairArr.length-2; i = i + 2)
    chairArr.push(chairArr[i]);

console.log('--- Final result: ' + chairArr[i]);