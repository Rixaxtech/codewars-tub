// 7kyu Highest and Lowest

function highAndLow(numbers){
    // ...
    let result = [];
    
    let nums = numbers.split(' ');
    
    let a = Math.max(...nums);
    let b = Math.min(...nums);
    
    result.push(a);
    result.push(b);
    
    return result.toString().replace(',', ' ');
  }