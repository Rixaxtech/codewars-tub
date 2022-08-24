/*
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24 

couldnt figure out properly */

function grow(x){
    return x.reduce((a,b) => a*b, 0)
  };


  // proper answer was the 0 was supposed to be 1.