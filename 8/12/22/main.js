// didn't solve was missing this. & used return when didn't need to in conditionals
// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// "12345".toAlternatingCase() === "12345" // Non-alphabetical characters are unaffected
// "1a2b3c4d5e".toAlternatingCase() === "1A2B3C4D5E"
// "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
// As usual, your function/method should be pure, i.e. it should not mutate the original string.


String.prototype.toAlternatingCase = function () {
    // Define your method here :)
    var sol = '';
    for(var i = 0; i < this.length; i++){
      if(this[i] === this[i].toLowerCase()){
        return sol += this[i].toUpperCase();
      }else{
        return sol += this[i].toLowerCase();
      }
      
    }
    return sol;
  }



  /* correct answer
  String.prototype.toAlternatingCase = function () {

  var outputStr = '';
  
  for (var i=0; i<this.length; i++){
      
      if (this[i] === this[i].toLowerCase()){
          outputStr += this[i].toUpperCase()
      } else {
          outputStr += this[i].toLowerCase()
      }
  }
  
  return outputStr;

}
*/