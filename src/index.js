
exports.min = function min (array) {
  if(typeof array === 'undefined' || !array.length){
    return 0;
  } else {
    return array.sort((a, b) => a - b)[0];
  }
}

exports.max = function max (array) {
  if(typeof array === 'undefined' || !array.length){
    return 0;
  } else {
    return array.sort((a, b) => b - a)[0];
  }
}

exports.avg = function avg (array) {
  if(typeof array === 'undefined' || !array.length){
    return 0;
  } else {
    return array.reduce((acc, cur, i) => 
      {
        if (i === array.length - 1){
          return (acc + cur)/(i+1);
        } else {
          return acc + cur;
        }
      }, 0);
  }
}
